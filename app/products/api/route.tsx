import React from "react";
import { PrismaClient } from "@prisma/client";
import Card from "@/app/components/Card";

export default async function Items() {
	const prisma = new PrismaClient();
	const Items = await prisma.item.findMany();
	return (
		<>
			{Items.map((item) => (
				<Card item={item} />
			))}
		</>
	);
}
