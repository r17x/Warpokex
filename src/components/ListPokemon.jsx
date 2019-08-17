import React from 'react'
import { array } from 'prop-types'
import { Tag, Col, Row, Div, Text, Label, Image } from 'atomize'

const getColor = type =>
  ({
    water: 'info',
    fire: 'danger',
    grass: 'success',
    flying: 'warning'
  }[type.toLowerCase()] || 'black')

export const renderType = (type, index) => (
  <Tag
    rounded="xl"
    bg={`${getColor(type)}700`}
    key={index}
    textColor="white"
    p={{ x: '0.75rem', y: '0.25rem' }}
    m={{ r: '0.5rem', b: '0.5rem' }}
    textSize="caption"
  >
    {type}
  </Tag>
)

export const RenderItem = ({
  number,
  name,
  image,
  types,
  id,
  size,
  handleClick = () => {}
}) => (
  <Col
    size={size}
    key={id}
    onClick={e => handleClick({ number, name, image, types, id }, e)}
  >
    <Div p=".5rem" m=".5rem">
      <Image data-testid={`${ListPokemon.name}.image`} src={image} />
      <Text data-testid={`${ListPokemon.name}.title`} tag="h1" color="black">
        {number} | {name}
      </Text>
      <Label color="black">{types.map(renderType)}</Label>
    </Div>
  </Col>
)

RenderItem.defaultProps = {
  size: { xs: 6, md: 3 }
}

export default function ListPokemon({ data, onClick }) {
  const handleClick = (id, e) => {
    typeof onClick === 'function' && onClick(id, e)
  }
  const renderItem = ({ number, name, image, types, id }, index) => (
    <RenderItem {...{ number, name, image, types, id, handleClick }} key={id} />
  )
  return (
    <Row data-testid={ListPokemon.name} p={{ xs: '.5rem', md: '1rem' }}>
      {data.map(renderItem)}
    </Row>
  )
}

ListPokemon.propTypes = {
  data: array.isRequired
}

ListPokemon.RenderItem = RenderItem
ListPokemon.RenderType = renderType
