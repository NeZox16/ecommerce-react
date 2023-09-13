import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedCategory: 'all'
}

const CategorySlice = createSlice({ 
    name: 'category',
    initialState,
    reducers: {
        selectCategory: (state, action) => {
            state.selectedCategory = action.payload
        },
    },
})

export const { selectCategory } = CategorySlice.actions;

export const categoryReducer =  CategorySlice.reducer;