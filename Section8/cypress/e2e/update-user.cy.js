describe('Update User', () => {
    it('Succesfully update user', () => {
        var user = {
            "name": 'Gerry',
            "job": 'MC'
        }
        cy.request('PUT', 'https://reqres.in/api/users/3', user).then((response) => {
            expect(response.status).equal(200)
            expect(response.body.name).to.eq(user.name)
        })
    })
})