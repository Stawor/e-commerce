"use client";
import React, { use, useEffect, useState } from "react";
import { useCart } from "@/context/ShoppingCartContext";
import Link from "next/link";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

export default function CartIcon() {
	const { cookie } = useCart();

	if (cookie == undefined) {
		return (
			<div className=" flex items-center">
				<Link href="/cart">
					<ShoppingCartOutlinedIcon />
				</Link>
				<span>0</span>
			</div>
		);
	}
	return (
		<div className=" flex items-center">
			<Link href="/cart">
				<ShoppingCartOutlinedIcon />
			</Link>
			<span>{cookie.length}</span>
		</div>
	);
}
