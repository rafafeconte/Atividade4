///<reference types="Cypress" />
const url = Cypress.config("baseUrl")
describe('home page', ()=>{
    it('Visitar home', ()=>{
        cy.visit(url)
        cy.get('div[class="panel header"] ul li a[href="https://magento.nublue.co.uk/customer/account/create/"]').should('have.text', 'Create an Account')

    }) 
})