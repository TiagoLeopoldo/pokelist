# Pokélist — Projeto de Aplicação Front-End

Este projeto foi desenvolvido como parte da formação em **Desenvolvimento Front-End** no programa educacional [Estartando Devs](https://estartandodevs.com.br/). A aplicação consiste em uma Pokédex interativa que consome dados da [PokéAPI](https://pokeapi.co/) e oferece funcionalidades de listagem, busca, filtragem e navegação entre páginas.

---

## Objetivos do Projeto

O principal objetivo desta atividade foi aplicar os conhecimentos adquiridos em React e consumo de APIs REST, com foco em:

- Organização e reutilização de componentes
- Manipulação de rotas com React Router
- Consumo de dados externos com Axios
- Estilização responsiva com CSS
- Implementação de funcionalidades interativas como busca e filtros

---

## Funcionalidades Implementadas

- **Listagem de Pokémon** com nome, número, tipo e imagem
- **Busca dinâmica** por nome (prefixo) ou número (ID)
- **Filtro por tipo de Pokémon** com botões interativos
- **Paginação** com controle de navegação entre conjuntos de resultados
- **Página de detalhes** com informações completas do Pokémon selecionado
- **Navegação entre rotas** utilizando React Router
- **Layout responsivo** adaptado para diferentes tamanhos de tela

---

## Tecnologias Utilizadas

- **React** — biblioteca para construção de interfaces
- **TypeScript** — tipagem estática para maior segurança e clareza
- **React Router DOM** — gerenciamento de rotas e navegação
- **Axios** — cliente HTTP para consumo da PokéAPI
- **CSS** — estilização com media queries para responsividade

---

## Estrutura do Projeto

```
src/
├── assets/              # Imagens e ícones
├── components/          # Componentes reutilizáveis (Header, PokemonCard)
├── constants/           # Cores e imagens por tipo
├── pages/               # Páginas principais (Lista e Detalhes)
├── services/            # Integração com a PokéAPI
├── types/               # Tipos TypeScript utilizados na aplicação
├── App.tsx              # Definição de rotas
├── main.tsx             # Ponto de entrada da aplicação
```

---

## Instruções para Execução Local

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/pokedex-estartando-devs.git
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

4. Acesse a aplicação no navegador:
   ```
   http://localhost:5173
   ```

---

## Considerações Técnicas

- A busca por nome é baseada em **prefixo**: ao digitar "cha", por exemplo, são exibidos todos os Pokémon cujos nomes começam com "cha".
- A busca por número exige o **ID exato** do Pokémon.
- A filtragem por tipo é aplicada sobre os resultados carregados, permitindo refinar a visualização.

---

## Referências

- [PokéAPI — Documentação Oficial](https://pokeapi.co/docs)
- [React — Documentação Oficial](https://reactjs.org/)
- [TypeScript — Documentação Oficial](https://www.typescriptlang.org/)
- [React Router](https://reactrouter.com/)
- [Axios](https://axios-http.com/)

---

## Autor

**Tiago**  
Aluno do programa Estartando Devs — Trilha de Desenvolvimento Front-End  
Outubro de 2025
