import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';



const CheckOutForm = () => {
  const [error, setError] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    })

    if (error) {
      setError(error.message);
    }
    else {
      console.log("PayMentMethod", paymentMethod);
      setError("");
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit} >
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className='btn btn-primary' type="submit" disabled={!stripe}>
          Pay
        </button>
        <p className='text-xl text-red-600 mt-3'>{error}</p>
      </form>
    </div>
  );
};

export default CheckOutForm;