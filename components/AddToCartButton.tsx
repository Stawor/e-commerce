"use client";
import { useCart } from "@/context/ShoppingCartContext";
import React, { useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

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

export default function AddToCartButton({ item }: { item: CartItem }) {
	const { addToCart, message, display, setDisplay } = useCart();

	useEffect(() => {
		setTimeout(() => {
			setDisplay("hidden");
		}, 3000);
	}, []);

	return (
		<>
			<div
				className={`absolute top-[6%] right-0 transform p-3 px-6 border border-black bg-green-500 text-black ${display} flex gap-2`}
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
				className=" bg-black text-white flex justify-center p-4 cursor-pointer w-3/4 font-bold text-xl"
			>
				<button>Add to Cart</button>
			</div>
		</>
	);
}
