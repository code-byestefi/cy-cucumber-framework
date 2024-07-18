const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default
const { configureAllureAdapterPlugins } = require("@mmisty/cypress-allure-adapter/plugins");

module.exports = defineConfig({
  defaultCommandTimeout: 10000,
  e2e: {
    setupNodeEvents(on, config) {
      configureAllureAdapterPlugins(on, config);
      // implement node event listeners here
      on('file:preprocessor', cucumber())

      return config;
    },
    specPattern: "cypress/e2e/integration/*.feature",
  },
});
