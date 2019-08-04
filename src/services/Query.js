import gql from 'graphql-tag'

export const GET_ALL_POKEMONS = gql`
query GetAllPokemons($first: Int!) {
  pokemons(first: $first){
    id
    number
    name
    types
    image
  }
}
`
export const GET_POKEMON = gql`
query GetPokemon($name: String!) {
  pokemon(name: $name){
   id
    number
    attacks {
      special {
        name
        type
        damage
      }
    }
    evolutions {
      id
      number
      name
      image
      weight {
        minimum
        maximum
      }
      attacks {
        fast {
          name
          type
          damage
        }
      }
    }
  }
}
`


