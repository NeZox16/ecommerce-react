import React, { useEffect, useState } from 'react'
import styles from './CarItem.module.sass'
import Skeleton from '../ui/Skeleton/Skeleton'
import Button from '../ui/button/Button'


function CarItem({car, isLoading}) {
    const [valid, setValid] = useState(true) 
    const [formattedPrice, setFormattedPrice] = useState('')
    const [maxLength, setMaxLength] = useState('')
    
    useEffect(() => {
        if (!isLoading) {
            setMaxLength(!isLoading && car.desc.length > 50 ? `${car.desc.slice(0, 50)}...` : car.desc)
            setFormattedPrice(new Intl.NumberFormat("en-US", { style: 'currency', currency: 'USD' }).format(car.price))
        }
    }, [car, isLoading])

    return (
        <>
        {isLoading ? (
            <Skeleton count={6}/>
        ) : (
            <>
            <div className={styles.carItem}>
                <div className={styles.carHeader}>
                    <Button type={'button'} className={`${styles.carBtn} ${styles.btnAddToCart}`}>
                        <svg className={styles.iconAdd} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                            <path d="M19 12.998H13V18.998H11V12.998H5V10.998H11V4.99805H13V10.998H19V12.998Z"/>
                        </svg>
                    </Button>
                    <Button type={'button'} className={`${styles.carBtn} ${styles.btnLikeCrItem}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none">
                            <path d="M19.071 13.142L13.414 18.8C13.0389 19.175 12.5303 19.3856 12 19.3856C11.4696 19.3856 10.961 19.175 10.586 18.8L4.92896 13.143C4.46133 12.6795 4.08986 12.1281 3.83589 11.5206C3.58191 10.9131 3.45043 10.2614 3.44899 9.60299C3.44754 8.94454 3.57617 8.29229 3.82748 7.68368C4.0788 7.07508 4.44785 6.5221 4.91344 6.05651C5.37904 5.59091 5.93201 5.22186 6.54062 4.97055C7.14922 4.71924 7.80147 4.59061 8.45992 4.59205C9.11837 4.59349 9.77006 4.72498 10.3776 4.97895C10.9851 5.23293 11.5364 5.60439 12 6.07202C12.9415 5.1539 14.2069 4.64369 15.522 4.65193C16.8371 4.66017 18.096 5.18619 19.0259 6.11605C19.9559 7.0459 20.4821 8.30472 20.4906 9.6198C20.499 10.9349 19.989 12.2003 19.071 13.142Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </Button>
                </div>
                <img className={styles.carImage} src={car.imageUrl}/>
                <div className={styles.carWrapper}>
                    <h3 className={styles.carWrapperName}>{car.name}</h3>
                    <span className={styles.carWrapperPrice}>{formattedPrice}</span>
                    <p className={styles.carWrapperDesc} onClick={() => setValid(!valid)}>{valid ? maxLength : car.desc}</p>
                    <div className={styles.carWrapperCategory}>
                        {car.category.map(tag => 
                            <span className={styles.carWrapperCategoryItem} key={tag}>#{tag}</span>
                        )}
                    </div>
                </div>
            </div>
            </>
        )}
        </>
    )
}

export default CarItem