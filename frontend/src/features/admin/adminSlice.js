import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//get all products - admin
export const getAdminProducts = createAsyncThunk(
  "admin/getAdminProducts",
  async (thunkAPI) => {
    try {
      const { data } = await axios.get(`/api/v1/admin/products`);
      return await data.products;
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//get all users

export const getAllUsers = createAsyncThunk(
  "admin/getAllUsers",
  async (thunkAPI) => {
    try {
      const { data } = await axios.get(`/api/v1/admin/users`);
      return await data.users;
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//get all orders

export const getAllOrders = createAsyncThunk(
  "admin/getAllOrders",
  async (thunkAPI) => {
    try {
      const { data } = await axios.get(`/api/v1/admin/orders`);
      return await data.orders;
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//delete products by id
export const deleteProduct = createAsyncThunk(
  "admin/deleteProduct",
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/api/v1/admin/product/${id}`);
      return await data.success;
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//create product
export const createProduct = createAsyncThunk(
  "admin/createProduct",
  async (productData, thunkAPI) => {
    try {
      const config = { headers: { "Content-Type": "application/json" } };

      const { data } = await axios.post(
        `/api/v1/admin/product/new`,
        productData,
        config
      );
      return await data;
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//update product
export const updateProduct = createAsyncThunk(
  "admin/updateProduct",
  async ({ id, productData }, thunkAPI) => {
    try {
      const config = { headers: { "Content-Type": "application/json" } };

      const { data } = await axios.put(
        `/api/v1/admin/product/${id}`,
        productData,
        config
      );
      return await data;
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//get all reviews - admin p
export const getAllReviews = createAsyncThunk(
  "admin/getAllReviews",
  async ({ id, productData }, thunkAPI) => {
    try {
      const { data } = await axios.get(`/api/v1/reviews?id=${id}`);
      return await data.reviews;
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const initialState = {
  isDeleted: false,
  loading: false,
  productCreated: false,
};
const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAdminProducts.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      .addCase(getAllOrders.fulfilled, (state, action) => {
        state.orders = action.payload;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.isDeleted = action.payload;
      })
      .addCase(createProduct.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.product = action.payload;
        state.loading = false;
        state.productCreated = true;
      })
      .addCase(getAllReviews.fulfilled, (state, action) => {
        state.reviews = action.payload;
      });
  },
});

export default adminSlice.reducer;
