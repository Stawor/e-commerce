import React from "react";
import { PrismaClient } from "@prisma/client";

export default async function page() {
	"use server";

	async function items(formData: FormData | any) {
		"use server";
		const prisma = new PrismaClient();
		const name: string = formData.get("name");
		const image = formData.get("image");
		const image2 = formData.get("image2");
		const price = formData.get("price");
		const gen = formData.get("gen");
		const color = formData.get("color");

		await prisma.item.create({
			data: {
				name: name,
				image: image,
				price: parseFloat(price),
				gen: gen,
				color: color,
				image2: image2!,
			},
		});
	}
	return (
		<div>
			<div className="flex justify-center items-center h-screen">
				<div className=" border border-slate-400 flex flex-col gap-10 p-20 rounded-xl">
					<form action={items} className=" flex flex-col gap-10">
						<h1>Add New Product</h1>
						<div className=" flex flex-col gap-2">
							<label htmlFor="name">Name: </label>
							<input
								placeholder="t-shirt"
								type="text"
								name="name"
								className="border border-slate-400 p-1"
							/>
						</div>
						<div className=" flex flex-col gap-2">
							<label htmlFor="image">Image: </label>
							<input
								placeholder="pexels.com/image"
								type="text"
								name="image"
								className="border border-slate-400 p-1"
							/>
						</div>
						<div className=" flex flex-col gap-2">
							<label htmlFor="image2">Image2: </label>
							<input
								placeholder="pexels.com/image"
								type="text"
								name="image2"
								className="border border-slate-400 p-1"
							/>
						</div>
						<div className=" flex flex-col gap-2">
							<label htmlFor="price">Price: </label>
							<input
								placeholder="12.99"
								type="number"
								name="price"
								className="border border-slate-400 p-1"
							/>
						</div>
						<div className=" flex flex-col gap-2">
							<label htmlFor="price">Gender: </label>
							<input
								placeholder="m||f"
								type="text"
								name="gen"
								className="border border-slate-400 p-1"
							/>
						</div>
						<div className=" flex flex-col gap-2">
							<label htmlFor="price">Color: </label>
							<input
								placeholder="white,black,etc."
								type="text"
								name="color"
								className="border border-slate-400 p-1"
							/>
						</div>
						<button className="bg-black text-white p-2 hover:bg-slate-200">
							Submit
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
