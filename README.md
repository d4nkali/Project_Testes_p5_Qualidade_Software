# Project Testes Cypress + Cucumber - Qualidade Software p5

Projeto final de testes unitários da cadeira de Qualidade de Software p5.

## Testes Automatizados IBGE – Cypress + Cucumber

Este projeto contém uma suíte de testes automatizados para o site oficial do IBGE, utilizando:

- Cypress
- Cucumber (Gherkin)
- JavaScript
- NodeJS

Estrutura modular de steps reutilizáveis

Os testes validam a funcionalidade de busca, navegação por menus, acesso a indicadores, downloads estatísticos e diversos fluxos reais do site.

---

## Estrutura do Projeto

```
cypress/
  ├── e2e/
  │   └── ibge/
  │       ├── testes.feature
  │       └── testes.js
  ├── fixtures/
  ├── support/
  │   ├── commands.js
  │   └── e2e.js
cypress.config.js
package.json
README.md
```

---

## Instalação e Execução do Projeto

1. Clonar o repositório

```bash
git clone https://github.com/d4nkali/Project_Testes_p5_Qualidade_Software.git
cd Project_Testes_p5_Qualidade_Software
```

2. Instalar Dependências

```bash
npm install
```

3. Abrir o Cypress

```bash
npx cypress open
```

---

## Cenários Implementados

### Testes de busca

- Buscar por "população"
- Buscar por "PIB"
- Buscar por "censo"
- Buscar por "agropecuária"
- Buscar por "mapas"

### Navegação e menus

- Acesso à seção "Redes Geodésicas"
- Acesso à seção "População"
- Visualização de comunicados
- Busca de estados/municípios
- Acesso a vídeos
- Acesso a indicadores diversos

### Downloads estatísticos

- Navegação completa até tabelas de Acesso à Internet e Posse de Celular – 2015
- Verificação de arquivo .xlsx

### Indicadores econômicos

- Navegar até PIB per capita
- Verificar gráfico "Evolução anual – Brasil"

---

## Video



---

## Autores

Projeto desenvolvido por:

- Danilo Pereira 
- João Vitor Pereira
- João Gabriel
- Kevin Kilmer
- Yasmin Fujioka
- Caio Enrique
- Vinícius Silas
