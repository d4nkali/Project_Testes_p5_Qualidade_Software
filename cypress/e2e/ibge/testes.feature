Feature: Busca e Navegação no site do IBGE
  Como visitante do site do IBGE
  Quero navegar e acessar conteúdos
  Para visualizar informações e dados estatísticos do Brasil

  Background:
    Given que estou na página inicial do IBGE

  Scenario: Buscar por "população" na página inicial do IBGE
    When eu digito "população" no campo de busca
    And eu clico no botão de pesquisa
    Then devo ver resultados relacionados à população

  Scenario: Buscar por "PIB" na página inicial do IBGE
    When eu digito "PIB" no campo de busca
    And eu aciono a pesquisa
    Then devo visualizar resultados relacionados ao Produto Interno Bruto

  Scenario: Buscar por "censo" no site do IBGE
    When eu digito "censo" no campo de busca
    And eu clico no botão de pesquisa
    Then devo visualizar resultados relacionados ao censo demográfico

  Scenario: Buscar por agropecuária
    When eu faço uma busca por "agropecuária"
    Then devo ver conteúdos sobre produção agropecuária, pesquisas e levantamentos

  Scenario: Buscar por mapas no site do IBGE
    When eu busco por "mapas" no campo de pesquisa
    Then devo visualizar arquivos e mapas temáticos disponíveis

  Scenario: Acessar Redes Geodésicas no menu do IBGE
    When eu abro o menu mobile
    And eu navego até Redes Geodésicas
    Then devo ver a página de Redes Geodésicas

  Scenario: Acessar População pelo menu
    When eu abro o menu mobile
    And eu navego até a página de População
    Then devo ver a página População

  Scenario: Ver todos os comunicados
    When eu clico em ver todos os comunicados
    Then devo ver a página Comunicados

  Scenario: Pesquisar estado da Paraíba em Cidades e Estados
    When eu acesso Cidades e Estados
    And eu pesquiso por "Paraíba"
    Then devo ver os dados da Paraíba

  Scenario: Acessar Highlights pelo ícone do topo
    When eu clico no ícone de destaque
    Then devo ver a seção Highlights

  Scenario: Ver detalhes de vídeos do IBGE
    When eu abro a lista completa de vídeos
    Then devo ver o vídeo Respondendo ao IBGE

  Scenario: Acessar Painel de Indicadores
    When eu abro o painel de indicadores
    Then devo ver o indicador Cana-de-açúcar
