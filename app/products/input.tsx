"use client";
import React, { useState } from "react";
export default function input() {
	const [maxPrice, setMaxPrice] = useState(1000);
	return (
		<>
			<input
				type="range"
				name="price"
				min={0}
				max={1000}
				onChange={(e) => setMaxPrice(e.target.value)}
			/>
			<span>{maxPrice}</span>
		</>
	);
}
