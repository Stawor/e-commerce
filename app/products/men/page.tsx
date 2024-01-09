import { PrismaClient } from "@prisma/client";
import React from "react";
import CategoryBar from "@/components/CategoryBar";
import SortData from "@/components/SortData";

export default async function MenProducts({
	searchParams,
}: {
	searchParams: {
		query: string;
		value: string;
	};
}) {
	const prisma = new PrismaClient();
	const items = await prisma.item.findMany({
		where: {
			gen: "m",
		},
	});

	return (
		<main className=" flex mt-12">
			<CategoryBar />
			<div className="flex flex-row gap-6 justify-center items-center flex-wrap w-full">
				<SortData searchParams={searchParams} items={items} />
			</div>
		</main>
	);
}
