import React from 'react'

function Label({ children, className, id}) {
  return (
    <>
        <label htmlFor={id} className={className}>{ children }</label>
    </>
  )
}

export default Label