import React, { useEffect, useState } from 'react'
import styles from './Category.module.sass'
import { useDispatch } from 'react-redux';
import { selectCategory } from '../../redux/slices/CategorySlice';

function CarCategory() {
    const [isOpen, setIsOpen] = useState(false)
    const toggleVisible = isOpen ? styles.isOpen : '';
    const dispatch = useDispatch()
    function filteredCars(category) {
        dispatch(selectCategory(category))
    }

    return (
        <div className={styles.category} onClick={() => setIsOpen(!isOpen)}>
            <h2 className={styles.categoryTitle}>Category</h2>
            <ul className={`${styles.categoryList} ${toggleVisible}`}>
                <li className={styles.categoryListItem} onClick={() => filteredCars('all')}>All</li>
                <li className={styles.categoryListItem} onClick={() => filteredCars('Supercars')}>Supercars</li>
                <li className={styles.categoryListItem} onClick={() => filteredCars('Racing Cars')}>Racing Cars</li>
                <li className={styles.categoryListItem} onClick={() => filteredCars('Classic Sports Cars')}>Classic Sports Cars</li>
                <li className={styles.categoryListItem} onClick={() => filteredCars('Electric Sports Cars')}>Electric Sports Cars</li>
            </ul>
        </div>
    )
}

export default CarCategory