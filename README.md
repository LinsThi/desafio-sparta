<br />
<p align="center">
  <a href="https://www.spartalabs.com.br">
    <img alt="desafio-sparta" title="desafio-sparta" src="assetsREADME/desafio-sparta-icon.png" height="140px"/>
  </a>
  <h2 align="center">
    <strong>
      Desafio Sparta Labs
    </strong>
  </h2>

  <p align="center">
    Esse projeto tem como objetivo de implementar o desafio técnico para o processo seletivo da Sparta Labs, consumindo a <a href="https://nominatim.org/">Nominatim API</a> e a <a href="https://openweathermap.org/api">Weather API</a>.
  </p>
</p>

<p align="center"><img src="assetsREADME/full-app.gif" width="200px" /></p>

<details open="open">
  <summary>
    <strong>
      Índice
    </strong>
  </summary>
  <ol>
    <li>
      <a href="#-sobre-o-projeto">Sobre o projeto</a>
      <ul>
        <li><a href="#-pontos-principais">Pontos principais</a></li>
      </ul>
      <ul>
        <li><a href="#-extras">Extras</a></li>
      </ul>
      <ul>
        <li><a href="#-framework">Framework</a></li>
      </ul>
    </li>
    <li><a href="#-instalação">Instalação</a></li>
  </ol>
</details>

# 💭 Sobre o projeto

O projeto consiste em criar uma aplicação que atenda aos seguintes tópicos:

## ❗ Pontos principais

- Exibir uma lista com o clima atual das cidades adicionadas pelo usuário e, além disso, permitir que o usuário busque e adicione novas cidades.
- Ao tocar em uma cidade na Home, o usuário será levado para a tela de detalhes da cidade, onde será exibida a previsão do tempo para os próximos 5 dias.
- Cidades adicionadas devem ser persistidas entre sessões de uso da aplicação.

## ❕ Extras

- Definir uma cidade como favorita, dando mais destaque na lista.
- Alterar entre as escalas Celsius e Fahrenheit.
- Remover uma cidade da lista.

## ✨ Framework

- <a href="https://expo.io"><img src="https://img.shields.io/badge/Expo-1B1F23?style=for-the-badge&logo=expo&logoColor=white"/></a>
- <a href="https://www.typescriptlang.org"><img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/></a>
- <a href="https://reactnative.dev"><img src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/></a>
- <a href="https://yarnpkg.com"><img src="https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white"/></a>
- <a href="https://styled-components.com"><img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/></a>

# 📲 Instalação

- Clonar o repositório com o comando
  ```sh
  git clone https://github.com/LinsThi/desafio-sparta.git
  ```
- Para instalar todas as dependências utilizadas no projeto, basta executar o comando `yarn`.
- É necessário gerar uma API Key da [Weather API](https://openweathermap.org/api) para incluir a chave gerada na constante `API_KEY_WEATHER` presente no arquivo `./src/shared/constants/request/index.ts`.
- A aplicação pode ser iniciada com `expo start`.
- É preciso rodar a aplicação em um emulador ou no próprio celular.

---
