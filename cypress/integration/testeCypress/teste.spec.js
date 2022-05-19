describe('Navegando no Mercado Livre', ()=>{

    beforeEach(()=> {
        cy.visit("https://www.mercadolivre.com.br/")
        cy.viewport(1200, 750)
        tirarErroJS()
    })

    it('Buscando uma placa de video', () => {
        cy.get("input[name=as_word]").type("Placa de video {enter}")
    })

    it('Voltando ao menu incial', () => {
        cy.get("a[data-link-id=login]").click()
        cy.get("a[.nav-logo]").click()
    })

    // it('Login na plataforma com sucesso!', () => {
    //     //let userInfo = buscaProduto()
    //     cy.visit("https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login")
        
    // })
})

function tirarErroJS() {
    cy.on('uncaught:exception', ()=> {
        return false
    })
}