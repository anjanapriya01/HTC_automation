//const { beforeEach } = require("mocha");

const { it } = require("mocha");

describe('Note',function(){
  
    //Url of the store
    const url="https://htc-demo-store.myshopify.com/";

    //visiting the store before every testcase
    beforeEach(()=>{
        cy.visit(url)// Login through our credentials
        cy.get('.header-bar__module.header-bar__module--list #customer_login_link').click()
        cy.get('#CustomerEmail').type('sapsswathi@gmail.com')
        cy.get('#CustomerPassword').type('swathi@2001')
        cy.get('#customer_login input[type="submit"]').click()
        cy.wait(4000)

    })
    
    it('Comment on a list and product ',function(){
    
    //Comment on a list
        cy.visit(url+'/collections/all')
        cy.get('.grid .grid__item > div > div >div:nth-child(3) > div').eq(9).click()
        cy.get('.swym-button-bar > div > button').click()
        cy.get('.swym-add-btn').click()
        cy.wait(1000)
        cy.get('a[href="#swym-wishlist"]').eq(0).click()
        cy.wait(1000) 
        cy.get('.swym-wishlist-selector > button').eq(0).click()
        cy.get('.swym-comments-preview .swym-add-comment-container .swym-add-comment > textarea').click({force:true})
        cy.get('.swym-add-comment-container .swym-add-comment > textarea').eq(1).type('New model of this product?')
        cy.get('.swym-comments-content .swym-add-comment-container .swym-add-comment > button').click({force:true}) 
        cy.get('.swym-modal-content .swym-close-btn.swym-nav').click()
        cy.get('.swym-comment-item .swym-comment-details .swym-comment-text').should('have.text','New model of this product?')
        cy.get('.swym-modal-content .swym-close-btn').click()
        cy.go('back')


    //Comment on a product
    /*
    cy.visit(url+'/collections/all')
    cy.get('.grid .grid__item > div > div >div:nth-child(3) > div').eq(9).click()
    cy.get('.swym-button-bar > div > button').click()
    cy.get('.swym-add-btn').click()
    cy.wait(1000)
    */
        cy.get('a[href="#swym-wishlist"]').eq(0).click({force:true})
        cy.wait(3000) 
        cy.get('.swym-wishlist-selector > button').eq(0).click()
        cy.get('.swym-wishlist-grid > a').click()
        cy.get('.swym-comments-preview .swym-add-comment-container .swym-add-comment > textarea').click({force:true})
        cy.get('.swym-add-comment-container .swym-add-comment > textarea').eq(1).type('New Model of this?')
        cy.get('.swym-comments-content .swym-add-comment-container .swym-add-comment > button').click({force:true}) 
        cy.get('.swym-modal-content .swym-close-btn.swym-nav').click()
        cy.get('.swym-comment-item .swym-comment-details .swym-comment-text').should('have.text','New Model of this?')
        cy.get('.swym-modal-content .swym-close-btn').click()
        cy.go('back')

        
    })

})