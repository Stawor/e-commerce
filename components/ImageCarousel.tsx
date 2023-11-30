"use client";

import React, { useState } from "react";
import Image from "next/image";
import img1 from "@/public/img1.webp";
import img2 from "@/public/img2.webp";
import img3 from "@/public/img3.webp";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function ImageCarousel() {
	const imageUrls = [img1, img2, img3];
	const [imageIndex, setImageIndex] = useState(0);

	function handleClickRight() {
		setImageIndex((index) => {
			if (index == imageUrls.length - 1) return (index = 0);
			return index + 1;
		});
	}
	function handleClickLeft() {
		setImageIndex((index) => {
			if (index === 0) return imageUrls.length - 1;
			return index - 1;
		});
	}

	return (
		<main className="">
			<div className="">
				<div
					onClick={handleClickLeft}
					className=" absolute z-10 left-2 top-1/2 border border-slate-700 h-20 w-20"
				>
					<ArrowBackIcon className="w-20 h-20 hover:text-slate-700" />
				</div>
				<div className="h-screen w-full overflow-hidden">
					<div className={` w-[300vw] flex h-full transition-all duration-700`}>
						{imageUrls.map((imageUrl, index) => (
							<Image
								priority={true}
								src={imageUrl}
								key={index}
								alt=""
								className="w-screen h-full object-cover transition-all duration-500"
								style={{ translate: `${-100 * imageIndex}%` }}
							/>
						))}
					</div>
				</div>
			</div>
			<div
				onClick={handleClickRight}
				className=" absolute top-1/2 right-2 border border-slate-700 h-20 w-20"
			>
				<ArrowForwardIcon className="w-20 h-20 hover:text-slate-700 " />
			</div>
		</main>
	);
}
