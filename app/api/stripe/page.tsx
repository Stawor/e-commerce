import React from "react";

export default async function page() {
	const stripe = require("stripe")(process.env.NEXT_STRIPE_SECRET_KEY);
	const prices = await stripe.prices.list();

	const product = await stripe.products.retrieve("prod_PBDXxpcqSl0Xui");
	console.log(product);
	// console.log(prices);
	// const paymentLink = await stripe.paymentLinks.create({
	// 	line_items: [
	// 		{
	// 			price: "{{PRICE_ID}}",
	// 			quantity: 1,
	// 		},
	// 	],
	// });

	const paymentLinks = await stripe.paymentLinks.list({
		limit: 3,
	});
	console.log(paymentLinks);
	return <div>page</div>;
}
