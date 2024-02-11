import { configureStore } from "@reduxjs/toolkit";
import { carReducer } from "./slices/CarShopSlice";
import { categoryReducer } from "./slices/CategorySlice";
import { authReducer } from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cars: carReducer,
    category: categoryReducer,
  },
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
