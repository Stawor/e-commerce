"use client";
import { ChangeEvent, useEffect, useState } from "react";
import { useCart } from "../../context/ShoppingCartContext";
import { Cookies } from "react-cookie";
import Checkout from "@/components/Checkout";
import Image from "next/image";
import Link from "next/link";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

const cookies = new Cookies();
export default function Cart() {
	const { cart, removeFromCart } = useCart();
	const [cartItems, setCartItems] = useState([]);

	useEffect(() => {
		setCartItems(cookies.get("cart"));
	}, [cart]);

	function handleQuantityChange(
		id: number,
		event: ChangeEvent<HTMLInputElement>
	) {
		const newQuantity = parseInt(event.target.value);
		const updatedCartItems = cartItems.map((item) =>
			item.id === id ? { ...item, quantity: newQuantity } : item
		);

		setCartItems(updatedCartItems);
		cookies.set("cart", updatedCartItems, { path: "/" });
	}
	console.log(cartItems);
	const handleRemoveFromCart = (id: number) => {
		// Remove from cart state
		removeFromCart(id);

		// Remove from cookies
		const updatedCartItems = cartItems.filter((item) => item.id !== id);
		setCartItems(updatedCartItems);
		cookies.set("cart", updatedCartItems, { path: "/" });
	};

	function PriceTotal() {
		let totalPrice = 0;
		cartItems.forEach((item) => {
			totalPrice += item.price * Number(item.quantity);
		});
		return <h1 className="text-4xl">Total: {totalPrice}$</h1>;
	}

	return (
		<div className=" flex flex-col lg:flex-row gap-6 lg:justify-around m-16 ">
			<div className="flex flex-col items-center lg:w-2/3 gap-10 ">
				{cartItems.length === 0 && (
					<h1 className="text-3xl">Your Cart is empty</h1>
				)}
				{cartItems.map((item) => (
					<div
						key={item.id}
						className=" flex flex-col lg:flex-row gap-10 w-full items-center justify-center "
					>
						<div className="w-36 h-48 relative ">
							<Link href={`products/${item.id}`}>
								<Image src={item.image} fill={true} alt={""}></Image>
							</Link>
						</div>
						<div className=" flex items-center gap-8 flex-shrink-0 ">
							<p className=" text-xl font-bold">{item.name}</p>
							<input
								type="number"
								min={1}
								max={10}
								value={item.quantity}
								onChange={(event) => handleQuantityChange(item.id, event)}
								className="border text-center  w-14"
							/>

							<p className="text-lg">{item.price}$</p>
							<button onClick={() => handleRemoveFromCart(item.id)}>
								<span className="font-bold">Remove </span>
								<DeleteForeverOutlinedIcon />
							</button>
						</div>
					</div>
				))}
			</div>
			<div className="flex flex-col justify-around items-center lg:w-1/3  border-l px-2 h-[40vw]  bg-slate-200">
				<PriceTotal />
				<Checkout cartItems={cartItems} />
			</div>
		</div>
	);
}
