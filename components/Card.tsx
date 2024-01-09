import Link from "next/link";
import React from "react";
import Image from "next/image";

type CartItem = {
	color: string;
	gen: string;
	id: number;
	image: string;
	image2: string;
	name: string;
	price: number;
	quantity: number;
};
export default function Card({ item }: { item: CartItem }) {
	return (
		<Link href={`/products/${item.id}`}>
			<div>
				<div
					id="shadow"
					className=" relative overflow-hidden border border-black w-full lg:h-[25vw] h-[50vw] shadow-2xl"
				>
					<Image
						src={item.image}
						alt={"MainImage"}
						fill={true}
						sizes="100vw"
						className="absoulte z-30 hover:opacity-0"
					></Image>
					<Image
						src={item.image2}
						alt={"SecondImage"}
						fill={true}
						sizes="50vw"
						className="absolute z-20"
					></Image>
				</div>
				<h2>{item.name}</h2>
				<h3>Price: {item.price}$</h3>
			</div>
		</Link>
	);
}
