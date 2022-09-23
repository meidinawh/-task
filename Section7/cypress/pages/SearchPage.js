const URL = 'http://zero.webappsecurity.com/'

class SearchPage{
    visitURL() {
        cy.visit(URL)
    }
    fillValidData() {
        cy.get('#searchTerm').type('bank{enter}')
    }
}
module.exports = new SearchPage();

