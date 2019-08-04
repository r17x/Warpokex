import React from 'react'
import ListPokemon from 'components/ListPokemon'
import {GET_POKEMON}  from 'services/Query'
import {useQuery} from '@apollo/react-hooks'
import client from 'services/graph'
import Loading from 'components/Loading'

export default function Pokemon({params: {name}}){
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

