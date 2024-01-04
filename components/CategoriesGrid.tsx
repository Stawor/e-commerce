import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function CategoriesGrid() {
	return (
		<div className="grid grid-cols-4 gap-4 h-[50vw]">
			<div className=" relative">
				<Image
					src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600"
					alt="grid-image"
					fill={true}
					sizes="50vw"
				/>
				<Link href={"http://localhost:3000/products?query=trausers"}>
					<h1 className="text-[4vw] text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
						TRAUSERS
					</h1>
				</Link>
			</div>
			<div className=" row-span-2 relative">
				<Image
					src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600"
					alt="grid-image"
					fill={true}
					sizes="50vw"
				/>
				<Link href={"http://localhost:3000/products/men"}>
					<h1 className="text-[4vw] text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
						MEN
					</h1>
				</Link>
			</div>
			<div className=" relative">
				<Image
					src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600"
					alt="grid-image"
					fill={true}
					sizes="50vw"
				/>
				<Link href={"http://localhost:3000/products?query=t-shirt"}>
					<h1 className="text-[4vw] text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
						T'SHIRTS
					</h1>
				</Link>
			</div>

			<div className=" relative">
				<Image
					src="https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600"
					alt="grid-image"
					fill={true}
					sizes="50vw"
				/>
				<Link href={"http://localhost:3000/products/women"}>
					<h1 className="text-[4vw] text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
						WOMEN
					</h1>
				</Link>
			</div>
			<div className="relative">
				<Image
					src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600"
					alt="grid-image"
					fill={true}
					sizes="50vw"
				/>
				<Link href={"http://localhost:3000/products?query=shirt"}>
					<h1 className="text-[4vw] text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
						SHIRTS
					</h1>
				</Link>
			</div>
			<div className=" col-span-2  relative">
				<Image
					src="https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1600"
					alt="grid-image"
					fill={true}
					sizes="50vw"
				/>
				<Link href={"http://localhost:3000/products?query=boots"}>
					<h1 className="text-[4vw] text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
						BOOTS
					</h1>
				</Link>
			</div>
		</div>
	);
}
