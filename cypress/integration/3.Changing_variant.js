//const { beforeEach } = require("mocha");

const { it } = require("mocha");

describe('Changing the variant before adding to wishlist',function(){
  
    //Url of the store
    const url="https://htc-demo-store.myshopify.com/";

    //visiting the store before every testcase
    beforeEach(()=>{
        cy.visit(url)
    })

    //Checking wishlist launch point
    it('Changing the variant',function(){
        cy.visit(url+'/collections/all')
        // Changing Variant before adding to list!
        cy.get('.grid .grid__item > div > div >div:nth-child(3) > div').eq(6).click()
        cy.get('.swym-button-bar > div > button').click()
        cy.get('.swym-select .swym-value').select('M')
        cy.get('.swym-add-btn').click()
        cy.wait(2000)
        cy.get('a[href="#swym-wishlist"]').eq(0).click()
        cy.wait(5000) 
        cy.get('.swym-wishlist-name').contains("My Wishlist").click()
        cy.get('.swym-wishlist-grid > a > div').eq(1).should('have.text','M')
        cy.get('.swym-close-btn').click()
        cy.go('back')
  
    })
})

