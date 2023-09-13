import React from 'react'
import Header from '../Header/Header'
import Main from '../Main/Main'
import styles from '../Main/Main.module.sass'
function Layout(props) {
  return (
    <>
        <Header/>
        <Main className={styles.main__home}>
            {props.children}
        </Main>
    </>
  )
}

export default Layout