/// <reference types="Cypress" />
'use strict';

import * as cartPages from '../../pages/cartItem'
import cart from '../../fixtures/cart_Item.json'


describe('Add Product to the Cart', () => {

    beforeEach('Navigate to the Products page to select an item',() => {
        cy.visit('https://automationexercise.com/');
        cy.title().should('eq', 'Automation Exercise');
        cy.contains('Products').click();
    })
   
    it('verify products are added in the cart from product page', () =>{

        cy.get(cartPages.mouseover).trigger("mouseover", {force: true})
        //Add product-1
        cy.get(cartPages.product_01)
            .click( {force: true})
        cy.get(cartPages.continueBtn)
            .click()
        //Add product-2    
        cy.get(cartPages.product_02)
            .click( {force: true})
        cy.get(cartPages.view_cart)
            .click()
        cy.get("#product-1")
            .should("be.visible")
            .within( () => {
                // verify product details for product-1
                cy.get("td").eq(2).should("contain", cart.item_price_01)
                cy.get("td").eq(3).should("contain", cart.item_quantity_01)
                cy.get("td").eq(4).should("contain", cart.item_total_price_01)
        })
        cy.get("#product-2")
            .should("be.visible")
            .within( () => {
                // verify product details for product-2
                cy.get("td").eq(2).should("contain", cart.item_price_02)
                cy.get("td").eq(3).should("contain", cart.item_quantity_01)
                cy.get("td").eq(4).should("contain", cart.item_total_price_02)
        })


        /************
        cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
        cy.get('.modal-footer > .btn').click();
        cy.get(':nth-child(5) > .product-image-wrapper > .single-products > .productinfo > .btn').click();

       cy.get('u').click();

        //cy.get('h4 > a').contains('Blue Top');
        //cy.get('.cart_price > p').contains('Rs. 500');
        //cy.get('.cart_total_price').contains('Rs. 500');
        ************/
    })
    it('view product on details page and then add to the cart', ()=> {
        
        cy.get(cartPages.view_product_01).click();
        cy.get(cartPages.product_description_01).contains(cart.item_description_01);
        cy.wait(5000);
        cy.get(cartPages.add_cart).click();
        cy.get(cartPages.continueBtn).click();
        cy.contains('Products').click();
        cy.get(cartPages.view_product_02).click();
        cy.get(cartPages.product_description_02).contains(cart.item_description_02);
        cy.get(cartPages.add_cart).click();

        cy.get('u').click();

        cy.get("#product-1")
        .should("be.visible")
        .within( () => {
            // verify product details for product-1
            cy.get("td").eq(2).should("contain", cart.item_price_01)
            cy.get("td").eq(3).should("contain", cart.item_quantity_01)
            cy.get("td").eq(4).should("contain", cart.item_total_price_01)
    })
        cy.get("#product-2")
            .should("be.visible")
            .within( () => {
                // verify product details for product-2
                cy.get("td").eq(2).should("contain", cart.item_price_02)
                cy.get("td").eq(3).should("contain", cart.item_quantity_02)
                cy.get("td").eq(4).should("contain", cart.item_total_price_02)
        })
    })
})