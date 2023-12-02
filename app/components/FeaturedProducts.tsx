import React from "react";
import { PrismaClient } from "@prisma/client";
import Card from "./Card";

export default async function FeaturedProducts() {
	const prisma = new PrismaClient();
	const Items = await prisma.item.findMany({
		take: 4,
	});

	return (
		<main>
			<div className="flex justify-around items-center">
				<h1 className="text-5xl">Feature Products</h1>
				<p className=" w-1/4">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
					molestias praesentium accusantium? Culpa, cum reprehenderit reiciendis
					est, soluta repellat explicabo ullam neque vitae labore quisquam,
					dignissimos ex sapiente amet nisi.
				</p>
			</div>
			<div className="flex justify-around">
				{Items.map((item) => (
					<Card item={item} />
				))}
			</div>
		</main>
	);
}
