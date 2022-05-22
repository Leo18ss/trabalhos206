describe('Acessando o Coin Market Cap', ()=>{

    beforeEach(()=> {
        cy.viewport(1920, 1080)
        cy.visit('https://coinmarketcap.com/pt-br/')
    })

    it('Buscando uma moeda inexistente', () => {
        cy.get('.sc-266vnq-1').click()
        cy.get('.bzyaeu-3').type('LeoCoin {enter}')
    })

    it('Mudando idioma para ingles', () => {
        cy.get('.ifkbzu').click()
        cy.get('.YsYKS').eq(0).click()
        
    })

    it('Tentando criar uma conta com e-mail e senha invalidos', () => { //teste de falso
        cy.get('.naMuB').click()
        cy.get('.dqGVRN').eq(0).type('leoteste')
        cy.get('.dqGVRN').eq(1).type('159abc.')
        cy.get('.dqGVRN').eq(2).type('159abc.') 
        cy.get('.hSsFuv').click()
    })

    it('Tentando entrar em uma conta ate o captcha', () => {
        cy.get('.DnSnS').click()
        cy.get('.dqGVRN').eq(0).type('leoteste@inatel.br')
        cy.get('.dqGVRN').eq(1).type('159aBc..')
        cy.get('.hSsFuv').click()
    })

    it('Entrando na pagina da moeda Trending 0 atual', () => {
        cy.get('.iworPT').eq(0).click()
    })
    
    it('Buscando a BitCoin em Dolar', () => {
        buscandoBitCoin()
    })
    
})

function buscandoBitCoin() {
    cy.get('.sc-266vnq-1').click()
    cy.get('.bzyaeu-3').type('BitCoin {enter}')
    cy.get('.dUQeWc').click()
    cy.get('.gqwalg').eq(0).click()
}