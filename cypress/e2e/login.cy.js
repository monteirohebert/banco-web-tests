describe('login', () => {
  it('login com dados validos deve permitir acesso', () => {
    //arrege
    cy.visit('http://localhost:4000')
    //act
    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('123456')
    cy.contains('button', 'Entrar').click()
    //assert
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })

   it('Não deve permitir acesso e deve demonstrar toat com mensagem', () => {
    //arrege
    cy.visit('http://localhost:4000')
    //act
    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('000000')
    cy.contains('button', 'Entrar').click()
    //assert
     cy.get('.toast').should('have.text', 'Erro no login. Tente novamente.')
     
  })
})