import React from 'react'
import styles from './Header.module.sass'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <header className={styles.header}>
                <p className={styles.headerLogo}>C-Shop</p>
                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        <li className={styles.navListItem}><Link className={styles.navListItemLink} to="/">Home</Link></li>
                        <li className={styles.navListItem}><Link className={styles.navListItemLink} to='/category'>Category</Link></li>
                        <li className={styles.navListItem}></li>
                        <li className={styles.navListItem}></li>
                    </ul>
                </nav>
                <div className={styles.headerWrapper}>
                    <button className={styles.btnLogin}>Login</button>
                    <button className={styles.btnReg}>Register</button>
                </div>
            </header>
        </>
    )
}

export default Header