import React from 'react'

import { Elements } from "@stripe/react-stripe-js";
import stripePromise from "../../assets/service/stripeService";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";

const CheckoutPage = () => {
  return (
    <div className="container mt-4">
    <Elements stripe={stripePromise}>
      <h2>Página de Pagamento</h2>
      <CheckoutForm />
    </Elements>
    </div>
  );
};

export default CheckoutPage;