import React, { Fragment, useEffect, useRef, useState } from "react";
import CheckoutSteps from "../Cart/CheckoutSteps.js";
import { useSelector, useDispatch } from "react-redux";
import MetaData from "../layout/Metadata";
import { Typography } from "@material-ui/core";
import { useAlert } from "react-alert";
import { loadStripe } from "@stripe/stripe-js";
import StripeForm from "./StripeForm.js";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";

import axios from "axios";
import "./payment.css";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import EventIcon from "@material-ui/icons/Event";
import VpnKeyIcon from "@material-ui/icons/VpnKey";

function Payment() {
  const [stripeApiKey, setStripeApiKey] = useState("");

  const stripeTestPromise = loadStripe(
    "pk_test_51LGAEgSAdppvyPLENKFaw2AztvZJHCLVNzMZmvYdDhmNYvCnXZWgjR6u6j8o1OSjkElo1Arr63O7x3Hh5pzV5zZa00VPSzjZC8"
  );

  return (
    <Fragment>
      <MetaData title="Payment" />
      <CheckoutSteps activeStep={2} />
      <div>
        <Elements stripe={stripeTestPromise}>
          <StripeForm />
        </Elements>
      </div>
    </Fragment>
  );
}

export default Payment;
