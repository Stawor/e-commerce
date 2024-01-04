import React from "react";
import { PrismaClient } from "@prisma/client";


export default async function Items() {
	const prisma = new PrismaClient();
	const items = await prisma.item.findMany();

	return items;
}
