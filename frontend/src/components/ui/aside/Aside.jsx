import React, { useState } from 'react'
import Category from '../../car-category/CarCategory'
import styles from './Aside.module.sass'

function Aside() {
  return (
    <aside className={styles.shopCarLeft}>
        <div className={styles.shopCarLeftHeader}>
          <div className={styles.shopCarLeftHeaderSearch}>
              <input className={styles.shopCarLeftSearch} placeholder='Find car...'/>
              <button className={styles.shopCarLeftBtn}>Find</button>
          </div>
          <Category/>
        </div>
    </aside>
  )
}

export default Aside