import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// =========================
// BACKGROUND
// =========================
Given("que estou na página inicial do IBGE", () => {
  cy.visit("https://www.ibge.gov.br/");
  cy.get("body").should("be.visible");
});

// =========================
// Funções auxiliares
// =========================
const abrirLupa = () => cy.get("#lupa").click();

const campoBusca = () =>
  cy.get('div.envolve_logo.mobile-only [name="searchword"]');

const botaoBusca = () =>
  cy.get('div.envolve_logo:nth-of-type(2) #busca button.button');

const realizarBusca = (texto) => {
  abrirLupa();
  campoBusca().click().clear().type(texto, { delay: 80 });
  botaoBusca().click();
};

// =====================================================
// BUSCAS (já existentes)
// =====================================================

When('eu digito "população" no campo de busca', () => {
  abrirLupa();
  campoBusca().type("população", { delay: 80 });
});

When('eu digito "PIB" no campo de busca', () => {
  abrirLupa();
  campoBusca().type("PIB", { delay: 80 });
});

When('eu digito "censo" no campo de busca', () => {
  abrirLupa();
  campoBusca().type("censo", { delay: 80 });
});

When('eu faço uma busca por "agropecuária"', () => {
  realizarBusca("agropecuária");
});

When('eu busco por "mapas" no campo de pesquisa', () => {
  realizarBusca("mapas");
});

When("eu clico no botão de pesquisa", () => botaoBusca().click());
When("eu aciono a pesquisa", () => botaoBusca().click());

Then("devo ver resultados relacionados à população", () => {
  cy.contains(/popula/i).should("exist");
});

Then("devo visualizar resultados relacionados ao Produto Interno Bruto", () => {
  cy.contains(/PIB/i).should("exist");
});

Then("devo visualizar resultados relacionados ao censo demográfico", () => {
  cy.contains(/censo/i).should("exist");
});

Then("devo ver conteúdos sobre produção agropecuária, pesquisas e levantamentos", () => {
  cy.contains(/agropecuária/i).should("exist");
});

Then("devo visualizar arquivos e mapas temáticos disponíveis", () => {
  cy.contains(/mapa/i).should("exist");
});



// =====================================================
// NOVOS STEPS (menus, vídeos, indicadores…)
// =====================================================

// ---------- Redes Geodésicas ----------
When("eu abro o menu mobile", () => {
  cy.get('div.envolve_logo.mobile-only #nav-toggle').click();
});

When("eu navego até Redes Geodésicas", () => {
  cy.get('#menu_principal li[idmenu="37"] > span:nth-child(1)').click();
  cy.get('#menu_principal li[idmenu="45"] span.subgrupo').click();
  cy.get('#menu_principal a[href="/geociencias/informacoes-sobre-posicionamento-geodesico/rede-geodesica.html"]').click();
});

Then("devo ver a página de Redes Geodésicas", () => {
  cy.get("div.conteudo__interna__titulo h2").should("contain", "Redes Geodésicas");
});

// ---------- População ----------
When("eu navego até a página de População", () => {
  cy.get('#menu_principal li[idmenu="1"] > span:nth-child(1)').click();
  cy.get('#menu_principal li[idmenu="2"] span.nav-header').click();
  cy.get('#menu_principal a[href="/estatisticas/sociais/populacao.html"]').click();
});

Then("devo ver a página População", () => {
  cy.get("div.conteudo__interna__titulo h2").should("contain", "População");
});

// ---------- Comunicados ----------
When("eu clico em ver todos os comunicados", () => {
  cy.get("#section_comunicados a.link-vertodos").click();
});

Then("devo ver a página Comunicados", () => {
  cy.get("div.conteudo__interna__titulo h2").should("have.text", "Comunicados");
});

// ---------- Cidades e Estados ----------
When("eu acesso Cidades e Estados", () => {
  cy.get("#cidades-estados-link-bottom").click();
});

When('eu pesquiso por "Paraíba"', () => {
  cy.get("#autoComplete").click().type("Paraíba{enter}");
});

Then("devo ver os dados da Paraíba", () => {
  cy.get("#responseMunicipios h1").should("have.text", "Paraíba");
});

// ---------- Highlights ----------
When("eu clico no ícone de destaque", () => {
  cy.get('div.envolve_logo.mobile-only li:nth-child(2) a img').click();
});

Then("devo ver a seção Highlights", () => {
  cy.get("#section_comunicados h2").should("have.text", "Highlights");
});

// ---------- Vídeos ----------
When("eu abro a lista completa de vídeos", () => {
  cy.get("#section_videos a.botao-home").click();
});

Then("devo ver o vídeo Respondendo ao IBGE", () => {
  cy.get('#listaVideos a[href="https://www.youtube.com/watch?v=NJmTgeD8C6w"] strong')
    .should("have.text", "Respondendo ao IBGE");
});

// ---------- Painel de Indicadores ----------
When("eu abro o painel de indicadores", () => {
  cy.get("#indicadores-section a.btn-outros-indicadores").click();
});

Then("devo ver o indicador Cana-de-açúcar", () => {
  cy.get("#indicador-cana-de-acucar span.nonsprite")
    .should("contain", "Cana-de-açúcar");
});
