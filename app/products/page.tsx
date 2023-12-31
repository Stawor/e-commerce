import React from "react";
import Items from "../api/route1";
import { auth } from "../auth";
import SortData from "@/components/SortData";
import CategoryBar from "@/components/CategoryBar";

const items = Items();

export default async function Page({
	searchParams,
}: {
	searchParams?: {
		query?: string;
		value?: string;
	};
}) {
	const session = await auth();

	return (
		<main className=" flex mt-12">
			<CategoryBar />
			<div className="flex flex-row gap-6 justify-center items-center flex-wrap w-full">
				<SortData searchParams={searchParams} items={items} />
			</div>
		</main>
	);
}
