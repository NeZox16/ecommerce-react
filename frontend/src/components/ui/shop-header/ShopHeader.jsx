import React, { useState } from "react";
import Category from "../../car-category/CarCategory";
import styles from "./ShopHeader.module.sass";
import Button from "../button/Button";
import { Input } from "../input/Inputs";

function ShopHeader() {
  return (
    <header className={styles.shopCarTop}>
      <div className={styles.shopCarTopHeader}>
        <div className={styles.shopCarTopHeaderSearch}>
          <Input
            type={"text"}
            className={styles.shopCarTopSearch}
            placeholder={"Find car..."}
          />
          <Button type={"button"} className={styles.shopCarTopBtn}>
            Find
          </Button>
        </div>
        <Category />
      </div>
    </header>
  );
}

export default ShopHeader;
