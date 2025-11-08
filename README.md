# diversability-modulo-04-projeto-final-angular

# 📋 Descrição do Projeto

Este projeto foi desenvolvido como parte do Módulo 04 do programa DiversAbility, focando no framework Angular com gerenciamento de estado utilizando NgRx. A aplicação demonstra conceitos avançados de desenvolvimento frontend com uma arquitetura escalável e padrões modernos.

# ⭐ Funcionalidades Principais

- Gerenciamento de Estado Centralizado com NgRx
- Carregamento Preguiçoso (Lazy Loading) de módulos
- Formulários Reativos com validações avançadas
- Roteamento com Guards de autenticação
- Componentes Reutilizáveis e modulares

# 🛠 🔧 Funcionalidades Técnicas
- Arquitetura Feature-based
- Effects para side effects
- Entities para gerenciamento de dados
- Selectors otimizados
- Interceptors HTTP
- Responsive Design

# 📁 Estrutura do Projeto

```
diversability-modulo-04-projeto-final-angular/
├── .editorconfig
├── .gitignore
├── README.md
├── angular.json
├── package.json
├── public/
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.component.ts
│   │   ├── app.config.ts
│   │   ├── app.module.ts
│   │   ├── app.routes.ts
│   │   ├── components/
│   │   │   ├── header/
│   │   │   │   ├── header.component.html
│   │   │   │   ├── header.component.scss
│   │   │   │   └── header.component.ts
│   │   │   └── product-card/
│   │   │       ├── product-card.component.html
│   │   │       ├── product-card.component.scss
│   │   │       └── product-card.component.ts
│   │   ├── models/
│   │   │   └── product.model.ts
│   │   ├── pages/
│   │   │   ├── cart/
│   │   │   │   ├── cart.component.html
│   │   │   │   ├── cart.component.scss
│   │   │   │   ├── cart.component.scsssrc/
│   │   │   │   │   └── app/
│   │   │   │   │       └── pages/
│   │   │   │   │           └── cart/
│   │   │   │   │               └── cart.component.scss
│   │   │   │   └── cart.component.ts
│   │   │   ├── checkout/
│   │   │   │   ├── checkout.component.html
│   │   │   │   ├── checkout.component.scss
│   │   │   │   └── checkout.component.ts
│   │   │   ├── home/
│   │   │   │   ├── home.component.html
│   │   │   │   ├── home.component.scss
│   │   │   │   └── home.component.ts
│   │   │   └── product-detail/
│   │   │       ├── product-detail.component.html
│   │   │       ├── product-detail.component.scss
│   │   │       └── product-detail.component.ts
│   │   ├── services/
│   │   │   ├── cart.service.ts
│   │   │   └── product.service.ts
│   │   └── store/
│   │       ├── cart.actions.ts
│   │       ├── cart.reducer.ts
│   │       └── cart.selectors.ts
│   ├── index.html
│   ├── main.ts
│   └── styles.scss
├── tsconfig.app.json
├── tsconfig.json
└── tsconfig.spec.json
```

# 🛠️ Instalação e Configuração
Pré-requisitos

- Node.js 18+
- npm ou yarn
- Angular CLI 17+

# Passos para Instalação

```bash
# 1. Clone o repositório
git clone https://github.com/marianaviana/diversability-modulo-04-projeto-final-angular.git
cd diversability-modulo-04-projeto-final-angular

# 2. Instale as dependências
npm install
# ou
yarn install

# 3. Execute a aplicação
ng serve
# ou
npm start

# 4.Acesse a aplicação em http://localhost:4200
```

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para detalhes.

## 👥 Autores
   - Mariana Viana - Desenvolvimento e implementação
   - ID Ada da Autora: 1433002
   - Professor: Roosevelt Franklin
   - Ada Tech & Cognizant - Programa DiversAbility
   - Trilha: DiversAbility - Front-end Javascript
   - Instituição: Ada Tech & Cognizant

______________________

> **Nota:** Este projeto foi desenvolvido com 💜 para fins educacionais como parte do Módulo 04 do programa DiversAbility da Ada Tech em parceria com a Cognizant.

