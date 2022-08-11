const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    
    },
    baseUrl: 'https://magento.nublue.co.uk/'
  },
});
