import React from "react";
import Prisma from "@/app/components/prisma";
export default function page() {
	return (
		<div>
			<div className="flex justify-center items-center h-screen">
				<Prisma />
			</div>
		</div>
	);
}
