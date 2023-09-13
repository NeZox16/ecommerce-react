import React, { useEffect, useState } from 'react'
import styles from './CarItem.module.sass'
import Skeleton from '../ui/Skeleton/Skeleton'


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