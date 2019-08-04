/* global render wait */
import React from 'react'
import { MockedProvider } from 'react-apollo/test-utils';
import Home from 'pages/Home'
import mocks from 'pages/Pokemon.fixtures'

it('render Home page with the data', async () => {
    const {container, queryAllByTestId, getByTestId} = render(
        <MockedProvider mocks={mocks} addTypeName={false}>
            <Home/>
        </MockedProvider>
    )

    const listPokemon = getByTestId('ListPokemon')
    expect(listPokemon).toBeEmpty()

    // wait response 
    await wait(() => {
        expect(listPokemon).not.toBeEmpty() 
        expect(listPokemon.childElementCount).toBe(mocks[0].result.data.pokemons.length)
        const pokemonImage = queryAllByTestId('ListPokemon.image')
        expect(pokemonImage).toHaveLength(mocks[0].result.data.pokemons.length)
    })

    expect(container).toMatchSnapshot()
})
