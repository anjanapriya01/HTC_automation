 //const { beforeEach } = require("mocha");

 const { it } = require("mocha");

 describe('Deleting list',function(){
   
     //Url of the store
     const url="https://htc-demo-store.myshopify.com/";
     before(()=>{
        // Login through our credentials
      cy.visit(url)
      cy.get('.header-bar__module.header-bar__module--list #customer_login_link').click()
      cy.get('#CustomerEmail').type('sapsswathi@gmail.com')
      cy.get('#CustomerPassword').type('swathi@2001')
      cy.get('#customer_login input[type="submit"]').click()
      cy.wait(5000)
   })

     //visiting the store before every testcase
     beforeEach(()=>{
         cy.visit(url)
     })
 
     it('Delete a list',function(){
        //Delete a list 
        
        cy.get('a[href="#swym-wishlist"]').eq(0).click()
        cy.wait(1000)
        cy.get('.swym-wishlist-selector > button').eq(0).click()
        cy.get('.swym-secondary-actions > button').click({force:true})
        cy.get('.swym-wishlist-context-menu-content > button').contains('Add Collaborator').click()
        cy.get('.swym-input-inner-container input').type('anjana.swathi@swymcorp.com')
        cy.get('.swym-action-button-container > button').click()
        
    })
 
 })
 
  
 