import React from 'react';
import PropTypes from 'prop-types'
import { Div, Container } from "atomize";

export default function Wrapper({children}){
    return (
        <Container>
            <Div>
                {children}
            </Div>
        </Container>
    )
}

Wrapper.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}
