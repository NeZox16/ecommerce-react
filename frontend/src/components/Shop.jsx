import React, { useEffect, useMemo, useState } from "react";
import styles from "./Shop.module.sass";
import CarItem from "./car-item/CarItem";
import ShopHeader from "./ui/shop-header/ShopHeader";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../redux/slices/asyncThunk";

function Shop() {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.cars);
  const selectCategory = useSelector(
    (state) => state.category.selectedCategory
  );
  console.log(cars);
  const isCarsLoading = cars.status === "loading";
  console.log(isCarsLoading);
  useMemo(() => {
    dispatch(fetchCars());
  }, []);

  return (
    <div className={styles.shopCar}>
      <ShopHeader />
      <div className={styles.shopCarMiddle}>
        {(isCarsLoading ? [...[Array(6)]] : cars.items)
          .filter(
            (car) =>
              selectCategory === "all" || car.category.includes(selectCategory)
          )
          .map((car, index) =>
            isCarsLoading ? (
              <CarItem key={index} isLoading={isCarsLoading} />
            ) : (
              <CarItem isLoading={isCarsLoading} key={car._id} car={car} />
            )
          )}
      </div>
    </div>
  );
}

export default Shop;
