"use client";
import { useCart } from "@/context/ShoppingCartContext";
import React, { useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

export default function AddToCartButton({ item }) {
	const { addToCart, message, display, setDisplay, cart } = useCart();

	useEffect(() => {
		const timer = setTimeout(() => {
			setDisplay("hidden");
		}, 3000);
		return () => {
			clearTimeout(timer);
		};
	}, [cart]);

	return (
		<>
			<div
				className={`absolute top-16 right-0 transform p-3 px-6 border border-black bg-green-500 text-black ${display} flex gap-2`}
			>
				<TaskAltIcon />
				{message}
				<span
					className=" text-black cursor-pointer w-6 h-6 flex justify-center items-center hover:bg-green-400 "
					onClick={() => setDisplay("hidden")}
				>
					<CloseIcon />
				</span>
			</div>
			<div
				onClick={() => addToCart(item)}
				className=" bg-black text-white flex  justify-center p-4 cursor-pointer w-3/4 font-bold text-xl"
			>
				<button>Add to Cart</button>
			</div>
		</>
	);
}
