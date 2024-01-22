/// <reference types="cypress" />

describe("Name from dialog test", () => {});

it("Verify name after submit dialog", () => {
  cy.visit("/pages/modal-overlays/dialog");
  cy.get(".result-from-dialog button").click();
  cy.get("input[placeholder='Name']").type("Ivan");
  cy.get("button[status='success']").click();
  cy.get("h3 + ul li.ng-star-inserted").should("have.text", "Ivan");
});
