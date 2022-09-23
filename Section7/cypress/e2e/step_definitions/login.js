import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps';
const loginPage = require("../../pages/LoginPage");


Given('I open login page', () => {
   loginPage.visitUrl()
});

When('I submit login', () => {
   loginPage.fillUsername()
   loginPage.fillPassword()
   loginPage.signIn()
})

Then('I should see homepage', () => {
   cy.wait(1000)
   cy.get('#account_summary_tab').should('be.visible')
})