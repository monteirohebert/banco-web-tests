describe('transferencias', () => {
    beforeEach(() => {
        //Arrage
        cy.visit('/')
        cy.fazerLoginCredenciasValidas();
    })
    
    it('Deve transferir quando informo um valor valido', () => {
        //Act-conta origem/destino
        
        cy.realizarTransferencia('João da Silva com saldo de R$', 'Maria Oliveira com saldo de R$', '11')
        //Assert- Verifica mensagem do Toast

        cy.verificarMensagemNoToast('Transferência realizada!')
        
    })

    it('Deve apresentar erro quando o valor transferiso for maior que 5000 sem token', () => {
        //Act-conta origem/destino
        cy.realizarTransferencia('João da Silva com saldo de R$', 'Maria Oliveira com saldo de R$', '5001')

        //Assert- Verifica mensagem do Toast
        cy.verificarMensagemNoToast('Autenticação necessária para transferências acima de R$5.000,00.')
        
    })
})