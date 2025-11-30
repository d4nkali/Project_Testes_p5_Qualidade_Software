/// <reference types="cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const base = "https://forager.fandom.com/";

//
// 1. Acessar página inicial
//
Given("que acesso a página inicial da Forager Wiki", () => {
  cy.visit(base);
});

Then("o título da página deve conter {string}", (titulo) => {
  cy.title().should("include", titulo);
});

//
// 2. Acessar páginas internas por nome
//
Given("que acesso a página {string}", (pagina) => {
  const url = `${base}/${pagina}`;
  cy.visit(url);
});

Then("o conteúdo deve conter o texto {string}", (texto) => {
  cy.contains(texto, { matchCase: false }).should("exist");
});

//
// 3. Clicar em links internos
//
When("clico no link para {string}", (nome) => {
  cy.contains("a", nome).click();
});

Then("devo ser redirecionado para a página {string}", (pagina) => {
  cy.url().should("include", `/wiki/${pagina}`);
});

//
// 4. Página inexistente
//
Given("que acesso uma página inexistente", () => {
  cy.visit(`${base}/PaginaQueNaoExiste123`);
});

Then("devo ver indicação de página não encontrada", () => {
  cy.contains("Not a valid community").should("exist");
});
