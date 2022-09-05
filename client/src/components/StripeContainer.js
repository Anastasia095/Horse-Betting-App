import React from 'react';
import { Elements } from "@strip/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"

const PUBLIC_KEY = "pk_test_51LeOcxHKuC9rfCQDnjk3AtrdM8uJa5Aiqh0IdrArpPTgskuQgPH26o3jB5amJFHRiV7rtyzhSnWUsPgqmvnsQVXD000srH70Al" 

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
    return (
        <Elements stripe={stripeTestPromise}>
            <PaymentForm />
        </Elements>
    )
}