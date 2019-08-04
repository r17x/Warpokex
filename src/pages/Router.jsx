import React, { Suspense, useEffect, useState, useCallback } from 'react'
import history from 'pages/history'
import { Router, Route } from 'react-router-dom'
import Loading from 'components/Loading'
import ListPokemon from 'components/ListPokemon'
import {useQuery} from '@apollo/react-hooks'
import {GET_ALL_POKEMONS, GET_POKEMON}  from 'services/Query'
import {Button, Icon} from 'atomize'

/**
 * @todo 
 * [need identifier] useApolloClient not work
 */
import client from 'services/graph'

// const ListPokemonFragment = `
// fragment fragmentFields on Pokemon {
//         id
//         number
//         name
//         image
//         types
//       }
// `


function Home(props){
    const  {query}  = props 
    const [first , setFirst ] = useState(10)
    const [hasNext, setNext] = useState(true)
    const {loading, error, data, fetchMore } = useQuery(query, {
        client,
        variables: {
            first,
        },
    })

    const handleFetchMore = useCallback(() => {
        fetchMore({
            variables: {
                first, 
            } ,
            updateQuery: (prev, { fetchMoreResult }) => {
              if (!fetchMoreResult) return prev;
              if (fetchMoreResult && fetchMoreResult.pokemons && fetchMoreResult.pokemons.length > prev.pokemons.length ) return fetchMoreResult 
              setNext(false)
            }
        }) 
    },[first, setNext, fetchMore])

    if(error) return "Something Wrong"

    return (
        <>
        <ListPokemon data={(data && data.pokemons) || []} /> 
              <Button
                  data-testid="loadMore"
                  onClick={() => {
                            setFirst(first+3)
                            handleFetchMore()
                      }}
        disabled={loading}
        w="100%"
        bg="warning700"
        hoverBg="warning800"
        rounded="xs"
        color={loading? "primary" : "white"}
        p={{ l: "3rem", r: "2rem" }}
        m={{ b: "2rem" }}
      >
          {loading ? (
              <>
          <Icon
            name={loading ? "Loading2" : "Plus"}
            pos="absolute"
            top="50%"
            left="1rem"
            transform="translateY(-50%)"
            size="18px"
            color={loading? "primary" : "white"}
            m={{ r: "0.5rem" }}
          />
          Loading...
        </>

          ): "Load More"}
      </Button>
        </>
    )
}

Home.defaultProps = {
    query: GET_ALL_POKEMONS,
}

const Pokemon = ({params: {name}}) => {
    const {loading, data} = useQuery(GET_POKEMON, {
        client,
        variables: {
            name,
        },
        partialRefetch: true,
        returnPartialData: true,
    })
    if(loading) return <Loading/>
    if(data) return (<>
            {JSON.stringify(data)}
            <ListPokemon data={data.evolutions} /> 
        </>)
    return <p>Home</p> 

}

export default function Routers() {
  return (
    <Router history={history}>
      <Suspense fallback={<Loading />}>
        <Route key="homepage" path="/" component={Home} exact />
        <Route key="pokemon" path="/pokemon" component={Pokemon} exact />
      </Suspense>
    </Router>
  )
}
