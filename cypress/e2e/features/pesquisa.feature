#language: pt

Funcionalidade: Teste de Funcionalidade da Forager Wiki
  Como usuário da Forager Wiki
  Quero garantir que as páginas principais carreguem corretamente
  Para facilitar a navegação e o acesso à informação

  Contexto: Acessando a Forager Wiki
    Dado que acesso a página inicial da Forager Wiki

  # Cenario: Página inicial carrega corretamente
  #   Given que acesso a página inicial da Forager Wiki
  #   Entao o título da página deve conter "Forager Wiki"

  Cenario: Página de Foraging existe e abre
    Given que acesso a página "Wiki"
    Entao o conteúdo deve conter o texto "Wiki"

  Cenario: Link para Skills funciona
    Given que acesso a página "Foraging"
    When clico no link para "Skills"
    Entao devo ser redirecionado para a página "Skills"

  Cenario: Página inexistente deve retornar erro visual
    Given que acesso uma página inexistente
    Entao devo ver indicação de página não encontrada
