import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que estou na página inicial do IBGE", () => {
  cy.visit("/");
});

When('eu digito "população" no campo de busca', () => {
  cy.get('input[type="search"]').type("população", { delay: 80 });
});

When("eu clico no botão de pesquisa", () => {
  cy.get('button[class*="search"]').click();
});

Then("devo ver resultados relacionados à população", () => {
  cy.contains(/população/i).should("exist");
});
