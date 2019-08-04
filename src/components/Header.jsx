import React from 'react'
import {Div, Text} from 'atomize'
import constants from 'constants.js'

export default function Header(props){
    return (
        <Div
        w="100%"
        bg="black500"
        textAlign="center"
        >
            <Text tag="h1" textColor="white" textSize="display1" m={{ b: "4rem" }}>
                {constants.appName}
            </Text>
        </Div>
    )
}
