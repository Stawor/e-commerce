import React from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
	process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

type CartItem = {
	color: string;
	gen: string;
	id: number;
	image: string;
	image2: string;
	name: string;
	price: number;
	quantity: number;
};

export default function PreviewPage({ cartItems }: { cartItems: CartItem[] }) {
	async function onCheckout() {
		const response = await fetch("/api/checkout", {
			method: "POST",
			body: JSON.stringify(cartItems),
		});
		const data = await response.json();
		window.location = data.url;
	}

	return (
		<button
			className="bg-black text-white w-5/6 p-4 text-xl font-bold"
			onClick={onCheckout}
		>
			Checkout
		</button>
	);
}
