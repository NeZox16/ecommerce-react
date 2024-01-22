import Container from '../container/Container'
import React from 'react'
import styles from './Section.module.sass'

function Section(props) {
  return (
    <>
        <section className={styles.sectionCategory}>
            <Container>
              {props.children}
            </Container>
        </section>
    </>
  )
}

export default Section