//const { beforeEach } = require("mocha");

const { it } = require("mocha");

describe('Adding to Wishlist',function(){
  
    //Url of the store
    const url="https://htc-demo-store.myshopify.com/";

    //visiting the store before every testcase
    beforeEach(()=>{
        cy.visit(url)
    })

    //Checking wishlist launch point
    it('Changing the quantity',function(){
        cy.visit(url+'/collections/all')
        //Changing quantity
        // Product details page
        cy.get('.grid .grid__item > div > div >div:nth-child(3) > div').eq(7).click()
        cy.get('.swym-button-bar > div > button').click()
        cy.get('.swym-product-quantity > button').eq(1).click()
        cy.get('.swym-product-quantity > button').eq(1).click()
        cy.get('.swym-product-quantity > div').should('have.text','3')
        cy.get('.swym-add-btn').click()
        cy.wait(2000)
        cy.get('a[href="#swym-wishlist"]').eq(0).click()
        cy.wait(3000)
        // opening the wishlist page 
        cy.get('.swym-wishlist-name').contains("My Wishlist").click()
        cy.get('.swym-wishlist-grid > a').click()
        cy.get('.swym-product-quantity > div').should('have.text','3')
        cy.get('.swym-close-btn').click()
        cy.go('back')

        
    })


})