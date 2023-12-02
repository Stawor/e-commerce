import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Card({ item }) {
	console.log(item);
	return (
		<Link href={`/products/${item.id}`}>
			<div>
				<div className=" relative overflow-hidden border border-black w-52 h-80">
					<Image
						src={item.image}
						alt={"MainImage"}
						fill={true}
						className="absoulte z-30 hover:opacity-0"
					></Image>
					<Image
						src={item.image2}
						alt={"SecondImage"}
						fill={true}
						className="absolute z-20"
					></Image>
				</div>
				<h2>{item.name}</h2>
				<h3>Price :{item.price}</h3>
			</div>
		</Link>
	);
}
