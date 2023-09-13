import Container from '../container/Container'
import React from 'react'

function Section(props) {
  return (
    <>
        <section>
            <Container>
              {props.children}
            </Container>
        </section>
    </>
  )
}

export default Section