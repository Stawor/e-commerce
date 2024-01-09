import React from "react";
import { PrismaClient } from "@prisma/client";
import Card from "./Card";

export default async function FeaturedProducts() {
	const prisma = new PrismaClient();
	const items = await prisma.item.findMany({
		take: 4,
	});

	return (
		<main>
			<h1 className="text-5xl mb-12 ml-10">Feature Products</h1>
			<div
				className="flex justify-around flex-wrap gap-1
      "
			>
				{items.map((item: any, index) => (
					<div key={index} className=" lg:w-1/6 w-[40%]">
						<Card item={item} />
					</div>
				))}
			</div>
		</main>
	);
}
