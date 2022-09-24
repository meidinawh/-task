/// <reference types = "cypress" />

describe('Delete User', () => {
    it.only('Delete user', () => {
        cy.request('DELETE', 'https://reqres.in/api/users/2').then((response) => {
            expect(response.status).equal(204)
            expect(response.statusText).to.include('No Content')
            expect(response.body).to.not.eq()
            expect(response.body).to.be.empty
        })   
    })
})