Cypress.Commands.add('verificarMensagemNoToast', mensassagem => {
    cy.get('.toast').should('have.text', mensassagem)
})

Cypress.Commands.add('selecionarOpcaoCombobox', (labelDoCampo, opcao) => {
    cy.get(`label[for="${labelDoCampo}"]`).parent().as(`campo-${labelDoCampo}`)//seleciona elemento pai da label eaplica um apelido 
        cy.get(`@campo-${labelDoCampo}`).click()//utiliza o elemento que foi aplicado o apelido
        cy.get(`@campo-${labelDoCampo}`).contains(opcao).click()
})