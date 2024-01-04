import React from "react";

export default function Footer() {
	const categories = ["Women", "Men", "Shoes", "Accessories", "New Arrivals"];
	const links = ["FAQ", "Pages", "Stores", "Compare", "Cookies"];

	return (
		<footer className="flex gap-10 w-full">
			<section className="w-1/2 flex justify-around">
				<nav>
					<h1>Categories</h1>
					{categories.map((category, index) => (
						<div key={index}>{category}</div>
					))}
				</nav>
				<nav>
					<h1>Links</h1>
					{links.map((link, index) => (
						<div key={index}>{link}</div>
					))}
				</nav>
			</section>
			<section className="w-1/2 flex justify-center items-center">
				<hr className="border border-black" />
				<div className="lg:w-1/2">
					<h1>Contact</h1>
					<p>
						Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
						eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
						amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
						ut labore etdolore.
					</p>
				</div>
			</section>
		</footer>
	);
}
