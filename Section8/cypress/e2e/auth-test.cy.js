describe ('Basic Auth', function() {
    it('Successfully login by appending username and password in URL', function () {
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
        cy.get('h3').should('contain.text', 'Basic Auth')
        cy.get('p').should('include.text', 'Congratulations! You must have the proper credentials.')
    })
    it('Successfully login using headers', () => {
        cy.visit('https://the-internet.herokuapp.com/basic_auth', {
            headers: {
                authorization: 'Basic YWRtaW46YWRtaW4='
            },
            failOnnStatusCode: false
        })
        cy.get('h3').should('contain.text', 'Basic Auth')
        cy.get('p').should('include.text', 'Congratulations! You must have the proper credentials.')
    })
})