describe('home page', ()=>{
    it('Visitar home', ()=>{
        cy.visit('https://magento.nublue.co.uk/')
        cy.get('#idmYXys7wP').should('have.text', 'Create an Account')

    }) 
})