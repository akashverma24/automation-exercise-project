/// <reference types="Cypress" />
'use strict';

import { use } from 'chai';
import loginData from '../../fixtures/login.json';
import * as login from '../../pages/login';

describe('verify user Login journey', () => {

    beforeEach('Navigate to login page', () => {
        cy.visit('https://automationexercise.com/');
        cy.title().should('eq', 'Automation Exercise');
        cy.contains(' Signup / Login').click();
        cy.title().should('eq', 'Automation Exercise - Signup / Login');
    })

    it.only('verify user is able to login successfully with correct credentials', () => {
        cy.get(login.loginEmailField).type(loginData.loginEmail);
        cy.get(login.loginPasswordField).type(loginData.loginPassword);
        cy.get(login.loginBttn).click();
        
        //assert correct user is logged in
        cy.get('b').contains(loginData.loginName);
        cy.contains(' Logout').click();

    })

    it('verify user is not able to login using incorrect email and correct password', () => {

        cy.get(login.loginEmailField).type(loginData.incorrectEmail);
        cy.get(login.loginPasswordField).type(loginData.loginPassword);
        cy.get(login.loginBttn).click();
        cy.get('.login-form > form > p').contains('Your email or password is incorrect!');
    })

    it('verify user is not able to login using correct email and incorrect password', () => {

        cy.get(login.loginEmailField).type(loginData.loginEmail);
        cy.get(login.loginPasswordField).type(loginData.incorrectPassword);
        cy.get(login.loginBttn).click();
        cy.get('.login-form > form > p').contains('Your email or password is incorrect!');
    })

})

