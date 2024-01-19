import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "9m9but",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:4200",
    specPattern: "cypress/e2e/**/*.spec.{js,jsx,ts,tsx}",
  },
  reporter: "mochawesome",
  reporterOptions: {
    overwrite: false,
    html: false,
    json: true,
    reportDir: "cypress/results",
  },
  screenshotOnRunFailure: true,
  video: false,
  // viewportHeight: 800,
  // viewportWidth: 600,
  retries: 0,
  defaultCommandTimeout: 5000,
  requestTimeout: 10000,
  responseTimeout: 30000,
});
