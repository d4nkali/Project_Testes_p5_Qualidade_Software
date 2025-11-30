Feature: Busca do IBGE
  Como usuário do site do IBGE
  Quero pesquisar um termo no site
  Para visualizar conteúdos relacionados

  Scenario: Buscar por "população" na página inicial do IBGE
    Given que estou na página inicial do IBGE
    When eu digito "população" no campo de busca
    And eu clico no botão de pesquisa
    Then devo ver resultados relacionados à população
