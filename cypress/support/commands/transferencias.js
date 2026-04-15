Cypress.Commands.add('realizarTransferencia', (contaOrigem,contaDestino, valor) => {
//Act-conta origem/destino
        cy.selecionarOpcaoCombobox('conta-origem', contaOrigem)
        cy.selecionarOpcaoCombobox('conta-destino', contaDestino)
        cy.get('#valor').click().type(valor)
        cy.contains('button', 'Transferir').click()
})