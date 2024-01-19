/// <reference types="cypress" />

describe("Hover modal text test", () => {});

it("Verify text after hover", () => {
  cy.visit("/pages/modal-overlays/popover");
  cy.get("button[nbpopoverplacement = 'right']").trigger("mouseenter");
  cy.get("nb-overlay-container div").should("be.visible");
  cy.get("nb-overlay-container div")
    .invoke("text")
    .should("include", "Hello, how are you today?");
});
