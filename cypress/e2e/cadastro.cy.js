import cadastroFactory from '../factories/CadastroFactories'
var formulario = cadastroFactory.cadastro()
const url = Cypress.config("baseUrl")

describe('cadastro de usuario', ()=>{
    it('cadastro de usuario com sucesso', ()=>{
    
        cy.visit(url)
        cy.get('div[class="panel header"] a[href="https://magento.nublue.co.uk/customer/account/create/"]').click()
        cy.get('#firstname').type(formulario.first)
        cy.get('#lastname').type(formulario.last)
        cy.get('input[id="is_subscribed"]').click()
        cy.get('#assistance_allowed_checkbox').click()
        cy.get('div[class="field required"] input[type="email"]').type(formulario.email)
        cy.get('input[id="password"]').type(formulario.password)
        cy.get('input[id="password-confirmation"]').type(formulario.password)
        cy.get('button[class="action submit primary"]').click()
        cy.contains('div[role="alert"]', formulario.mensagem).should('be.visible')
    
    })
    it('tentativa decadastro com campo nome em branco', ()=>{

        cy.visit(url)
        cy.get('div[class="panel header"] a[href="https://magento.nublue.co.uk/customer/account/create/"]').click()
        cy.get('#lastname').type(formulario.first)
        cy.get('input[id="is_subscribed"]').click()
        cy.get('#assistance_allowed_checkbox').click()
        cy.get('div[class="field required"] input[type="email"]').type(formulario.emailNilay)
        cy.get('input[id="password"]').type(formulario.password)
        cy.get('input[id="password-confirmation"]').type(formulario.password)
        cy.get('button[class="action submit primary"]').click()
        cy.contains('div[for="firstname"]', formulario.requiredFlied).should('be.visible')
    
    })

    it('tentativa de cadastro com senha diferente', ()=>{

        cy.visit(url)
        cy.get('div[class="panel header"] a[href="https://magento.nublue.co.uk/customer/account/create/"]').click()
        cy.get('#firstname').type(formulario.first)
        cy.get('#lastname').type(formulario.last)
        cy.get('input[id="is_subscribed"]').click()
        cy.get('#assistance_allowed_checkbox').click()
        cy.get('div[class="field required"] input[type="email"]').type(formulario.emailNilay)
        cy.get('input[id="password"]').type(formulario.password)
        cy.get('input[id="password-confirmation"]').type('134679')
        cy.get('button[class="action submit primary"]').click()
        cy.contains('#password-confirmation-error', formulario.passwordIncorrect).should('be.visible')
    })
    
})