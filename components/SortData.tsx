import { Key } from "react";
import Card from "./Card";

export default async function Data({
	searchParams,
	items,
}: {
	searchParams: { query: string; value: string };
	items: any;
}) {
	let sortedData = await items;
	if (searchParams.query) {
		sortedData = sortedData.filter(
			(item: { name: string }) => item.name === searchParams.query
		);
	}

	if (searchParams.value === "lth") {
		sortedData = sortedData.sort(
			(a: { price: number }, b: { price: number }) => a.price - b.price
		);
	} else if (searchParams.value === "htl") {
		sortedData = sortedData.sort(
			(a: { price: number }, b: { price: number }) => b.price - a.price
		);
	}

	const cardComponents = sortedData.map(
		(item: any, index: Key | null | undefined) => (
			<div key={index} className="w-1/3 lg:w-1/5">
				<Card item={item} />
			</div>
		)
	);

	return cardComponents;
}
