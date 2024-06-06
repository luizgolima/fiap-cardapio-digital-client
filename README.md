# Cardápio Digital Cliente Web

Este é um exemplo de uma aplicação web para um cardápio digital, desenvolvida com React e Vite, que permite aos usuários visualizar uma lista de alimentos disponíveis e adicionar novos alimentos ao cardápio.

## Funcionalidades

- Visualizar alimentos disponíveis no cardápio.
- Adicionar novos alimentos ao cardápio.
- Atualização automática da lista conforme cada item é cadastrado.

## Repositórios complementares

- [Repositório do servidor Spring](https://github.com/luizgolima/fiap-cardapio-digital-server)
- [Repositório do cliente iOS](https://github.com/luizgolima/fiap-cardapio-digital-ios)

## Aplicações no ar (deploy)
- [Frontend](https://fiap-cardapio-digital-client.onrender.com)
- [Backend](https://fiap-cardapio-digital-server.onrender.com/food)
## Requisitos

- Node.js
- Yarn ou npm

## Instalação e Execução Local

1. Clone este repositório:
   ```bash
   git clone https://github.com/luizgolima/fiap-cardapio-digital-client.git
   ```
2. Acesse o diretório da aplicação:
    ```bash
    cd fiap-cardapio-digital-client
    ```
3. Instale as dependências utilizando Yarn ou npm:
    ```bash
    # Com Yarn
    yarn install
    
    # Com npm
    npm install
    ```
4. Inicie o servidor de desenvolvimento:
    ```bash
    # Com Yarn
    yarn dev
    
    # Com npm
    npm run dev
    ```

Obs.: Certifique-se de que o servidor Spring backend esteja em execução (local ou em deploy). Se estiver rodando o backend localmente, lembre-se de atualizar a URL da chamada da API do cliente para `http://localhost:8080/food`.

