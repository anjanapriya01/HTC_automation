 //const { beforeEach } = require("mocha");

 const { it } = require("mocha");

 describe('Duplicating list',function(){
   
     //Url of the store
     const url="https://htc-demo-store.myshopify.com/";
 
     //visiting the store before every testcase
     beforeEach(()=>{
         cy.visit(url)
     })
 
     it('Duplicate a list',function(){
        //Delete a list 

        cy.visit(url+'/collections/all')
        cy.get('.grid .grid__item > div > div >div:nth-child(3) > div').eq(10).click()
        cy.get('.swym-button-bar > div > button').click()
        cy.get('.swym-add-btn').click()
        cy.wait(1000)
        
        cy.get('a[href="#swym-wishlist"]').eq(0).click()
        cy.wait(1000)
        cy.get('.swym-wishlist-selector > button').eq(0).click()
        cy.get('.swym-secondary-actions > button').click({force:true})
        cy.get('.swym-wishlist-context-menu-content > button').contains('Duplicate List').click()
        cy.get('.swym-duplicate-wishlist-button-container .swym-duplicate-wishlist-btn').click()
        cy.wait(3000)
        cy.get('.swym-wishlist-selector > button .swym-wishlist-name').contains('My Wishlist Copy').click()
        cy.get('.swym-wishlist-grid > a > .swym-is-button .swym-title').should('have.text','Black Beanbag')
        cy.get('.swym-modal-content .swym-close-btn').click()
        cy.go('back')
         
    })
 
 })
 
  
 