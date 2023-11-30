import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export default async function Prisma() {
	const items = await prisma.item.findMany();

	return <>{items.map((item) => item.name)}</>;
}
