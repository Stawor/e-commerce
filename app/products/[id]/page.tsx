import React from "react";
import { PrismaClient } from "@prisma/client";
import Image from "next/image";
import AddToCartButton from "@/components/AddToCartButton";

export default async function Page({ params }: { params: { id: any } }) {
	const prisma = new PrismaClient();
	const item = await prisma.item.findUnique({
		where: {
			id: parseInt(params.id),
		},
	});

	return (
		<div className=" flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-48 mt-24">
			<div className=" flex justify-center lg:items-center">
				<Image src={item?.image} alt={""} width={384} height={575}></Image>
			</div>
			<div className="flex flex-col gap-10 items-center justify-center bg-slate-300 h-[575px] w-96">
				<h1 className="capitalize text-4xl">{item.name}</h1>
				<p className=" text-2xl ">{item.price}$</p>
				<AddToCartButton item={item} />
			</div>
		</div>
	);
}
