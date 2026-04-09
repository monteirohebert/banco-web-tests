describe('login', () => {
  beforeEach(() => {
    //arrange
    cy.visit('http://localhost:4000') // vai ocorrer todas as vezes antes do "it"
  })

  it('login com dados validos deve permitir acesso', () => {
    //act
    cy.fixture('credencias').then(credencias => {
      cy.get('#username').click().type(credencias.validas.usuario)
      cy.get('#senha').click().type(credencias.validas.senha)
    })
      
    cy.screenshot('Após acessar url e preencher os dados')
    cy.contains('button', 'Entrar').click()
    //assert
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
    cy.screenshot('Login concluido com sucesso')
  })

  it('Não deve permitir acesso e deve demonstrar toat com mensagem', () => {
     cy.fixture('credencias').then(credencias => {
      cy.get('#username').click().type(credencias.invalidas.usuario)
      cy.get('#senha').click().type(credencias.invalidas.senha)
    })
    //act
    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('000000')
    cy.contains('button', 'Entrar').click()
    //assert
     cy.get('.toast').should('have.text', 'Erro no login. Tente novamente.')
     
  })
})