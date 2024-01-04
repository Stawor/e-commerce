import { notFound } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";
import React from "react";
import { PrismaClient } from "@prisma/client";
import Card from "@/components/Card";

export const GET = async (request: NextRequest) => {
	const prisma = new PrismaClient();
	const items = await prisma.item.findMany();

	return NextResponse.json(items);
};
