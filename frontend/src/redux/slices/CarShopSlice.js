import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "./asyncThunk";
const initialState = {
  items: [],
  status: "loading",
};

const CarShopSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCars.pending, (state, action) => {
      state.items = [];
      state.status = "loading";
    });
    builder.addCase(fetchCars.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = "loaded";
    });
    builder.addCase(fetchCars.rejected, (state, action) => {
      state.items = [];
      state.status = "error";
    });
  },
});

// export default {} = CarShopSlice.actions;

export const carReducer = CarShopSlice.reducer;
