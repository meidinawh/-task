// <reference types ="cypress" />



describe('Automation API with Pokeapi', () => {
    it('Validate Header', () => {
      
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').then((response) => {
            expect(response.status).equal(200)
            expect(response.body.name).to.eq('ditto')
            expect(response.body).to.have.any.keys('name')
        })
    })
})




