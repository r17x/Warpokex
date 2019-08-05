import React, { useState, useEffect } from 'react'
import { bool, number } from 'prop-types'

import { Div } from 'atomize'

export default function Loading({ loading, duration }) {
  const [animate, setAnimate] = useState(loading)

  useEffect(
    () => {
      setInterval(setAnimate(!animate), duration)
    },
    // eslint-disable-next-line
    []
  )

  return (
    <Div
      h="3rem"
      w="3rem"
      m={{ b: '4rem' }}
      rounded="circle"
      bg="black500"
      style={{
        position: 'absolute',
        top: '50vh',
        bottom: '50vh',
        transform: animate ? 'translateX(20rem)' : 'translateX(0)',
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
