import { configureStore } from "@reduxjs/toolkit";
import { carReducer } from './slices/CarShopSlice'
import { categoryReducer } from "./slices/CategorySlice";

export default configureStore({
    reducer:{
        cars: carReducer,
        category: categoryReducer
    }
})