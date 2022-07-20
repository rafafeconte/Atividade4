describe('home page', ()=>{
    it('Visitar home', ()=>{
        cy.visit('https://magento.nublue.co.uk/')
        cy.get('div[class="panel header"] ul li a[href="https://magento.nublue.co.uk/customer/account/create/"]').should('have.text', 'Create an Account')
fdfd
    }) 
})