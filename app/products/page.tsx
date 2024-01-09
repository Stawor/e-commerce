import React from "react";
import { auth } from "../auth";
import SortData from "@/components/SortData";
import CategoryBar from "@/components/CategoryBar";

import { PrismaClient } from "@prisma/client";

async function getItems() {
	const prisma = new PrismaClient();
	const items = await prisma.item.findMany();

	return items;
}

export default async function Page({
	searchParams,
}: {
	searchParams: {
		query: string;
		value: string;
	};
}) {
	const session = await auth();
	const items = await getItems();
	return (
		<main className=" flex mt-12">
			<CategoryBar />
			<div className="flex flex-row gap-6 justify-center items-center flex-wrap w-full">
				<SortData searchParams={searchParams} items={items} />
			</div>
		</main>
	);
}
