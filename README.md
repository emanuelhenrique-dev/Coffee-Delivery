# ☕ Coffee Delivery React
<p align="center">
  
  <img alt="GitHub All Releases" src="https://img.shields.io/github/downloads/emanuelhenrique-dev/Coffee-Delivery/total?logo=GitHub&style=flat-square">
  
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/emanuelhenrique-dev/Coffee-Delivery" />
  
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/emanuelhenrique-dev/Coffee-Delivery" />
  
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/emanuelhenrique-dev/Coffee-Delivery" />

  <img alt="GitHub commit activity (branch)" src="https://img.shields.io/github/commit-activity/t/emanuelhenrique-dev/Coffee-Delivery">

  <a href="https://github.com/emanuelhenrique-dev/Coffee-Delivery/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/emanuelhenrique-dev/Coffee-Delivery" />
  </a>

  <a href="https://github.com/emanuelhenrique-dev/Coffee-Delivery/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/emanuelhenrique-dev/Coffee-Delivery" />
  </a>
</p>

<p align="center">
  <img src=".github/coffee-delivery-default.png" width="60%" />
</p>

Aplicação de entrega de cafés desenvolvida em **React + TypeScript** com o Vite, com gerenciamento de estado, temas e listagem de produtos.

## 🚀 Tecnologias

- React
- TypeScript
- Styled-Components
- Vite
- Zod (validação de dados)

## 📦 Funcionalidades

- Listagem de cafés com imagem, nome, descrição e tags
- Carrinho de compras
- Tema claro e escuro
- Responsividade básica

## 📝 Coisas aprendidas

Durante o desenvolvimento, algumas experiências importantes foram:  

- Como usar **React Context** para compartilhar estado global entre componentes.  
- Implementação de **Reducer** para gerenciar estados complexos, como o carrinho de compras, de forma previsível e escalável.  
- Tipagem em TypeScript para garantir que o estado do Context seja seguro e previsível.
- Uso de **Styled-Components** para estilização dos componentes
- Organização de dados (ex.: array de coffees) de forma estruturada para consumo pelo Context.
- Uso de **Zod** para validação de objetos, além da integração com TypeScript.


```ts
// Exemplo de uso de Context + Reducer
const [state, dispatch] = useReducer(cartReducer, initialState);

<CartContext.Provider value={{ state, dispatch }}>
  {children}
</CartContext.Provider>
```
<p align="center">
  <img src=".github/coffee-delivery-cart.png" width="40%" />
   <img src=".github/coffee-delivery-dark.png" width="40%" />
</p>
