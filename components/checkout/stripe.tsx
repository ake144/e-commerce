'use client'

import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import convertToSubcurrency from '@/lib/convertToSubcurrency';
import CheckoutForm from './checkoutForm';

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY===undefined) {
    throw new Error('Stripe public key is missing');

}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

const Stripe = ({amount}:{amount:number}) => {

    return (
        <main className="max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md 
         bg-gradient-to-r from-blue-500 to-blue-700 shadow-lg">

              <div className='mb-10'>
                    <h1 className='text-3xl font-bold'>Stripe Checkout</h1>
                    <p className='text-lg'>Securely pay for your order</p>
              </div>
            <Elements stripe={stripePromise}  
            options={{
                mode: 'payment',
                amount: convertToSubcurrency(amount),
                currency: 'usd',
                    fonts: [
                        {
                            cssSrc: 'https://fonts.googleapis.com/css?family=Roboto',
                        },
                    ],
                    locale: 'auto',
            }}>
                <CheckoutForm amount={amount} />
            </Elements>
        </main>
    )
}


export default Stripe;
