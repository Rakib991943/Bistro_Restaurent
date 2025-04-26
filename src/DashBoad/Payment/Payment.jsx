import React from 'react';
import SectionTitle from '../../Components/SectionTitle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutForm from './CheckOutForm';

const Payment = () => {
  const payment = loadStripe(import.meta.env.VITE_pkKey);
  return (
    <div>
      {/* <h1>This is Payment Method </h1> */}
      <SectionTitle
        heading="Payment"
        subHeading="Please Pay to eat "
      >

      </SectionTitle>

      <div>

        <Elements stripe={payment}>
          <CheckOutForm></CheckOutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;