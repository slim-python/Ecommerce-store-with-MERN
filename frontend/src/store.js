import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./features/products/productSlice";
import authSlice from "./features/auth/authSlice";
// import userSlice from "./features/user/userSlice";
import cartSlice from "./features/cart/cartSlice";
import orderSlice from "./features/order/orderSlice";
import reviewSlice from "./features/review/reviewSlice";
import adminSlice from "./features/admin/adminSlice";
const store = configureStore({
  reducer: {
    productReducer: productSlice,
    authReducer: authSlice,
    cartReducer: cartSlice,
    orderNew: orderSlice,
    reviewReducer: reviewSlice,
    adminReducer: adminSlice,
  },
});

export default store;
