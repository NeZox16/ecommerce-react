import React from 'react'
import styles from './Skeleton.module.sass'

function Skeleton({count}) {
    return (
        [...Array(6)].map((_, index) => (
            <div key={index} className={styles.skeletonCard}>
                <div className={styles.skeletonImg}></div>
                <div className={styles.skeletonContent}>
                    <h3 className={styles.skeletonTitle}></h3>
                    <span className={styles.skeletonPrice}></span>
                    <p className={styles.skeletonDesc}></p>
                    <div className={styles.skeletonContentCategory}>
                        <span className={styles.skeletonCategory}></span>
                    </div>
                </div>
            </div>
        ))
    )
}

export default Skeleton