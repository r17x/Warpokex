import React from 'react'
import { ListPokemon } from 'components'
import { GET_POKEMON } from 'services/Query'
import { useQuery } from '@apollo/react-hooks'
import client from 'services/graph'
import Loading from 'components/Loading'
import { Row, Col, Text } from 'atomize'

const { RenderType, RenderItem } = ListPokemon

const renderItem = (acc, cur, idx, src) => {
  const props = { size: 12 / src.length }
  let children
  if (cur[0] === 'type') children = RenderType(cur[1])
  else
    children = React.createElement(
      Text,
      { tag: 'span', textWeight: 'bold' },
      cur[1],
    )
  acc[idx] = React.createElement(Col, props, children)
  return acc
}

export default function Pokemon({
  match: {
    params: { name },
  },
}) {
  const { loading, data } = useQuery(GET_POKEMON, {
    client,
    variables: {
      name,
    },
  })
  if (loading) return <Loading />
  if (data) {
    const { pokemon } = data
    const detail = pokemon.attacks.special.map(obj =>
      Object.entries(obj).reduce(renderItem, []),
    )
    console.log(detail)
    return (
      <>
        <Row>
          <Col size={3}>
            <Text tag="h1" textSize="display1" m={{ b: '2rem' }}>
              {pokemon.name}
            </Text>

            <RenderItem {...pokemon} size={12} />
          </Col>
          <Col size={9}>
            <Text tag="h1" textSize="display1" m={{ b: '.2rem' }}>
              Special Attacks
            </Text>

            {detail.map((Item, key) => (
              <Row>{Item}</Row>
            ))}

            <Text tag="h1" textSize="display1" m={{ t: '2rem', b: '2rem' }}>
              Evolutions
            </Text>

            <ListPokemon data={pokemon.evolutions || []} />
          </Col>
        </Row>
      </>
    )
  }
}
