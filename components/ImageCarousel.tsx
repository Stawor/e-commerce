"use client";

import React, { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function ImageCarousel() {
	const [currentSlide, setCurrentSlide] = useState(0);
	function handleClickRight() {
		console.log(currentSlide);
		setCurrentSlide(currentSlide == 2 ? 0 : currentSlide + 1);
	}
	function handleClickLeft() {
		console.log(currentSlide);
		setCurrentSlide(currentSlide == 0 ? 2 : currentSlide - 1);
	}
	return (
		<main className="">
			<div className="">
				<div
					onClick={handleClickLeft}
					className=" absolute z-10 top-1/2 border border-slate-700 "
				>
					<ArrowBackIcon className=" text-7xl" />
				</div>
				<div className="h-screen w-full ">
					<div
						className={` w-[300vw] flex  h-full transition-all duration-700 translate-x-[-${
							currentSlide * 100
						}vw]`}
					>
						<img
							src="img1.webp"
							alt=""
							className="w-screen h-full object-cover"
						/>
						<img
							src="img2.webp"
							alt=""
							className=" w-screen h-full object-cover"
						/>
						<img
							src="img3.webp"
							alt=""
							className=" w-screen h-full object-cover"
						/>
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
