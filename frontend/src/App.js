import Header from "./component/layout/Header/Header";
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/layout/Home/home.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Webfont from "webfontloader";
import ProductDetails from "./component/Product/ProductDetails";
import Products from "./component/Product/Products.js";
import Search from "./component/Product/Search.js";
import LoginSignup from "./component/user/LoginSignup.js";
import Profile from "./component/user/Profile.js";
import ProtectedRoute from "./Route/ProtectedRoute";
import store from "./store";
import UserOption from "./component/layout/Header/UserOption.js";
import UpdateProfile from "./component/Admin/UpdateProfile.js";
import { useSelector } from "react-redux";
import { loadUser } from "./features/auth/authSlice.js";
import UpdatePassword from "./component/Admin/UpdatePassword.js";
import ForgotPassword from "./component/user/ForgotPassword.js";
import Cart from "./component/Cart/Cart.js";
import Shipping from "./component/Cart/Shipping.js";
import ConfirmOrder from "./component/Cart/ConfirmOrder.js";
import axios from "axios";
import NotFound from "./component/layout/Not Found/NotFound.js";
import Payment from "./component/Cart/Payment.js";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import OrderSuccess from "./component/Cart/OrderSuccess.js";
import MyOrders from "./component/Order/MyOrders.js";
import OrderDetails from "./component/Order/OrderDetails.js";
import Dashboard from "./component/Admin/Dashboard.js";
import ProductList from "./component/Admin/ProductList.js";
import NewProduct from "./component/Admin/NewProduct.js";
import UpdateProduct from "./component/Admin/UpdateProduct.js";
import OrderList from "./component/Admin/OrderList.js";
import UsersList from "./component/Admin/UsersList.js";
import ProductReviews from "./component/Admin/ProductReviews.js";
function App() {
  const { user, isAuthenticated } = useSelector((state) => state.authReducer);

  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");

    setStripeApiKey(data.stripeApiKey);
  }
  const stripePromise = loadStripe(stripeApiKey);

  useEffect(() => {
    store.dispatch(loadUser());
    getStripeApiKey();
  }, []);

  useEffect(() => {
    Webfont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  }, []);

  return (
    <Router>
      <Header />
      {isAuthenticated && <UserOption user={user} />}
      {/* {stripeApiKey && <Elements stripe={stripePromise}></Elements>} */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/404" element={<NotFound />} />
        <Route exact path="/product/:id" element={<ProductDetails />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/search" element={<Search />} />
        <Route path="/products/:keyword" element={<Products />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route
          path="/account"
          element={<ProtectedRoute Component={Profile} />}
        />
        <Route
          path="/me/update"
          element={<ProtectedRoute Component={UpdateProfile} />}
        />
        <Route
          path="/password/update"
          element={<ProtectedRoute Component={UpdatePassword} />}
        />
        <Route path="/password/forgot" element={<ForgotPassword />} />
        <Route path="/carts" element={<Cart />} />
        <Route
          path="/shipping/"
          element={<ProtectedRoute Component={Shipping} />}
        />
        <Route
          path="/order/confirm"
          element={<ProtectedRoute Component={ConfirmOrder} />}
        />
        <Route
          path="process/payment"
          element={<ProtectedRoute Component={Payment} />}
        />
        <Route
          path="/success"
          element={<ProtectedRoute Component={OrderSuccess} />}
        />
        <Route path="/orders" element={<MyOrders />} />
        <Route
          path="/order/:id"
          element={<ProtectedRoute Component={OrderDetails} />}
        />
        <Route
          path="/admin/dashboard"
          element={<ProtectedRoute Component={Dashboard} />}
        />
        <Route
          path="/admin/products"
          element={<ProtectedRoute Component={ProductList} />}
        />{" "}
        <Route
          path="/admin/product"
          element={<ProtectedRoute Component={NewProduct} />}
        />
        <Route
          path="/admin/product/:id"
          element={<ProtectedRoute Component={UpdateProduct} />}
        />
        <Route
          path="/admin/orders"
          element={<ProtectedRoute Component={OrderList} />}
        />
        <Route
          path="/admin/users"
          element={<ProtectedRoute Component={UsersList} />}
        />
        <Route
          path="/admin/reviews"
          element={<ProtectedRoute Component={ProductReviews} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
