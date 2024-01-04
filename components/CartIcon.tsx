"use client";
import React, { use, useEffect, useState } from "react";
import { useCart } from "@/context/ShoppingCartContext";
import Link from "next/link";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Cookies } from "react-cookie";

export default function CartIcon() {
	const cookies = new Cookies();
	const { cart } = useCart();
	const [cookie, setCookie] = useState([]);

	useEffect(() => {
		setCookie(cookies.get("cart"));
	}, [cart]);

	return (
		<div className=" flex items-center">
			<Link href="/cart">
				<ShoppingCartOutlinedIcon />
			</Link>
			<span>{cart.length === 0 ? cookie.length : cart.length}</span>
		</div>
	);
}
