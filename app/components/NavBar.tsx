import Link from "next/link";
import React from "react";

export default function NavBar() {
	return (
		<nav className=" flex justify-between p-4">
			<div className=" flex gap-4">
				<Link href="/">Woman</Link>
				<Link href="/">Man</Link>
				<Link href="/">Children</Link>
			</div>

			<div>
				<h1>E-STORE</h1>
			</div>
			<div>
				<div className=" flex gap-4">
					<Link href="/">Home</Link>
					<Link href="/">About</Link>
					<Link href="/">Contact</Link>
					<Link href="/">Stores</Link>
				</div>
			</div>
		</nav>
	);
}
