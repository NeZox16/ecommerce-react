import { createSlice } from "@reduxjs/toolkit";
import { fetchLogin, fetchRegister, fetchMe } from "./asyncThunk";
const initialState = {
  data: null,
  status: "loading",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: (create) => ({
    logout: create.reducer((state, action) => {
      state.data = null;
    }),
  }),
  extraReducers: (builder) => {
    //LOGIN
    builder.addCase(fetchLogin.pending, (state, action) => {
      (state.status = "loading"), (state.data = null);
    });
    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      (state.status = "loaded"), (state.data = action.payload);
    });
    builder.addCase(fetchLogin.rejected, (state, action) => {
      (state.status = "error"), (state.data = null);
    });
    //REGISTER
    builder.addCase(fetchRegister.pending, (state, action) => {
      (state.status = "loading"), (state.data = null);
    });
    builder.addCase(fetchRegister.fulfilled, (state, action) => {
      (state.status = "loaded"), (state.data = action.payload);
    });
    builder.addCase(fetchRegister.rejected, (state, action) => {
      (state.status = "error"), (state.data = null);
    });
    //ME
    builder.addCase(fetchMe.pending, (state, action) => {
      (state.status = "loading"), (state.data = null);
    });
    builder.addCase(fetchMe.fulfilled, (state, action) => {
      (state.status = "loaded"), (state.data = action.payload);
    });
    builder.addCase(fetchMe.rejected, (state, action) => {
      (state.status = "error"), (state.data = null);
    });
  },
});

export const selectIsAuth = (state) => Boolean(state.auth.data);

export const { fetchUserData, fetchUserMe, fetchRegisterUserData } =
  authSlice.reducer;
export const { logout } = authSlice.actions;

export const authReducer = authSlice.reducer;
