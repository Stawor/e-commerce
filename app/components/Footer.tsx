import React from "react";

export default function Footer() {
	return (
		<div className=" flex gap-10 w-full">
			<div className=" w-1/2 flex justify-around">
				<div className="">
					<h1>Categories</h1>
					<div>Women</div>
					<div>Men</div>
					<div>Shoes</div>
					<div>Accessories</div>
					<div>New Arrivals</div>
				</div>
				<div>
					<h1>Links</h1>
					<div>FAQ</div>
					<div>Pages</div>
					<div>Stores</div>
					<div>Compare</div>
					<div>Cookies</div>
				</div>
			</div>
			<div className=" w-1/2 flex  justify-center items-center">
				<div className=" lg:w-1/2">
					<h1>Contact</h1>
					Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
					eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
					amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt ut
					labore etdolore.
				</div>
			</div>
		</div>
	);
}
