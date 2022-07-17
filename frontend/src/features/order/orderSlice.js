import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createOrder = createAsyncThunk(
  "order/createOrder",
  async (order, thunkAPI) => {
    try {
      const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await axios.post(`/api/v1/order/new`, order, config);
      return await data.order;
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//my order

export const myOrders = createAsyncThunk("order/myOrder", async (thunkAPI) => {
  try {
    const { data } = await axios.get(`/api/v1/orders/me`);
    return await data.orders;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const getOrderDetails = createAsyncThunk(
  "order/getOrderDetails",
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.get(`/api/v1/order/${id}`);
      return await data.order;
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//send sms after payment success
export const sendSMS = createAsyncThunk(
  "order/sendSMS",
  async (SMSdata, thunkAPI) => {
    try {
      const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await axios.post(
        `/api/v1/order/success`,
        SMSdata,
        config
      );
      return await data;
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data) ||
        error.message ||
        error.toString();
      console.log("error> ", message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const initialState = { message: "", orders: [], loading: false, order: {} };
const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.fulfilled, (state, action) => {
        state.neworder = action.payload;
        console.log(action.payload);
      })
      .addCase(myOrders.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(myOrders.fulfilled, (state, action) => {
        state.orders = action.payload;
        state.loading = false;
      })
      .addCase(getOrderDetails.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getOrderDetails.fulfilled, (state, action) => {
        state.order = action.payload;
        state.loading = false;
      });
  },
});

export default orderSlice.reducer;
