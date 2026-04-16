# 🏦 Banco Web Tests - Automação com Cypress

> Projeto de aprendizado focado em automação de testes end-to-end utilizando Cypress e JavaScript

## 📚 Objetivo

Este projeto foi desenvolvido com o propósito de **aprender e dominar automação de testes** com Cypress, cobrindo desde os conceitos básicos até práticas avançadas como organização com Custom Commands e geração de relatórios. 

### Principais Conceitos Aprendidos:
- ✅ Estruturação de testes com Cypress
- ✅ Organização com Custom Commands reutilizáveis
- ✅ Uso de Fixtures para dados de teste
- ✅ Geração de relatórios com Mochawesome
- ✅ Best practices em automação de testes

---

## 🏗️ Componentes do Projeto

```
banco-web-tests/
├── cypress/
│   ├── e2e/                          # Testes end-to-end
│   │   ├── login.cy.js               # Testes de login
│   │   └── tranferencias.cy.js        # Testes de transferências
│   ├── support/
│   │   ├── commands.js               # Importação de custom commands
│   │   ├── commands/
│   │   │   ├── common.js             # Comandos gerais
│   │   │   ├── login.js              # Comandos de autenticação
│   │   │   └── transferencias.js     # Comandos de transferências
│   │   └── e2e.js                    # Configurações globais de suporte
│   ├── fixtures/
│   │   ├── credencias.json           # Dados de autenticação
│   │   └── example.json              # Exemplo de fixture
│   └── reports/
│       └── html/                     # Relatórios HTML gerados
├── cypress.config.js                 # Configuração principal do Cypress
└── package.json                      # Dependências do projeto
```

---

## 🔧 Custom Commands

Os Custom Commands estão organizados em módulos por funcionalidade, promovendo reutilização e manutenção:

### 📍 Commands/Common.js
Comandos gerais e reutilizáveis:

| Comando | Descrição | Exemplo |
|---------|-----------|---------|
| `cy.verificarMensagemNoToast(mensagem)` | Verifica mensagem exibida no toast | `cy.verificarMensagemNoToast('Erro no login')` |
| `cy.selecionarOpcaoCombobox(labelDoCampo, opcao)` | Seleciona opção em combobox | `cy.selecionarOpcaoCombobox('conta-origem', 'João da Silva')` |

### 🔐 Commands/Login.js
Comandos para autenticação:

| Comando | Descrição | Exemplo |
|---------|-----------|---------|
| `cy.fazerLoginCredenciasValidas()` | Realiza login com credenciais válidas | `cy.fazerLoginCredenciasValidas()` |
| `cy.fazerLoginCredenciasInvalidas()` | Realiza login com credenciais inválidas | `cy.fazerLoginCredenciasInvalidas()` |

**Dados usados (fixtures/credencias.json):**
```json
{
  "validas": {
    "usuario": "julio.lima",
    "senha": "123456"
  },
  "invalidas": {
    "usuario": "julio.lima",
    "senha": "000000"
  }
}
```

### 💸 Commands/Transferencias.js
Comandos para manipular transferências:

| Comando | Descrição | Exemplo |
|---------|-----------|---------|
| `cy.realizarTransferencia(contaOrigem, contaDestino, valor)` | Realiza uma transferência | `cy.realizarTransferencia('João da Silva com saldo de R$', 'Maria Oliveira com saldo de R$', '100')` |

---

## 🧪 Testes E2E

### 📋 login.cy.js
Valida funcionalidades de autenticação:

```javascript
// ✅ Login com dados válidos
// Verifica se o usuário consegue acessar a aplicação com credenciais corretas
it('login com dados validos deve permitir acesso', () => {
  cy.fazerLoginCredenciasValidas();
  cy.contains('h4', 'Realizar Transferência').should('be.visible')
})

// ❌ Login com dados inválidos
// Verifica se o sistema exibe mensagem de erro apropriada
it('Não deve permitir acesso e deve demonstrar toast com mensagem', () => {
  cy.fazerLoginCredenciasInvalidas();
  cy.verificarMensagemNoToast('Erro no login. Tente novamente.')
})
```

### 💳 tranferencias.cy.js
Valida funcionalidades de transferência entre contas:

```javascript
// ✅ Transferência com valor válido
// Verifica se transferência é realizada com sucesso
it('Deve transferir quando informo um valor valido', () => {
  cy.realizarTransferencia(
    'João da Silva com saldo de R$', 
    'Maria Oliveira com saldo de R$', 
    '11'
  )
  cy.verificarMensagemNoToast('Transferência realizada!')
})

// 🔒 Transferência acima do limite sem token
// Verifica se o sistema exige autenticação extra para valores altos
it('Deve apresentar erro quando o valor transferido for maior que 5000 sem token', () => {
  cy.realizarTransferencia(
    'João da Silva com saldo de R$', 
    'Maria Oliveira com saldo de R$', 
    '5001'
  )
  cy.verificarMensagemNoToast('Autenticação necessária para transferências acima de R$5.000,00.')
})
```

---

## 📦 Instalação

### Pré-requisitos
- **Node.js** (versão 14+)
- **npm** ou **yarn**

### Aplicações Necessárias em Execução

Este projeto requer que as seguintes aplicações estejam rodando antes de executar os testes:

1. **API - banco-api** (Backend)
   ```bash
   git clone https://github.com/juliodelimas/banco-api.git
   cd banco-api
   npm install
   npm start
   ```

2. **Aplicação Web - banco-web** (Frontend)
   ```bash
   git clone https://github.com/juliodelimas/banco-web.git
   cd banco-web
   npm install
   npm start
   ```

### Instalação do Projeto

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/monteirohebert/banco-web-tests.git
   cd banco-web-tests
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

   Isto instalará:
   - **Cypress** (^15.13.0) - Framework de testes E2E
   - **cypress-mochawesome-reporter** (^4.0.2) - Gerador de relatórios

3. **Verifique a instalação:**
   ```bash
   npx cypress --version
   ```

---

## 🚀 Executando os Testes

### Modo Headless (CLI)
Executa todos os testes sem interface gráfica:
```bash
npm test
```

Ou com mais detalhes:
```bash
npx cypress run
```

### Modo Interativo (Cypress Studio)
Abre a interface do Cypress para visualizar os testes em tempo real:
```bash
npx cypress open
```

Então:
1. Clique em **E2E Testing**
2. Selecione um navegador
3. Escolha um arquivo de teste para executar

---

## 📊 Relatórios

Os relatórios são gerados automaticamente utilizando **cypress-mochawesome-reporter**:

```
cypress/reports/html/
├── index.html          # Relatório principal
└── assets/            # Recursos (CSS, JS)
```

**Acessar o relatório:**
```bash
# Abrir arquivo HTML em um navegador
open cypress/reports/html/index.html
```

O relatório incluirá:
- ✅ Testes aprovados
- ❌ Testes falhados
- 📸 Screenshots em caso de falha
- 🎥 Vídeos de teste
- ⏱️ Tempo de execução

---

## 📝 Configuração do Cypress

Arquivo: `cypress.config.js`

```javascript
{
  allowCypressEnv: false,        // Desativa variáveis de ambiente do Cypress
  video: false,                  // Desativa gravação de vídeos
  baseUrl: 'http://localhost:4000/',  // URL base da aplicação
  reporter: 'cypress-mochawesome-reporter',  // Reporter de relatórios
  setupNodeEvents: { ... }       // Configuração do plugin
}
```

---

## 🛠️ Desenvolvendo Novos Testes

### Padrão AAA (Arrange, Act, Assert)

Todos os testes seguem o padrão AAA:

```javascript
it('descrição do teste', () => {
  // Arrange - Preparação do ambiente
  cy.visit('/')
  
  // Act - Execução da ação
  cy.fazerLoginCredenciasValidas()
  
  // Assert - Verificação do resultado
  cy.contains('h4', 'Realizar Transferência').should('be.visible')
})
```

### Criando um Novo Custom Command

1. Crie o arquivo na pasta apropriada em `cypress/support/commands/`
2. Adicione o comando:
   ```javascript
   Cypress.Commands.add('meuComando', (parametro) => {
     // implementação
   })
   ```
3. Importe em `cypress/support/commands.js`:
   ```javascript
   import './commands/meuArquivo'
   ```

### Criando uma Nova Fixture

1. Crie um arquivo JSON em `cypress/fixtures/`
2. Use nos testes:
   ```javascript
   cy.fixture('minhaFixture').then(dados => {
     // usar dados
   })
   ```

---

## 📚 Recursos Úteis

- [Documentação Oficial Cypress](https://docs.cypress.io)
- [Cypress Best Practices](https://docs.cypress.io/guides/references/best-practices)
- [Custom Commands](https://docs.cypress.io/api/cypress-api/custom-commands)
- [Fixtures](https://docs.cypress.io/api/commands/fixture)

---

## 🤝 Contribuições

Para contribuir com melhorias ao projeto, siga o fluxo:

1. Fork o repositório
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## 📄 Licença

Este projeto está licenciado sob a ISC License - veja o `package.json` para detalhes.

---

## 👤 Autor

**Hebert Monteiro**
- GitHub: [@monteirohebert](https://github.com/monteirohebert)

---

## 🔗 Projetos Relacionados

- [banco-api](https://github.com/juliodelimas/banco-api) - API Backend
- [banco-web](https://github.com/juliodelimas/banco-web) - Aplicação Frontend

---

**Última atualização:** Abril de 2026

