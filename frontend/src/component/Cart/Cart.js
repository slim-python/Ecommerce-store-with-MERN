import React, { Fragment } from "react";
import "./Cart.css";
import CartItemCard from "./CartItemCard.js";
import { useSelector, useDispatch } from "react-redux";
import { Typography } from "@material-ui/core";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import { Link, useNavigate } from "react-router-dom";
import { addItemsToCart } from "../../features/cart/cartSlice";
import { Navigate } from "react-router-dom";
const Cart = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cartReducer);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  const shippingCharges = subtotal > 1000 ? 0 : 200;
  let tax = (subtotal * 0.18).toFixed(2);
  const totalPrice = subtotal + parseInt(tax) + shippingCharges;

  const increaseQuantity = (id, quantity, stock) => {
    // const newQty = quantity + 1;
    // if (stock <= quantity) {
    //   return;
    // }
    // dispatch(addItemsToCart({ id, newQty }));
  };

  const decreaseQuantity = (id, quantity) => {
    // const newQty = quantity - 1;
    // if (1 >= quantity) {
    //   return;
    // }
    // dispatch(addItemsToCart({ id, newQty }));
  };

  const deleteCartItems = (id) => {
    // dispatch(removeItemsFromCart(id));
  };

  const checkoutHandler = () => {
    // history.push("/login?redirect=shipping");
    navigate("/shipping", { replace: true });
  };

  return (
    <Fragment>
      {cartItems.length === 0 ? (
        <div className="emptyCart">
          <RemoveShoppingCartIcon />

          <Typography>No Product in Your Cart</Typography>
          <Link to="/products">View Products</Link>
        </div>
      ) : (
        <Fragment>
          {/* <div className="cartPage">
            <div className="cartHeader">
              <p>Product</p>
              <p>Quantity</p>
              <p>Subtotal</p>
            </div>

            {cartItems &&
              cartItems.map((item) => (
                <div className="cartContainer" key={item.product}>
                  <CartItemCard item={item} deleteCartItems={deleteCartItems} />
            
                  <p className="cartSubtotal">{`₹${
                    item.price * item.quantity
                  }`}</p>
                </div>
              ))}
          </div> */}
          <div class="bg-white">
            <div class="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
              <h1 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Shopping Cart
              </h1>
              <form class="mt-12 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
                <section aria-labelledby="cart-heading" class="lg:col-span-7">
                  <h2 id="cart-heading" class="sr-only">
                    Items in your shopping cart
                  </h2>

                  <ul
                    role="list"
                    class="border-t border-b border-gray-200 divide-y divide-gray-200"
                  >
                    {cartItems &&
                      cartItems.map((item) => (
                        <li class="flex py-6 sm:py-10">
                          <div class="flex-shrink-0">
                            <img
                              src={item.image}
                              alt="Front of men&amp;#039;s Basic Tee in sienna."
                              class="w-24 h-24 rounded-md object-center object-cover sm:w-48 sm:h-48 "
                            />
                          </div>

                          <div class="ml-4 flex-1 flex flex-col justify-between sm:ml-6">
                            <div class="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                              <div>
                                <div class="flex justify-between">
                                  <h3 class="text-sm">
                                    <a
                                      href="#"
                                      class="font-medium text-gray-700 hover:text-gray-800"
                                    >
                                      {item.name}
                                    </a>
                                  </h3>
                                </div>

                                <p class="mt-1 text-xl font-bold text-gray-900 ">
                                  ₹{item.price}
                                </p>
                              </div>

                              <div class="mt-4 sm:mt-0 sm:pr-9 ">
                                <div class="pr-8 flex ">
                                  <span
                                    onClick={() =>
                                      decreaseQuantity(
                                        item.product,
                                        item.quantity
                                      )
                                    }
                                    class="font-bold cursor-pointer"
                                  >
                                    -
                                  </span>
                                  <input
                                    value={item.quantity}
                                    readOnly
                                    class="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2 "
                                  />
                                  <span
                                    onClick={() =>
                                      increaseQuantity(
                                        item.product,
                                        item.quantity,
                                        item.stock
                                      )
                                    }
                                    class="font-bold cursor-pointer"
                                  >
                                    +
                                  </span>
                                </div>
                                {/* increase decrease counter */}

                                <div class="absolute top-0 right-0">
                                  <button
                                    type="button"
                                    class="-m-2 p-2 inline-flex text-gray-400 hover:text-gray-500"
                                  >
                                    <span class="sr-only">Remove</span>
                                    <svg
                                      class="h-5 w-5"
                                      x-description="Heroicon name: solid/x"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                      aria-hidden="true"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clip-rule="evenodd"
                                      ></path>
                                    </svg>
                                  </button>
                                </div>
                              </div>
                            </div>

                            <p class="mt-4 flex text-sm text-gray-700 space-x-2">
                              <svg
                                class="flex-shrink-0 h-5 w-5 text-green-500"
                                x-description="Heroicon name: solid/check"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                              <span>In stock</span>
                            </p>
                          </div>
                        </li>
                      ))}
                  </ul>
                </section>

                <section
                  aria-labelledby="summary-heading"
                  class="mt-16 bg-gray-50 rounded-lg px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-5"
                >
                  <h2
                    id="summary-heading"
                    class="text-lg font-medium text-gray-900"
                  >
                    Order summary
                  </h2>

                  <dl class="mt-6 space-y-4">
                    <div class="flex items-center justify-between">
                      <dt class="text-sm text-gray-600">Subtotal</dt>
                      <dd class="text-sm font-medium text-gray-900">{`₹${cartItems.reduce(
                        (acc, item) => acc + item.quantity * item.price,
                        0
                      )}`}</dd>
                    </div>
                    <div class="border-t border-gray-200 pt-4 flex items-center justify-between">
                      <dt class="flex items-center text-sm text-gray-600">
                        <span>Shipping Charges</span>
                        <a
                          href="#"
                          class="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500"
                        >
                          <span class="sr-only">
                            Learn more about how shipping is calculated
                          </span>
                          <svg
                            class="h-5 w-5"
                            x-description="Heroicon name: solid/question-mark-circle"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </a>
                      </dt>
                      <div class="text-sm font-medium text-gray-900">
                        ₹{shippingCharges}
                      </div>
                    </div>
                    <div class="border-t border-gray-200 pt-4 flex items-center justify-between">
                      <dt class="flex text-sm text-gray-600">
                        <span>GST</span>
                        <a
                          href="#"
                          class="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500"
                        >
                          <span class="sr-only">
                            Learn more about how GST tax is calculated
                          </span>
                          <svg
                            class="h-5 w-5"
                            x-description="Heroicon name: solid/question-mark-circle"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </a>
                      </dt>
                      <div class="text-sm font-medium text-gray-900">
                        ₹{tax}
                      </div>
                    </div>
                    <div class="border-t border-gray-200 pt-4 flex items-center justify-between">
                      <dt class="text-base font-medium text-gray-900">
                        Order total
                      </dt>
                      <dd class="text-base font-medium text-gray-900">
                        {" "}
                        ₹{totalPrice}
                      </dd>
                    </div>
                  </dl>

                  <div class="mt-6">
                    <button
                      onClick={checkoutHandler}
                      type="submit"
                      class="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                    >
                      Checkout
                    </button>
                  </div>
                </section>
              </form>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Cart;
