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

//update product
export const fetchAsyncUpdateProduct = createAsyncThunk(
  "products/fetchAsyncUpdateProduct",
  async ({ id, myForm }) => {
    const config = {
      headers: { "Content-Type": "application/json" },
    };
    const { data } = await axios.put(
      `/api/v1/admin/product/${id}`,
      myForm,
      config
    );
    return data.success;
  }
);

const initialState = {
  products: {},
  productDetails: {},
  isProductUpdated: false,
};
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProducts: (state, { payload }) => {
      state.products = payload;
    },
    clearErrors: (state) => {
      state.isProductUpdated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncUpdateProduct.fulfilled, (state, action) => {
        state.isProductUpdated = action.payload;
      })
      .addCase(fetchAsyncProducts.pending, (state) => {
        return { ...state, loading: true };
      })
      .addCase(fetchAsyncProducts.fulfilled, (state, action) => {
        return { ...state, products: action.payload, loading: false };
      })
      .addCase(fetchAsyncProductDetails.fulfilled, (state, action) => {
        return { ...state, productDetails: action.payload };
      });
  },
});

export const { getProducts, clearErrors } = productSlice.actions;
export const getAllProducts = (state) => state.productReducer;
export const getAllProductsDetails = (state) => state.productReducer;

export default productSlice.reducer;
