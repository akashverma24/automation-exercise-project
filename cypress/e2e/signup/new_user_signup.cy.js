/// <reference types="Cypress" />
'use strict';

import { use } from 'chai';
import user from '../../fixtures/user_info.json';
import * as signup from '../../pages/signup';

describe('Register a new user on the website', () => {

    beforeEach('Navigate to the SignUp page', () =>{
        cy.visit('https://automationexercise.com/');
        cy.title().should('eq', 'Automation Exercise');
        cy.contains(' Signup / Login').click();
        cy.title().should('eq', 'Automation Exercise - Signup / Login');

    })

    it('Successfully register a new user', () => {
        cy.get(signup.signupNameField).type(user.user_full_name);
        cy.get(signup.signupEmailField).type(user.register_email);
        cy.get(signup.signupBtn).click();
        cy.get(signup.title).click();
        cy.get(signup.passwordField).type(user.user_password);

        const dobSplit = user.date_of_birth.split('/');
        cy.get(signup.daysDropDown).select(dobSplit[0]);
        cy.get(signup.monthsDropDown).select(dobSplit[1]);
        cy.get(signup.yearsDropDown).select(dobSplit[2]);

        cy.get(signup.firstNameField).type(user.first_name);
        cy.get(signup.lastNameField).type(user.last_name);

        cy.get(signup.addressField).type(user.address);
        
        cy.get(signup.countryDropDown).select(user.country);
        cy.get(signup.stateField).type(user.state);
        cy.get(signup.cityField).type(user.city);
        cy.get(signup.zipcodeField).type(user.zip_code);
        cy.get(signup.mobileNumberField).type(user.mobile);

        cy.get(signup.createAccountBtn).click();

        cy.url().should('include', '/account_created')
        cy.get('#form').should('be.visible')
        cy.contains('Account Created!').should('be.visible')

        cy.get(signup.continueBtn).click();
        cy.contains(' Delete Account').click();
        cy.get(signup.continueBtn).click();

    })

    it('Unsuccessful attempt to register a user', () => {
        cy.get(signup.signupNameField).type(user.login_name);
        cy.get(signup.signupEmailField).type(user.login_email);
        cy.get(signup.signupBtn).click();
        cy.contains('Email Address already exist!').click();
        
    })
})