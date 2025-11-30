import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que estou na página inicial do IBGE", () => {
  cy.visit("https://www.ibge.gov.br/");
});

When('eu digito "população" no campo de busca', () => {
  cy.get("#pesquisa-portal-input").type("população", { delay: 80 });
});

When("eu clico no botão de pesquisa", () => {
  cy.get("#pesquisa-portal-submit").click();
});

Then("devo ver resultados relacionados à população", () => {
  cy.contains(/população/).should("exist");
});
