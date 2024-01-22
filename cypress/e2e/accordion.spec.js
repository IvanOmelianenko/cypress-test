/// <reference types="cypress" />

describe("Accordion text test", () => {});

it("Verify accordion text after opening it", () => {
  cy.visit("/pages/layout/accordion");
  cy.get("nb-card-body button").click();
  cy.get(".item-body").first().should("include.text", "A nebula");
});
