"use client";
import React, { useState } from "react";
import {
	useParams,
	usePathname,
	useRouter,
	useSearchParams,
} from "next/navigation";

export default function input() {
	const params = useParams();
	const [price, setPrice] = useState(null);
	const searchParams = useSearchParams();
	const { replace } = useRouter();
	const [isChecked, setIsChecked] = useState(false);
	const pathname = usePathname();

	function handleChange(name) {
		const params = new URLSearchParams(searchParams);

		if (!isChecked) {
			setIsChecked(true);
			params.set("query", name);
		} else {
			setIsChecked(false);
			params.delete("query");
		}
		replace(`${pathname}?${params.toString()}`);
	}

	function handleSelect(value) {
		const params = new URLSearchParams(searchParams);
		params.set("value", value);
		setPrice(value);
		replace(`${pathname}?${params.toString()}`);
	}
	return (
		<>
			<div className=" w-1/6 flex flex-col gap-8 items-center m-2">
				<section className="flex flex-col gap-2">
					<h1>Product Categories</h1>
					<div>
						<input
							type="checkbox"
							name="shirt"
							onChange={(e) => {
								handleChange(e.target.name);
							}}
						/>
						<label htmlFor="hat">shirt</label>
					</div>
					<div>
						<input
							type="checkbox"
							name="t-shirt"
							onChange={(e) => {
								handleChange(e.target.name);
							}}
						/>
						<label htmlFor="hat">t-shirt</label>
					</div>
					<div>
						<input
							type="checkbox"
							name="trausers"
							onChange={(e) => {
								handleChange(e.target.name);
							}}
						/>
						<label htmlFor="hat">trausers</label>
					</div>
					<div>
						<input
							type="checkbox"
							name="boots"
							onChange={(e) => {
								handleChange(e.target.name);
							}}
						/>
						<label htmlFor="hat">boots</label>
					</div>
				</section>
				<section className=" flex flex-col">
					<label htmlFor="price">Sort by price</label>
					<select
						onChange={(e) => {
							handleSelect(e.target.value);
						}}
						name="price"
						id="price"
					>
						<option value="default">Default sort</option>
						<option value="lth">Low to High</option>
						<option value="htl">High to Low</option>
					</select>
				</section>
			</div>
		</>
	);
}
