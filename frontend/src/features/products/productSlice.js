import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAsyncProducts = createAsyncThunk(
  "products/fetchAsyncProducts",
  async ({
    keyword,
    currentPage,
    price = [0, 25000],
    category,
    ratings = 0,
  }) => {
    let link = `/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}`;

    if (category) {
      link = `/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}&ratings[gte]=${ratings}`;
    }

    let res = await axios.get(link);

    return res.data;
  }
);

export const fetchAsyncProductDetails = createAsyncThunk(
  "products/fetchAsyncProductDetails",
  async (id) => {
    let res = await axios.get(`/api/v1/product/${id}`);
    return res.data;
  }
);

const initialState = { products: {}, productDetails: {} };
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProducts: (state, { payload }) => {
      state.products = payload;
    },
  },
  extraReducers: {
    [fetchAsyncProducts.pending]: (state) => {
      // console.log("pending");
      return { ...state, loading: true };
    },
    [fetchAsyncProducts.fulfilled]: (state, { payload }) => {
      // console.log("fetched successfully");
      return { ...state, products: payload, loading: false };
    },
    [fetchAsyncProducts.rejected]: () => console.log("rejected"),
    [fetchAsyncProductDetails.pending]: (state) => {
      // console.log("pending");
      return { ...state };
    },
    [fetchAsyncProductDetails.fulfilled]: (state, { payload }) => {
      return { ...state, productDetails: payload };
    },
  },
});

export const { getProducts } = productSlice.actions;
export const getAllProducts = (state) => state.productReducer;
export const getAllProductsDetails = (state) => state.productReducer;

export default productSlice.reducer;
