import React from 'react'

const Btn = ({label, ...rest}) => {
  return (
    <button {...rest}>{label}</button>
  )
}

export default Btn