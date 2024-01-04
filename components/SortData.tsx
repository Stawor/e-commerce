import Card from "./Card";

export default async function Data({ searchParams, items }) {
	let sortedData = await items;
	if (searchParams.query) {
		sortedData = sortedData.filter((item) => item.name === searchParams.query);
	}

	if (searchParams.value === "lth") {
		sortedData = sortedData.sort((a, b) => a.price - b.price);
	} else if (searchParams.value === "htl") {
		sortedData = sortedData.sort((a, b) => b.price - a.price);
	}

	const cardComponents = sortedData.map((item, index) => (
		<div key={index} className=" w-1/5">
			<Card item={item} />
		</div>
	));

	return cardComponents;
}
