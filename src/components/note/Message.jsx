import React from 'react'
import Btn from './Btn'

const Message = ({text, children}) => {
  return (
    <div>
        <Btn type='submit' label='ایمیل' />
        <p>{children} - {text}</p>
    </div>
  )
}

export default Message