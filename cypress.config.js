const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const cucumber = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.feature",

    stepDefinitions: [
      "cypress/e2e/**/*.{js,ts}",
      "cypress/support/step_definitions/**/*.{js,ts}"
    ],

    async setupNodeEvents(on, config) {
      await cucumber.addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;
    },

    baseUrl: "https://www.ibge.gov.br",
  },
});
