import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ booking }) => {
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [loading, setLoading] = useState(false);

    const stripe = useStripe();
    const element = useElements();
    const { price, email, patient, _id } = booking;

    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => {
                setClientSecret(data.clientSecret);
            });
    }, [price]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!element || !stripe) {
            return;
        }

        const card = element.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log(error);
            setCardError(error.message);
        } else {
            setCardError('');
        }

        setSuccess('');
        setLoading(true);
        const { paymentIntent, error: confirmError } =
            await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patient,
                        email: email,
                    },
                },
            });

        if (confirmError) {
            setCardError(confirmError.message);
            return;
        }

        if (paymentIntent.status === 'succeeded') {
            setSuccess('Payment Successful');
            setTransactionId(paymentIntent.id);

            // store payment info in database
            const payment = {
                price,
                transactionId: paymentIntent.transactionId,
                email,
                bookingId: _id,
            };
            fetch('http://localhost:5000/payments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem(
                        'accessToken'
                    )}`,
                },
                body: JSON.stringify(payment),
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.insertedId) {
                        setSuccess('Payment Successful');
                        setTransactionId(paymentIntent.id);
                    }
                });
        }
        setLoading(false);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
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
                <button
                    className="btn btn-primary  btn-sm mt-10 text-white"
                    type="submit"
                    disabled={
                        !stripe || !clientSecret || loading || transactionId
                    }
                >
                    Pay
                </button>
            </form>
            {cardError && (
                <p className="text-red-500 font-semibold mt-5">{cardError}</p>
            )}
            {success && (
                <div className="mt-5 font-semibold">
                    <p className="text-green-500">{success}</p>
                    <p>
                        Your transaction Id:{' '}
                        <span className="font-bold">{transactionId}</span>
                    </p>
                </div>
            )}
        </>
    );
};

export default CheckoutForm;
