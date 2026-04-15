describe('login', () => {
  beforeEach(() => {
    //arrange
    cy.visit('/'); // chama baseUrl do cypress.config.js
  })

  it('login com dados validos deve permitir acesso', () => {
    //act
    cy.fazerLoginCredenciasValidas();
    
    //assert
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
    cy.screenshot('Login concluido com sucesso')
  })

  it('Não deve permitir acesso e deve demonstrar toat com mensagem', () => {
    //act
    cy.fazerLoginCredenciasInvalidas();
    
    //assert
    cy.verificarMensagemNoToast('Erro no login. Tente novamente.')
     
  })
})