import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addItemsToCart = createAsyncThunk(
  "cart/addItemsToCart",
  async ({ id, quantity }, thunkAPI) => {
    const { data } = await axios.get(`/api/v1/product/${id}`);

    let cartItemData = {
      product: data.product._id,
      name: data.product.name,
      price: data.product.price,
      image: data.product.images[0].url,
      stock: data.product.Stock,
      quantity: quantity,
    };

    localStorage.setItem("cartItems", JSON.stringify([cartItemData]));
    return cartItemData;
  }
);

//save shipping info

export const saveShippingInfo = createAsyncThunk(
  "cart/saveShippingInfo",
  async (data, thunkAPI) => {
    localStorage.setItem("shippingInfo", JSON.stringify(data));
    return data;
  }
);

const cartItems = JSON.parse(localStorage.getItem("cartItems"));
const shippingInfo = JSON.parse(localStorage.getItem("shippingInfo"));

const initialState = {
  cartItems: cartItems ? cartItems : [],
  shippingInfo: shippingInfo ? shippingInfo : {},
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addItemsToCart.fulfilled, (state, action) => {
        state.cartItems.push(action.payload);
        console.log(action.payload);
        //filter
      })
      .addCase(saveShippingInfo.fulfilled, (state, action) => {
        state.shippingInfo = action.payload;
      });
  },
});

export default cartSlice.reducer;
