// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';

// Alternatively you can use CommonJS syntax:
// require('./commands')
import 'cypress-mochawesome-reporter/register';

//logging into the store
/*
beforeEach(function(){
  const url="https://htc-demo-store.myshopify.com/";
    // Visiting the Store
    cy.visit(url)
    
    // Login through our credentials
    cy.get('.header-bar__module.header-bar__module--list #customer_login_link').click()
    cy.get('#CustomerEmail').type('sapsswathi@gmail.com')
    cy.get('#CustomerPassword').type('swathi@2001')
    cy.get('#customer_login input[type="submit"]').click()
    cy.wait(5000)
    
    // Getting captcha 
    Cypress.Commands.add("clickRecaptcha", () => {
        cy.window().then(win => {
          win.document
            .querySelector("iframe[src*='recaptcha']")
            .contentDocument.getElementById("recaptcha-token")
            .click();
        });
      });

      // Clicking on recaptcha.
      cy.clickRecaptcha()
    
    
})
*/