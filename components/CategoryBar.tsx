"use client";
import React, { useState } from "react";
import {
	useParams,
	usePathname,
	useRouter,
	useSearchParams,
} from "next/navigation";

export default function Products() {
	const params = useParams();
	const [price, setPrice] = useState("");
	const searchParams = useSearchParams();
	const { replace } = useRouter();

	const pathname = usePathname();

	function handleChange(name: string) {
		const params = new URLSearchParams(searchParams);
		if (name === "all") {
			replace(`${pathname}`);
		} else {
			params.set("query", name);

			replace(`${pathname}?${params.toString()}`);
		}
	}

	function handleSelect(value: string) {
		const params = new URLSearchParams(searchParams);
		params.set("value", value);
		setPrice(value);
		replace(`${pathname}?${params.toString()}`);
	}
	return (
		<>
			<div className=" hidden lg:flex flex-col gap-8 lg:w-1/5 ">
				<section className="flex flex-col gap-4 items-center">
					<div className="flex flex-col gap-4 text-lg items">
						<h1 className="text-xl">Categories</h1>
						<p
							className="cursor-pointer hover:text-slate-500 hover:underline"
							id="all"
							onClick={(e: React.MouseEvent<HTMLFormElement> | any) => {
								handleChange(e.target.id);
							}}
						>
							All
						</p>
						<p
							className="cursor-pointer hover:text-slate-500 hover:underline"
							id="shirt"
							onClick={(e: React.MouseEvent<HTMLFormElement> | any) => {
								handleChange(e.target.id);
							}}
						>
							Shirts
						</p>
						<p
							className="cursor-pointer hover:text-slate-500 hover:underline"
							id="t-shirt"
							onClick={(e: React.MouseEvent<HTMLFormElement> | any) => {
								handleChange(e.target.id);
							}}
						>
							T-shirts
						</p>
						<p
							className="cursor-pointer hover:text-slate-500 hover:underline"
							id="trousers"
							onClick={(e: React.MouseEvent<HTMLFormElement> | any) => {
								handleChange(e.target.id);
							}}
						>
							Trousers
						</p>
						<p
							className="cursor-pointer hover:text-slate-500 hover:underline"
							id="boots"
							onClick={(e: React.MouseEvent<HTMLFormElement> | any) => {
								handleChange(e.target.id);
							}}
						>
							Boots
						</p>
					</div>
				</section>
				<section className=" flex flex-col items-center">
					<label className="underline" htmlFor="price">
						Sort by price
					</label>
					<select
						onChange={(e) => {
							handleSelect(e.target.value);
						}}
						name="price"
						id="price"
						className="border border-gray-300 rounded-md p-1"
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
