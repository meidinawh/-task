import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
const searchPage = require("../../pages/SearchPage");

/// Search valid data
Given ('I open Zero Bank home page', () => {
    searchPage.visitURL()
});

When ('I push enter the keyword', () => {
    searchPage.fillValidData()
});

Then ('I should see a list that match with my keywords', () => {
    cy.get('h2').should('contain.text', 'Search Results:')
    cy.contains('The following pages were found for the query: bank').should('be.visible')
    cy.get('a'). should('be.visible')
        .should('contain.text', 'Zero - Personal Banking - Loans - Credit Cards')
        .should('contain.text', 'Zero - Free Access to Online Banking')   
});

