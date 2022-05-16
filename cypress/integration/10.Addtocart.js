 //const { beforeEach } = require("mocha");

 const { it } = require("mocha");

 describe('Add item to cart',function(){
   
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
         //cy.visit(url)
     })
 
     it('Adding an item to the cart',function(){
        
        //Add to cart
        cy.get('a[href="#swym-wishlist"]').eq(0).click()
        cy.wait(1000)
        cy.get('.swym-wishlist-selector > button').eq(0).click()
        cy.get('.swym-wishlist-grid > a').eq(0).click()
        cy.wait(2000)
        cy.get('.swym-wishlist-product-detail-container .swym-wishlist-product-detail-text-container-inner > h3').then((tit)=>{
            let title=tit.text()
            cy.get('.swym-wishlist-product-detail-container .swym-wishlist-product-detail-text-container-inner .swym-product-final-price').then((q)=>{
                let quantity=q.text()
                cy.get('.swym-action-button-container .swym-wishlist-add-to-cart-btn').eq(0).click()
                cy.wait(7000)
                cy.log('title',title)
                cy.log('quantity',quantity)
                cy.get('.swym-modal-content .swym-close-btn').click()
                cy.get('.header-bar__module .cart-page-link').eq(0).click()
                cy.get('.wrapper.main-content >div #CartSection')
                cy.get('.grid__item.two-thirds > a').eq(0).contains(title)
                cy.wait(5000)
                cy.get('.cart__row .grid__item:nth-child(2) > div .h5').eq(0).should('have.value',quantity)
                    
                /*
                cy.get('.wrapper.main-content > div #CartSection > form .cart__row .cart__row-table-large').each((item,index)=>{
                    cy.get('.grid__item.two-thirds > a').eq(index).then((t,index)=>{
                        if(t.text()==title){
                            cy.get('.cart__row .grid__item:nth-child(2) > div .h5').should('have.value',quantity)
                        }
                    })

                })
                */
                
            })
        })
        //cy.get('.swym-modal-content .swym-close-btn > a').click()

        //cy.go('back')
         
    })
 
 })
 
  
 