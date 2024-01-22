import { configureStore } from "@reduxjs/toolkit";
import { carReducer } from "./slices/CarShopSlice";
import { categoryReducer } from "./slices/CategorySlice";
import { authReducer } from "./slices/authSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    cars: carReducer,
    category: categoryReducer,
  },
});
