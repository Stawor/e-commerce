import Card from "./Card";

export default async function Data({ searchParams, items }) {
	let sortedData = await items;
	let data = sortedData.map((item) => (
		<div className=" w-1/3 lg:w-1/5">
			<Card item={item} />
		</div>
	));

	if (searchParams.query) {
		sortedData = (await items).filter(
			(item) => item.name == searchParams.query
		);
		data = sortedData.map((item) => (
			<div className=" w-1/5">
				<Card item={item} />
			</div>
		));
	}
	if (searchParams.value == "lth") {
		console.log(sortedData);
		data = [...sortedData].sort((a, b) => a.price - b.price);
		data = data.map((item) => (
			<div className=" w-1/5 ">
				<Card item={item} />
			</div>
		));
	} else if (searchParams.value == "htl") {
		data = [...sortedData].sort((a, b) => b.price - a.price);
		data = data.map((item) => (
			<div className=" w-1/5">
				<Card item={item} />
			</div>
		));
	}
	return data;
}
