Cypress.Commands.add('fazerLoginCredenciasValidas', () => {
    cy.fixture('credencias').then(credencias => {
      cy.get('#username').click().type(credencias.validas.usuario)
      cy.get('#senha').click().type(credencias.validas.senha)
    })
    cy.contains('button', 'Entrar').click()
})

Cypress.Commands.add('fazerLoginCredenciasInvalidas', () => {
    cy.fixture('credencias').then(credencias => {
      cy.get('#username').click().type(credencias.invalidas.usuario)
      cy.get('#senha').click().type(credencias.invalidas.senha)
     })
    cy.contains('button', 'Entrar').click()
})