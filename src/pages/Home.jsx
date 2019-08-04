import React, { useState, useCallback } from 'react'
import {GET_ALL_POKEMONS, GET_POKEMON}  from 'services/Query'
import client from 'services/graph'
import {useQuery} from '@apollo/react-hooks'
import ListPokemon from 'components/ListPokemon'
import {Button, Icon} from 'atomize'
/**
 * @todo 
 * [need identifier] useApolloClient not work
 */
export default function Home(props){
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
                            setFirst(first+5)
                            handleFetchMore()
                      }}
        disabled={loading}
        w="100%"
        bg="warning700"
        hoverBg="warning800"
        rounded="xs"
        color={"white"}
        p={{ l: "3rem", r: "2rem" }}
        m={{ b: "2rem" }}
      >
          {loading ? (
                <Icon
                  name={loading ? "Loading2" : "Plus"}
                  pos="absolute"
                  top="50%"
                  transform="translateY(-50%)"
                  size="18px"
                  color={loading? "primary" : "white"}
                  m={{ r: "0.5rem" }}
                />

          ): "Load More"}
      </Button>
        </>
    )
}

Home.defaultProps = {
    query: GET_ALL_POKEMONS,
}
