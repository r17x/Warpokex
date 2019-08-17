import React, { useState } from 'react'
import { GET_ALL_POKEMONS, GET_POKEMON } from 'services/Query'
import client from 'services/graph'
import { useQuery } from '@apollo/react-hooks'
import { ListPokemon, Search } from 'components'
import { Button } from 'atomize'
/**
 * @todo
 * [need identifier] useApolloClient not work
 * if fixed remove client from 'services/graph'
 */
export default function Home(props) {
  const [query, setQuery] = useState(GET_ALL_POKEMONS)
  const [variables, setVariables] = useState({ first: 10, name: '' })
  const [search, setSearch] = useState('')

  const { loading, error, data, fetchMore } = useQuery(query, {
    client,
    variables
  })

  const handleItemClick = (data, e) => {
    props.history && props.history.push(`/pokemon/${data.name}`)
  }

  const handleChange = e => {
    e.persist()
    setSearch(e.target.value)
  }

  const handleEnter = e => {
    if (e.key === 'Enter') {
      setVariables({ ...variables, name: search })
      setQuery(
        ['', undefined, null].includes(search) ? GET_ALL_POKEMONS : GET_POKEMON
      )
    }
  }

  // console.log(data)
  const { pokemons, pokemon } = data

  const handleFetchMore = variables => {
    // console.log(variables)
    fetchMore({
      variables,
      updateQuery: (prev, { fetchMoreResult, variables }) => {
        if (!fetchMoreResult) return prev
        setVariables(variables)
        return Object.assign({}, prev, {
          pokemons: [...fetchMoreResult.pokemons],
          pokemon: [fetchMoreResult.pokemon]
        })
      }
    })
  }

  if (error) return 'Something Wrong'

  // console.log('current data', data)
  return (
    <>
      <Search
        isLoading={loading}
        onKeyPress={handleEnter}
        onChange={handleChange}
      />
      <ListPokemon
        onClick={handleItemClick}
        data={
          pokemons
            ? pokemons
            : pokemon
            ? Array.isArray(pokemon)
              ? pokemon
              : [pokemon]
            : []
        }
      />
      <Button
        data-testid="loadMore"
        onClick={e => {
          handleFetchMore({
            ...variables,
            first: variables.first + 5
          })
        }}
        disabled={loading}
        isLoading={loading}
        w="100%"
        bg="warning700"
        hoverBg="warning800"
        rounded="circle"
        color={'white'}
        p={{ l: '3rem', r: '2rem' }}
        m={{ b: '2rem' }}
      >
        {loading ? 'Loading...' : 'Load More'}
      </Button>
    </>
  )
}

Home.defaultProps = {
  query: GET_ALL_POKEMONS
}
