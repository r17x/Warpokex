import { GET_ALL_POKEMONS } from 'services/Query'
export default [
  {
    request: {
      query: GET_ALL_POKEMONS,
      variables: {
        first: 10,
      },
    },
    result: {
      data: {
        pokemons: [
          {
            id: 'UG9rZW1vbjowMDE=',
            number: '001',
            name: 'Bulbasaur',
            types: ['Grass', 'Poison'],
            image: 'https://img.pokemondb.net/artwork/bulbasaur.jpg',
            __typename: 'Pokemon',
          },
          {
            id: 'UG9rZW1vbjowMDI=',
            number: '002',
            name: 'Ivysaur',
            types: ['Grass', 'Poison'],
            image: 'https://img.pokemondb.net/artwork/ivysaur.jpg',
            __typename: 'Pokemon',
          },
          {
            id: 'UG9rZW1vbjowMDM=',
            number: '003',
            name: 'Venusaur',
            types: ['Grass', 'Poison'],
            image: 'https://img.pokemondb.net/artwork/venusaur.jpg',
            __typename: 'Pokemon',
          },
          {
            id: 'UG9rZW1vbjowMDQ=',
            number: '004',
            name: 'Charmander',
            types: ['Fire'],
            image: 'https://img.pokemondb.net/artwork/charmander.jpg',
            __typename: 'Pokemon',
          },
          {
            id: 'UG9rZW1vbjowMDU=',
            number: '005',
            name: 'Charmeleon',
            types: ['Fire'],
            image: 'https://img.pokemondb.net/artwork/charmeleon.jpg',
            __typename: 'Pokemon',
          },
          {
            id: 'UG9rZW1vbjowMDY=',
            number: '006',
            name: 'Charizard',
            types: ['Fire', 'Flying'],
            image: 'https://img.pokemondb.net/artwork/charizard.jpg',
            __typename: 'Pokemon',
          },
          {
            id: 'UG9rZW1vbjowMDc=',
            number: '007',
            name: 'Squirtle',
            types: ['Water'],
            image: 'https://img.pokemondb.net/artwork/squirtle.jpg',
            __typename: 'Pokemon',
          },
          {
            id: 'UG9rZW1vbjowMDg=',
            number: '008',
            name: 'Wartortle',
            types: ['Water'],
            image: 'https://img.pokemondb.net/artwork/wartortle.jpg',
            __typename: 'Pokemon',
          },
          {
            id: 'UG9rZW1vbjowMDk=',
            number: '009',
            name: 'Blastoise',
            types: ['Water'],
            image: 'https://img.pokemondb.net/artwork/blastoise.jpg',
            __typename: 'Pokemon',
          },
          {
            id: 'UG9rZW1vbjowMTA=',
            number: '010',
            name: 'Caterpie',
            types: ['Bug'],
            image: 'https://img.pokemondb.net/artwork/caterpie.jpg',
            __typename: 'Pokemon',
          },
        ],
      },
    },
  },
]
