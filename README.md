<h1 align="center">
<img width="500" src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png" alt="image" />
  
Projeto eCommerce - ReactJS
</h1>

<p align="center">Este é o projeto frontend desenvolvido em ReactJS seguindo um modelo do Figma</p>

<hr>

## Sobre o projeto

- Este projeto utiliza-se do ReactJS;
- Utiliza-se de TypeScript
- Utiliza-se de GraphQL/Datocms;

## Dependências

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/pt-BR/docs/install)

## Primeiros passos

1. Clone o repositório;
2. Vá para o diretório apropriado<br />
3. Para instalar as depências do projeto use o comando: `yarn`.<br />
4. Para iniciar a aplicação, use o comando: `yarn dev`.

## Configurando o projeto

É necessário realizar algumas configurações do projeto para que o Datocms retorne os dados.
1. Vá para o arquivo .env;
2. Aplique após o sinal de igual da variavel `REACT_APP_API_URL` o seguinte link: `https://graphql.datocms.com/`<br />
3. Para a segunda variável `REACT_APP_API_TOKEN` vá para o site: `https://www.datocms.com/`<br />
4. Logue na conta e escolha o projeto;
5. No projeto clique em `Enter project`;
6. Na janela que abrir, vá em `Definições` e procure a opção `Tokens da API`;
7. Clique em `Read-only API token` e copie o código da `Chave da API`;
8. Por fim, cole após a igualdade da variável `REACT_APP_API_TOKEN`.
