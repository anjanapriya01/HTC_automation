//const { beforeEach } = require("mocha");

const { it } = require("mocha");

describe('Note',function(){
  
    //Url of the store
    const url="https://htc-demo-store.myshopify.com/";

    //visiting the store before every testcase
    beforeEach(()=>{
        cy.visit(url)
    })

    //Checking wishlist launch point
    it('Adding a note and Changing an existing note',function(){
        cy.visit(url+'/collections/all')
        cy.get('.grid .grid__item > div > div >div:nth-child(3) > div').eq(5).click()
        cy.get('.swym-button-bar > div > button').click()
        cy.get('.swym-add-btn').click()
        cy.wait(2000)
        cy.get('a[href="#swym-wishlist"]').eq(0).click()
        cy.wait(1000) 
        cy.get('.swym-wishlist-selector > button .swym-popover-button').eq(0).click()
        cy.get('.swym-wishlist-note-popup-content .swym-note-container > textarea').type('New Collections')
        cy.get('.swym-wishlist-note-popup-content .swym-action-btn-container > button').should('have.text','Done').click()
        cy.get('.swym-modal-content .swym-close-btn').click()
        cy.get('a[href="#swym-wishlist"]').eq(0).click()
        cy.get('.swym-popover-button > button .swym-value').should('have.text','New Collections')
        cy.wait(2000)
        cy.get('.swym-modal-content .swym-close-btn').click()
        
        //Changing an existing note
        cy.get('a[href="#swym-wishlist"]').eq(0).click()
        cy.wait(2000) 
        cy.get('.swym-wishlist-selector > button .swym-popover-button').eq(0).click()
        cy.get('.swym-wishlist-note-popup-content .swym-note-container > textarea').type(' and New Models')
        cy.get('.swym-wishlist-note-popup-content .swym-action-btn-container > button').should('have.text','Done').click()
        cy.get('.swym-modal-content .swym-close-btn').click()
        cy.get('a[href="#swym-wishlist"]').eq(0).click()
        cy.get('.swym-popover-button > button .swym-value').should('have.text','New Collections and New Models')

    })

})