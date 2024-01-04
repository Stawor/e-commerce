import { useCart } from "@/context/ShoppingCartContext";
import React from "react";

export default function RemoveCartButton() {
	const { cart, addToCart, removeFromCart } = useCart();
	return (
		<div>
			{cart.map((item) => (
				<li key={item.id}>
					{item.id}
					<button onClick={() => removeFromCart(item.id)}>Remove</button>
				</li>
			))}
		</div>
	);
}
