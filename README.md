# Pokémon API Project

Bem-vindo ao meu projeto de consumo da API pública do Pokémon!

Este projeto foi criado para explorar a API do Pokémon (https://pokeapi.co/) e exibir as informações dos Pokémons de forma interativa e visual. O objetivo é apresentar os detalhes de cada Pokémon de maneira limpa e organizada.

## Funcionalidades

- **Exibição de Pokémons**: Mostra uma lista dos Pokémons com suas informações básicas (nome, número e tipos).
- **Detalhes do Pokémon**: Ao clicar em um Pokémon, você será levado a uma página com detalhes como estatísticas e tipos.
- **Carregamento de mais Pokémons**: O projeto implementa um botão para carregar mais Pokémons sem precisar recarregar a página.

## Estrutura do Projeto

O projeto é dividido nas seguintes partes:

- **HTML**: Estrutura básica da página.
- **CSS**: Estilos responsivos e visualmente atraentes.
- **JavaScript**:
  - **main.js**: Contém a lógica para exibir a lista de Pokémons e carregar mais.
  - **main_stats.js**: Exibe os detalhes de cada Pokémon, incluindo estatísticas e tipo.
  - **poke-api.js**: Responsável por interagir com a API do Pokémon e buscar as informações necessárias.
  - **pokemon-model.js**: Definição do modelo de dados para um Pokémon.


## Como Usar

1. **Clonando o repositório**

   Primeiro, clone o repositório para sua máquina local:
   git clone https://github.com/adrieldonega/ProjetoPokemonApi.git

2. **Abrindo o Projeto**

    Navegue até o diretório do projeto:
        cd ProjetoPokemonApi

    Em seguida, abra o arquivo index.html no seu navegador.

3. **Carregar mais Pokémons**

Clique no botão "Carregar Mais" para carregar mais Pokémons na lista.

4. **Ver Detalhes**

Clique em qualquer Pokémon para ver suas estatísticas detalhadas e imagem.

## Tecnologias Usadas
* **HTML5**: Para estruturação da página.
* **CSS3**: Para estilização do layout.
* **JavaScript (ES6+)**: Para interação e consumo da API.
* **PokeAPI**: API pública para obter os dados dos Pokémons.

## Desafios

* Trabalhar com a API do Pokémon foi uma experiência interessante, já que a estrutura de dados pode ser um pouco confusa no começo. Mas, com o tempo, fui ajustando os manipuladores de dados e aprendendo mais sobre as melhores práticas para consumir APIs REST.
  
* A parte de renderizar as informações de forma eficiente e sem fazer chamadas desnecessárias à API foi um desafio interessante. Optamos por um carregamento sob demanda (botão de "Carregar Mais") para evitar sobrecarga de dados e garantir uma boa performance.

## Próximos Passos

* Melhorar a experiência do usuário com animações de carregamento.

* Implementar uma busca por Pokémon por nome ou tipo.

* Adicionar mais informações, como habilidades e movimentos.


## Contribuições

Contribuições são sempre bem-vindas! Se você tiver alguma sugestão de melhoria, bug para reportar ou quiser adicionar novos recursos, sinta-se à vontade para abrir uma issue ou um __pull request__.



## Siga nas redes sociais

Linkedin: https://linkedin.com/adrieldonega

Youtube:  https://youtube.com.br/adrieltechlab


