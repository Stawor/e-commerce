import React, { use, useState } from "react";
import Items from "./api/route";
import Input from "./input";

export default function Page({ params }: { params: { id: string } }) {
	return (
		<main className=" flex">
			<div className=" w-1/6 flex flex-col gap-8 items-center m-2">
				<section className="flex flex-col gap-2">
					<h1>Product Categories</h1>
					<div>
						<input type="checkbox" name="hat" />
						<label htmlFor="hat">Hat</label>
					</div>
					<div>
						<input type="checkbox" name="hat" />
						<label htmlFor="hat">t-shirt</label>
					</div>
					<div>
						<input type="checkbox" name="hat" />
						<label htmlFor="hat">trausers</label>
					</div>
					<div>
						<input type="checkbox" name="hat" />
						<label htmlFor="hat">boots</label>
					</div>
					<div>
						<input type="checkbox" name="hat" />
						<label htmlFor="hat">shirt</label>
					</div>
				</section>
				<section>
					<h1>Filtered by price</h1>
					<label htmlFor="price">0</label>
					<Input />
				</section>
				<section>
					<fieldset>
						<legend>Sort by</legend>
						<div>
							<input type="radio" name="priceLow" />
							<label htmlFor="priceLow">Price (Lowest first)</label>
						</div>
						<div>
							<input type="radio" name="priceHigh" />
							<label htmlFor="priceHigh">Price (Highest first)</label>
						</div>
					</fieldset>
				</section>
			</div>
			<div className="flex flex-row gap-6 justify-center items-center w-full">
				<Items />
			</div>
		</main>
	);
}
