/// <reference types ="cypress" />

describe('Validate Header')

it('Validate Header', () => {
    cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
    cy.get('@pokemon').its('headers').its('content-type')
        .should('include', 'application/json; charset=utf-8')
    cy.get('@pokemon').its('status').should('equal', 200)
    cy.get('@pokemon').its('body').should('have.property', 'abilities')
    cy.get('@pokemon').its('body').should('have.weight', 'base_experience')   
});



