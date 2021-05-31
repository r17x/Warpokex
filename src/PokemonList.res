module Query = %relay(`
  query PokemonListQuery($first: Int!) {
    pokemons(first: $first) {
      id
      number
      name
      types
      image
    }
  }
`)
/**
 * Dumb component
 */
module Card = {
  @react.component
  let make = (~name, ~number, ~image) => {
    <>
      <img src={image} alt={name} />
      <label> {name->React.string} </label>
      <label> {number->React.string} </label>
    </>
  }
}

let renderPokemon: option<
  PokemonListQuery_graphql.Types.response_pokemons,
> => React.element = pokemonOpt =>
  switch pokemonOpt {
  | Some({id: key, name: Some(name), number: Some(number), image: Some(image)}) =>
    <Card name number image key />
  | _ => React.null
  }

@react.component
let make = (~first) => {
  let queryData = Query.use(
    ~variables={
      first: first,
    },
    (),
  )

  switch queryData.pokemons {
  | Some(pokemons) if pokemons->Array.length > 0 => pokemons->Array.map(renderPokemon)->React.array
  | _ => "No Data"->React.string
  }
}
