describe('login', () => {
  beforeEach(() => {
    //arrange
    cy.visit('http://localhost:4000') // vai ocorrer todas as vezes antes do "it"
  })

  it('login com dados validos deve permitir acesso', () => {
    //act
    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('123456')
    cy.contains('button', 'Entrar').click()
    //assert
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })

   it('Não deve permitir acesso e deve demonstrar toat com mensagem', () => {
    //act
    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('000000')
    cy.contains('button', 'Entrar').click()
    //assert
     cy.get('.toast').should('have.text', 'Erro no login. Tente novamente.')
     
  })
})