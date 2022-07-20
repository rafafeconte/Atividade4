
describe('cadastro de usuario', ()=>{
    it.skip('cadastro de usuario com sucesso', ()=>{
       

        cy.visit('https://magento.nublue.co.uk/')
        cy.get('div[class="panel header"] a[href="https://magento.nublue.co.uk/customer/account/create/"]').click()
        cy.get('#firstname').type('Nilay7')
        cy.get('#lastname').type('Conte')
        cy.get('input[id="is_subscribed"]').click()
        cy.get('#assistance_allowed_checkbox').click()
        cy.get('div[class="field required"] input[type="email"]').type('nilay.conte@teste7.com.br')
        cy.get('input[id="password"]').type('134679rA')
        cy.get('input[id="password-confirmation"]').type('134679rA')
        cy.get('button[class="action submit primary"]').click()
        var mensagem = 'Thank you for registering with Main Website Store.'
        cy.contains('div[role="alert"]', mensagem).should('be.visible')
    
    })
    it.skip('tentativa decadastro com campo nome em branco', ()=>{

        cy.visit('https://magento.nublue.co.uk/')
        cy.get('div[class="panel header"] a[href="https://magento.nublue.co.uk/customer/account/create/"]').click()
        cy.get('#lastname').type('Conte')
        cy.get('input[id="is_subscribed"]').click()
        cy.get('#assistance_allowed_checkbox').click()
        cy.get('div[class="field required"] input[type="email"]').type('nilay.conte@teste5.com.br')
        cy.get('input[id="password"]').type('134679rA')
        cy.get('input[id="password-confirmation"]').type('134679rA')
        cy.get('button[class="action submit primary"]').click()
        var mensagem = 'This is a required field.'
        cy.contains('div[for="firstname"]', mensagem).should('be.visible')
    
    })

    it.skip('tentativa de cadastro com senha diferente', ()=>{

        cy.visit('https://magento.nublue.co.uk/')
        cy.get('div[class="panel header"] a[href="https://magento.nublue.co.uk/customer/account/create/"]').click()
        cy.get('#firstname').type('Nilay8')
        cy.get('#lastname').type('Conte')
        cy.get('input[id="is_subscribed"]').click()
        cy.get('#assistance_allowed_checkbox').click()
        cy.get('div[class="field required"] input[type="email"]').type('nilay.conte@teste5.com.br')
        cy.get('input[id="password"]').type('134679rA')
        cy.get('input[id="password-confirmation"]').type('134679')
        cy.get('button[class="action submit primary"]').click()
        var mensagem = 'Please enter the same value again.'
        cy.contains('#password-confirmation-error', mensagem).should('be.visible')
    })
    
})