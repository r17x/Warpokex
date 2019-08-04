import React from 'react';
import {array} from 'prop-types'
import {Tag, Col, Row, Div,  Text, Label, Image } from 'atomize'

export default function ListPokemon({data, onClick }) {
    const handleClick = (id, e) => {
      typeof onClick   === 'function' && onClick(id, e)
    }

    const getColor = (type) => ({
        water: 'info',
        fire: 'danger',
        grass: 'success',
        flying: 'warning',
    })[type.toLowerCase()] || 'black' 

    const renderType = (type, index) => (
        <Tag 
            rounded="xl"
            bg={`${getColor(type)}700`}
            key={index}
            textColor="white"
            p={{ x: "0.75rem", y: "0.25rem" }}
            m={{ r: "0.5rem", b: "0.5rem" }}
            textSize="caption" 
        >
            {type}
        </Tag> 
    )

    const renderItem =({number, name, image, types, id },index)=> (
        <Col size={{xs: 6, md: 3 }} key={id} onClick={handleClick}>
            <Div p=".5rem" m=".5rem">
                <Image data-testid={`${ListPokemon.name}.image`} src={image}/>
                <Text data-testid={`${ListPokemon.name}.image`} tag="h1" color="black">
                    {number} | {name}
                </Text>
                <Label color="black">
                    {types.map(renderType)}
                </Label>
            </Div>
        </Col>
    )
  return (
      <Row
          data-testid={ListPokemon.name}
          p={{ xs: ".5rem", md: "1rem" }}
      >
        {data.map(renderItem)}
    </Row>
  );
}

ListPokemon.propTypes = {
    data: array.isRequired,
}
