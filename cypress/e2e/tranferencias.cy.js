describe.only('transferencias', () => {
    beforeEach(() => {
        //Arrage
        cy.visit('/')
        
        cy.fixture('credencias').then(credencias => {
        cy.get('#username').click().type(credencias.validas.usuario)
        cy.get('#senha').click().type(credencias.validas.senha)
        })
            
        cy.contains('button', 'Entrar').click()
    })
    
    it('Deve transferir quando informo um valor valido', () => {
        //Act-conta origem
        cy.get('label[for="conta-origem"]').parent().as('campo-conta-oringem')//seleciona elemento pai da label eaplica um apelido 
        cy.get('@campo-conta-oringem').click()//utiliza o elemento que foiaplicado o apelido
        cy.get('@campo-conta-oringem').contains('João da Silva com saldo de R$').click()

        //Act-conta destino
        cy.get('label[for="conta-destino"]').parent().as('campo-conta-destino')
        cy.get('@campo-conta-destino').click()
        cy.get('@campo-conta-destino').contains('Maria Oliveira com saldo de R$').click()

        //Act-valor
        cy.get('#valor').click()
        cy.get('label[for="valor"]').type('11')
        cy.contains('button', 'Transferir').click()

        //Assert
        cy.get('.toast').should('have.text','Transferência realizada!')
        
    })
})