import axios from "../../axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchLogin = createAsyncThunk(
  "auth/fetchLogin",
  async (params) => {
    const { data } = await axios.post("/auth/login", params);
    return data;
  }
);

export const fetchRegister = createAsyncThunk(
  "auth/fetchRegister",
  async (params) => {
    const { data } = await axios.post("/auth/register", params);
    return data;
  }
);
export const fetchMe = createAsyncThunk("auth/fetchMe", async () => {
  const { data } = await axios.get("/auth/me");
  return data;
});

//CARS

export const fetchCars = createAsyncThunk("cars/fetchCars", async () => {
  const { data } = await axios.get("/cars");
  return data;
});
