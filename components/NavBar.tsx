"use client";
import { useState } from "react";
import Link from "next/link";
import CartIcon from "./CartIcon";
import LoginButton from "./LoginButton";
import DrawerMenu from "./DrawerMenu";

export default function NavBar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="flex items-center justify-between h-16 relative px-6 bg-black text-white">
			<div className={`hidden lg:flex gap-4 `}>
				<Link href="/products/women">Women</Link>
				<Link href="/products/men">Men</Link>
				<Link href="/products">Products</Link>
			</div>
			<div className="flex items-center gap-4 w-full lg:w-fit justify-around">
				<Link href="/">
					<h1>E-STORE</h1>
				</Link>
				<div className="lg:hidden flex ">
					<DrawerMenu />
				</div>
			</div>
			<button onClick={() => setIsOpen(!isOpen)} className="lg:hidden"></button>
			<div className={`hidden gap-4  lg:flex`}>
				<div className="flex gap-4">
					<LoginButton />
				</div>
				<div>
					<CartIcon />
				</div>
			</div>
		</nav>
	);
}
