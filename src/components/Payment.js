import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useNavigation } from 'react-day-picker';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_stripe_public_key);

const Payment = () => {
    const data = useLoaderData();
    // const navigation = useNavigation();
    const { treatment, price, appointmentDate, slot } = data;

    // if (navigation.state === 'loading') {
    //     return (
    //         <div className="flex items-center justify-center h-96">
    //             <progress className="w-56 progress progress-primary"></progress>
    //         </div>
    //     );
    // }

    return (
        <div className="px-10 py-10 lg:py-14">
            <h1 className="mb-10 text-2xl text-neutral">
                Payment for
                {treatment}
            </h1>
            <p className="text-xl">
                Please pay <strong>${price}</strong> for your appointment on{' '}
                {appointmentDate} at {slot}
            </p>
            <div className="my-14 w-96 bg-gray-100 p-5 rounded-lg shadow-md">
                <Elements stripe={stripePromise}>
                    <CheckoutForm booking={data} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;
