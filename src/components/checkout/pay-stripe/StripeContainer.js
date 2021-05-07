import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = 'pk_test_51HvQ0iCWoh7chuJQPuNZ9SuXiqtjMt8kgo1ktMV5gyMWXAsSB1q52kwxJriq92fjJJOhxHUz44EtlsZrtpFlnPFo00sDExbOqD'

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer({priceTotal, cart}) {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm cart={cart} priceTotal={priceTotal} />
		</Elements>
	)
}
