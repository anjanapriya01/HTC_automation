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
    it('Checking if wishlist launch point is there',function(){
        cy.wait(3000)
        cy.get('a[href="#swym-wishlist"]').eq(0).should('be.visible')

    })

    it('Add to single wishlist',function(){
        
        //Going to the collections page
        cy.visit(url+'/collections/all')

        // Product details page of a specific product
        cy.get('.grid .grid__item > div > div >div:nth-child(3) > div').eq(0).click()
          
        // More waiting time bcoz it had many api's to fetch
        //Clicking on the wishlist button in the PDP
        cy.get('.swym-button-bar > div > button').click()
        cy.get('.swym-add-btn').click()
          
        // Opening the wishlist modal
        cy.get('a[href="#swym-wishlist"]').eq(0).click()

        // opening the "My Wishlist"(default) list.
        cy.get('.swym-wishlist-name').contains("My Wishlist").click()
        cy.get('.swym-wishlist-grid > a > .swym-is-button .swym-title').should('have.text','1 LIGHT PENDANT')
        
        // closing the wishlist modal
        cy.get('.swym-modal-content .swym-close-btn').click()
        cy.go('back')
        cy.wait(9000)
            
    })
    it('Creating new List and using the existing list',function(){
        cy.visit(url+'/collections/all')
        // Product details page of a specific product
        cy.get('.grid .grid__item > div > div >div:nth-child(3) > div').eq(1).click()
        cy.get('.swym-button-bar > div > button').click()
        cy.wait(4000)
        const name='New Trends'
        cy.get('.swym-editable-list-name input').clear().type(name).type('{enter}')
        cy.get('.swym-add-btn').click()
        cy.wait(4000)
        cy.get('a[href="#swym-wishlist"]').eq(0).click()
        cy.get('.swym-wishlist-selector > button .swym-wishlist-header > div').should('have.text',name).click()
        cy.get('.swym-modal-content .swym-close-btn').click()
        cy.go('back')

        //Existing list
        cy.get('.grid .grid__item > div > div >div:nth-child(3) > div').eq(2).click()
        cy.get('.swym-button-bar > div > button').click()
        cy.wait(4000)
        cy.get('.swym-wishlist-options .swym-wishlist-select-dropdown .swym-display-list').click()
        cy.wait(3000)
        cy.get('.swym-wishlist-dropdown-content-container > div .swym-results-container > button').eq(0).click()
        cy.get('.swym-add-btn').click()
        cy.get('a[href="#swym-wishlist"]').eq(0).click()
        cy.get('.swym-wishlist-selector > button').eq(0).click()
        cy.wait(5000)
        cy.get('.swym-wishlist-grid > a .swym-title').contains('1200 mm (48 inch) High Speed Ceiling Fan (White)')
        cy.get('.swym-modal-content .swym-close-btn').click()
        cy.go('back')
    })

    it.skip('Add to existing label and create new label',function(){
        cy.visit(url+'/collections/all')
    // ADDING THORUGH EXISTING LABEL AND CHECKING IF IT'S ADDED IN THE CORRESPONDING LABEL
        cy.get('.grid .grid__item > div > div >div:nth-child(3) > div').eq(3).click()
        cy.wait(3000)
        cy.get('.swym-button-bar > div > button').click()
        // More waiting time bcoz it had many api's to fetch , 
        cy.wait(5000)
        cy.get('.swym-modal-content .swym-add-wishlist-container .swym-wishlist-options .swym-option-label').click()
        cy.get('.swym-results-container > button:nth-child(1)').click()
        cy.get('.swym-add-btn').click()
         
        // Clicking on the wishlist button
        cy.get('a[href="#swym-wishlist"]').eq(0).click()
        cy.get('.swym-wishlist-selector > button').eq(0).click()
        cy.get('.swym-group-by-label .swym-group-by-label-name').contains('Label 1')
        cy.get('.swym-wishlist-grid > a > .swym-is-button .swym-title').should('have.text','1200 mm (48 inch) High Speed Ceiling Fan (White)')

        // closing the list modal
        cy.get('.swym-modal-content .swym-close-btn').click()
        cy.go('back')

    //CREATING NEW LABEL
        cy.visit(url+'/collections/all')
        cy.get('.grid .grid__item > div > div >div:nth-child(3) > div').eq(4).click()
        cy.wait(3000)
        cy.get('.swym-button-bar > div > button').click()
        // More waiting time bcoz it had many api's to fetch , 
        cy.wait(5000)
        cy.get('.swym-modal-content .swym-add-wishlist-container .swym-wishlist-options .swym-option-label').click()
        cy.get('.swym-label-input-container > input').type('Fan')
        cy.get('.swym-new-label-container > button').click()
          
        cy.get('.swym-add-btn').click()
         
        // Clicking on the wishlist button
        cy.get('a[href="#swym-wishlist"]').eq(0).click()
        cy.get('.swym-wishlist-selector > button').eq(0).click()
        cy.get('.swym-group-by-label .swym-group-by-label-name').contains('Fan')
        cy.get('.swym-wishlist-grid > a > .swym-is-button .swym-title').eq(0).should('have.text','1300mm Ceiling Fan')
            
        // closing the list modal
        cy.get('.swym-modal-content .swym-close-btn').click()
        cy.go('back')
    })

})