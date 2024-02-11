import React from 'react'

function Main(props) {
  return (
    <>
    <main className={props.className}>
        {props.children}
    </main>
    </>
  )
}

export default Main