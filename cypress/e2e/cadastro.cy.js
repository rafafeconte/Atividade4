import cadastroFactory from '../factories/CadastroFactories'
var formulario = cadastroFactory.cadastro()

describe('cadastro de usuario', ()=>{
    it.skip('cadastro de usuario com sucesso', ()=>{
    
        cy.visit('https://magento.nublue.co.uk/')
        cy.get('div[class="panel header"] a[href="https://magento.nublue.co.uk/customer/account/create/"]').click()
        cy.get('#firstname').type(formulario.first)
        cy.get('#lastname').type(formulario.last)
        cy.get('input[id="is_subscribed"]').click()
        cy.get('#assistance_allowed_checkbox').click()
        cy.get('div[class="field required"] input[type="email"]').type(formulario.email)
        cy.get('input[id="password"]').type(formulario.password)
        cy.get('input[id="password-confirmation"]').type(formulario.password)
        cy.get('button[class="action submit primary"]').click()
        var mensagem = 'Thank you for registering with Main Website Store.'
        cy.contains('div[role="alert"]', mensagem).should('be.visible')
    
    })
    it.skip('tentativa decadastro com campo nome em branco', ()=>{

        cy.visit('https://magento.nublue.co.uk/')
        cy.get('div[class="panel header"] a[href="https://magento.nublue.co.uk/customer/account/create/"]').click()
        cy.get('#lastname').type(formulario.first)
        cy.get('input[id="is_subscribed"]').click()
        cy.get('#assistance_allowed_checkbox').click()
        cy.get('div[class="field required"] input[type="email"]').type(formulario.emailNilay)
        cy.get('input[id="password"]').type(formulario.password)
        cy.get('input[id="password-confirmation"]').type(formulario.password)
        cy.get('button[class="action submit primary"]').click()
        var mensagem = 'This is a required field.'
        cy.contains('div[for="firstname"]', mensagem).should('be.visible')
    
    })

    it('tentativa de cadastro com senha diferente', ()=>{

        cy.visit('https://magento.nublue.co.uk/')
        cy.get('div[class="panel header"] a[href="https://magento.nublue.co.uk/customer/account/create/"]').click()
        cy.get('#firstname').type(formulario.first)
        cy.get('#lastname').type(formulario.last)
        cy.get('input[id="is_subscribed"]').click()
        cy.get('#assistance_allowed_checkbox').click()
        cy.get('div[class="field required"] input[type="email"]').type(formulario.emailNilay)
        cy.get('input[id="password"]').type(formulario.password)
        cy.get('input[id="password-confirmation"]').type('134679')
        cy.get('button[class="action submit primary"]').click()
        var mensagem = 'Please enter the same value again.'
        cy.contains('#password-confirmation-error', mensagem).should('be.visible')
    })
    
})