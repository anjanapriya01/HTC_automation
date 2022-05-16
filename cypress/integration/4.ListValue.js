//const { beforeEach } = require("mocha");

const { it } = require("mocha");

describe('Checking the list value',function(){
  
    //Url of the store
    const url="https://htc-demo-store.myshopify.com/";

    //visiting the store before every testcase
    beforeEach(()=>{
        cy.visit(url)
    })

    //Checking wishlist launch point
    it('List Value',function(){
        cy.visit(url+'/collections/all')
        //Changing quantity
        // Product details page
        cy.get('.grid .grid__item > div > div >div:nth-child(3) > div').eq(5).click()
        cy.get('.swym-button-bar > div > button').click()
        cy.get('.swym-add-btn').click()
        cy.wait(2000)
        cy.go('back')
        cy.get('.grid .grid__item > div > div >div:nth-child(3) > div').eq(6).click()
        cy.get('.swym-button-bar > div > button').click()
        cy.get('.swym-add-btn').click()
        cy.wait(2000)
        cy.get('a[href="#swym-wishlist"]').eq(0).click()
        cy.wait(7000)
        cy.get('.swym-wishlist-selector > button').eq(0).click()
        cy.wait(4000)
        let listValue=0
        cy.get('.swym-wishlist-grid a').each((a,index)=>{
            //cy.wait(4000)
          cy.get('.swym-wishlist-grid a').eq(index).click({force:true})
          cy.wait(10000)
          cy.get('.swym-wishlist-quantity-select .swym-product-quantity > div').eq(index).invoke('text').then((c)=>{
              cy.get('.swym-product-price .swym-product-final-price').eq(index).invoke('text').then((text)=>{

                  let price=Number(text.slice(1))
                  listValue=listValue+(Number(c))*(price)
                  cy.log('swathi',listValue)
                  console.log(listValue)

              })
          }).as('fruit')
          cy.get('@fruit').then((a)=>{
            cy.get('.swym-wishlist-detail-htc-user > div .swym-action-bar .swym-back-btn').should('be.visible').click({force:true})
          cy.wait(6000)
          
          })
          
        }).as('eachlist')
        cy.get('@eachlist').then((gh)=>{
            cy.log('listValue',listValue)
        })
        cy.get('.swym-close-btn').click()
        cy.go('back')

        
    })


})