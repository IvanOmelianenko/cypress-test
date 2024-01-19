/// <reference types="cypress" />

describe("Table", () => {});

it("Verify table", () => {
  cy.visit("/pages/tables/smart-table");
  cy.get("tbody tr")
    .eq(0)
    .within(() => {
      cy.get(".nb-edit").click();
      cy.get("input[placeholder='First Name']").clear().type("Ivan");
      cy.get("input[placeholder='Last Name']").clear().type("Omelianenko");
      cy.get(".nb-checkmark").click();
      cy.get("table-cell-view-mode").eq(1).should("have.text", "Ivan");
      cy.get("table-cell-view-mode").eq(2).should("have.text", "Omelianenko");
    });
});

it("invoke", () => {
  cy.visit("/pages/modal-overlays/popover");
  cy.contains("button", "Right").then((button) => {
    button.text("text from then");
  });
  cy.contains("button", "Right").invoke("text", "NEW NAME");
  cy.contains("button", "Top").invoke("attr", "disabled", true);
});

it.only("trigger", () => {
  cy.visit("/pages/modal-overlays/popover");
  cy.contains("button", "Right").trigger("mouseenter");
});
