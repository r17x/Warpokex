import React, {useState, useEffect} from 'react' 
import {bool, number} from 'prop-types'

import { Div } from "atomize";

export default function Loading({loading, duration}) {
    const [animate, setAnimate] = useState(loading) 

    useEffect(() => {
        setInterval(setAnimate(!animate), duration) 
    }, [animate, duration])

    return(
        <Div
          h="3rem"
          w="3rem"
          m={{ b: "4rem" }}
          rounded="lg"
          bg="brand200"
          style={{
            transform: animate
              ? "translateX(20rem)"
              : "translateX(0)"
          }}
          transition
        />
    )
}

Loading.propTypes = {
    loading: bool,
    duration: number,
}

Loading.defaultProps = {
    loading: false,
    duration: 1000,
}
