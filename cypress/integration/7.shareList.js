 //const { beforeEach } = require("mocha");

const { it } = require("mocha");

describe('Sharing list',function(){
  
    //Url of the store
    const url="https://htc-demo-store.myshopify.com/";

    //visiting the store before every testcase
    beforeEach(()=>{
        cy.visit(url)
    })

    //Checking wishlist launch point
    it('Sharing List',function(){
        //Share list
        cy.visit(url+'/collections/all')
        cy.get('.grid .grid__item > div > div >div:nth-child(3) > div').eq(9).click()
        cy.get('.swym-button-bar > div > button').click()
        cy.get('.swym-add-btn').click()
        cy.wait(1000)
        
        cy.get('a[href="#swym-wishlist"]').eq(0).click()
        cy.wait(7000)

        cy.get('.swym-wishlist-selector > button').eq(0).click()
        
        cy.get('.swym-button-actions .swym-share-btn').click()
        cy.intercept('/api/v3/lists/emailList?pid=BSN9BXEtYr5Ty9lJuhmWeVIQTDWnZRSv2c/QX4e6YDE=').as('CheckShare')
        cy.get('#swym-email').type('awesomeqqq12345@gmail.com')
        cy.get('.swym-share-email-button-container > button').click()
        cy.wait(10000)
        cy.wait('@CheckShare').then((intercept)=>{
          //  expect(intercept.response.statusCode).to.equal(200)
        
         })
    })

})

 
