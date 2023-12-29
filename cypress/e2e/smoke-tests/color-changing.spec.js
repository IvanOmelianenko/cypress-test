/// <reference types="cypress" />

const colors = {
  Light: "rgb(255, 255, 255)",
  Dark: "rgb(34, 43, 69)",
  Cosmic: "rgb(50, 50, 89)",
  Corporate: "rgb(255, 255, 255)",
};

describe("Color changing tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Verify Light theme", () => {
    cy.get("nav.fixed").should("have.css", "background-color", colors.Light);
    cy.get("button.select-button").should("have.text", " Light");
  });

  it("Verify Dark Theme", () => {
    cy.get("button.select-button").click();
    cy.get("ul.options-list nb-option:nth-child(2)").click();
    cy.get("nav.fixed").should("have.css", "background-color", colors.Dark);
    cy.get("button.select-button").should("have.text", " Dark");
  });

  it("Verify Cosmic Theme", () => {
    cy.get("button.select-button").click();
    cy.get("ul.options-list nb-option:nth-child(3)").click();
    cy.get("nav.fixed").should("have.css", "background-color", colors.Cosmic);
    cy.get("button.select-button").should("have.text", " Cosmic");
  });

  it("Verify Corporate Theme", () => {
    cy.get("button.select-button").click();
    cy.get("ul.options-list nb-option:nth-child(4)").click();
    cy.get("nav.fixed").should(
      "have.css",
      "background-color",
      colors.Corporate
    );
    cy.get("button.select-button").should("have.text", " Corporate");
  });
});
