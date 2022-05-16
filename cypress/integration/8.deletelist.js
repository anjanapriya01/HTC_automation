 //const { beforeEach } = require("mocha");

 const { it } = require("mocha");

 describe('Deleting list',function(){
   
     //Url of the store
     const url="https://htc-demo-store.myshopify.com/";
 
     //visiting the store before every testcase
     beforeEach(()=>{
         cy.visit(url)
     })
 
     it('Delete a list',function(){
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
        cy.get('.swym-wishlist-context-menu-content > button').contains('Delete List').click()
        cy.get('.swym-clear-wishlist-modal-dialog > button').eq(0).click()
        cy.get('.swym-wishlist-container-content-htc-user > div').should('have.class','swym-empty-wishlist-container')
    
         
    })
 
 })
 
  
 