"use client";
import { useCart } from "@/context/ShoppingCartContext";
import React from "react";

export default function AddToCartButton({ item }) {
	const { addToCart } = useCart();

	return (
		<div
			onClick={() => addToCart(item)}
			className=" bg-black text-white flex justify-center p-4 cursor-pointer w-3/4 font-bold text-xl"
		>
			<button>Add to Cart</button>
		</div>
	);
}
