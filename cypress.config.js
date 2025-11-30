const { defineConfig } = require("cypress");
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const bundler = require("@bahmutov/cypress-esbuild-preprocessor");
const cucumber =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    baseUrl: "https://forager.fandom.com/wiki",

    async setupNodeEvents(on, config) {
      // Plugin moderno
      await cucumber(on, config);

      on(
        "file:preprocessor",
        bundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;
    }
  }
});
