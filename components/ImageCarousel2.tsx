"use client";

import React, { useState } from "react";
import Image from "next/image";
import img1 from "@/public/img1.webp";
import img2 from "@/public/img2.webp";
import img3 from "@/public/img3.webp";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function ImageCarousel2() {
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
					className=" absolute z-10 top-1/2 border border-slate-700 "
				>
					<ArrowBackIcon className=" text-7xl hover:" />
				</div>
				<div className="h-screen w-full overflow-hidden">
					<div className={` w-[300vw] flex h-full transition-all duration-700`}>
						{imageUrls.map((imageUrl, index) => (
							<Image
								priority={true}
								src={imageUrl}
								key={index}
								alt=""
								className="w-screen h-full object-cover"
								style={{ translate: `${-100 * imageIndex}%` }}
							/>
						))}
					</div>
				</div>
			</div>
			<div
				onClick={handleClickRight}
				className=" absolute top-1/2 right-0 border border-slate-700 "
			>
				<ArrowForwardIcon className=" text-7xl" />
			</div>
		</main>
	);
}
