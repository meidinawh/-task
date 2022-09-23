/// <reference types = "cypress" />

describe('All Process', () => {
    before(() => {
        cy.visit('https://www.saucedemo.com/')
    })
    it('Order Some Products', () => {
        cy.get('#login_button_container').should('be.visible')
        cy.get('#user-name').invoke('attr', 'placeholder').should('contain', 'Username')
        cy.get('#password').invoke('attr', 'placeholder').should('contain', 'Password')
        cy.get('#user-name').type('standard_user')
            .should('have.value', 'standard_user')
        cy.get('#password').type('secret_sauce')
            .should('have.value', 'secret_sauce')
        cy.get('.submit-button.btn_action').click()
        
        cy.url().should('include', 'inventory.html')
        cy.get('.title').should('be.visible').and('contain.text', 'Products')
        cy.get('#inventory_container').should('be.visible')
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        cy.get('#shopping_cart_container').click()

        cy.url().should('include', 'cart.html')
        cy.get('.header_secondary_container').should('be.visible').and('contain.text', 'Your Cart')
        cy.get('.cart_list').should('be.visible')
        cy.get('.cart_quantity_label').should('contain.text', 'QTY')
        cy.get('.cart_desc_label').should('contain.text', 'DESCRIPTION')
        cy.get('#checkout').click()

        cy.url().should('include', 'checkout-step-one.html')
        cy.get('.header_secondary_container').should('contain.text', 'Checkout: Your Information')          
        cy.get('#first-name').invoke('attr', 'placeholder').should('contain', 'First Name')
        cy.get('#first-name').type('Meidina')
            .should('have.value', 'Meidina')
        cy.get('#last-name').invoke('attr', 'placeholder').should('contain', 'Last Name')
        cy.get('#last-name').type('Wahyu')
            .should('have.value', 'Wahyu')
        cy.get('#postal-code').invoke('attr', 'placeholder').should('contain', 'Zip/Postal Code')
        cy.get('#postal-code').type('14045')
            .should('have.value', '14045')
        cy.get('#continue').click()

        cy.url().should('include', 'checkout-step-two.html')
        cy.get('.header_secondary_container').should('be.visible').and('contain.text', 'Checkout: Overview')
        cy.get('.cart_list').should('be.visible')
        cy.get('.summary_info').should('be.visible')
        cy.get('#finish').click()

        cy.url().should('include', 'checkout-complete.html')
        cy.get('.header_secondary_container').should('be.visible').and('contain.text', 'Checkout: Complete!')
        cy.get('#checkout_complete_container')
        cy.get('#checkout_complete_container').should('be.visible')
        .should('contain.text', 'THANK YOU FOR YOUR ORDER')    
        .should('contain.text', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!')      
    })  
})