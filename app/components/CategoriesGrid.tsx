import React from "react";
import Image from "next/image";

export default function CategoriesGrid() {
	return (
		<div className="grid grid-cols-4 gap-4 h-[50vw]">
			<div className=" relative">
				<Image
					src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600"
					alt=""
					fill={true}
				/>
			</div>
			<div className=" row-span-2 relative">
				<Image
					src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600"
					alt=""
					fill={true}
				/>
			</div>
			<div className=" relative">
				<Image
					src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600"
					alt=""
					fill={true}
				/>
			</div>
			<div className="] relative">
				<Image
					src="https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600"
					alt=""
					fill={true}
				/>
			</div>
			<div className="relative">
				<Image
					src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600"
					alt=""
					fill={true}
				/>
			</div>
			<div className=" col-span-2  relative">
				<Image
					src="https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1600"
					alt=""
					fill={true}
				/>
			</div>
		</div>
	);
}
