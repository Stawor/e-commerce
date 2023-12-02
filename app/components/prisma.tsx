import { PrismaClient } from "@prisma/client";
import Image from "next/image";

const prisma = new PrismaClient();
export default async function Prisma() {
	"use server";

	async function items(formData) {
		"use server";

		const name = formData.get("name");
		const image = formData.get("image");
		const image2 = formData.get("image2");
		const price = formData.get("price");

		const sendIstems = await prisma.item.create({
			data: {
				name: name,
				image: image,
				image2: image2,
				price: price,
			},
		});
	}

	return (
		<div className="h-1/2 border border-black flex flex-col">
			<form action={items} className="">
				<h1>Add New Product</h1>
				<label htmlFor="name">Name: </label>
				<input
					placeholder="t-shirt"
					type="text"
					name="name"
					className="border border-black"
				/>
				<label htmlFor="image">ImageURL: </label>
				<input
					placeholder="pexels.com/image"
					type="text"
					name="image"
					className="border border-black "
				/>
				<label htmlFor="image2">ImageURL: </label>
				<input
					placeholder="pexels.com/image"
					type="text"
					name="image2"
					className="border border-black "
				/>
				<label htmlFor="price">Price: </label>
				<input
					placeholder="12.99"
					type="text"
					name="price"
					className="border border-black "
				/>
				<button>Submit</button>
			</form>
		</div>
	);
}
