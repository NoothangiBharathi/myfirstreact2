

import React from 'react'

const SecondComp = (props) => {

    const {name,city,town} = props.user

  return (
    <div>
        <div>{name}</div>
        <div>{city}</div>
        <div>{town}</div>
    </div>
  )
}

export default SecondComp