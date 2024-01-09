import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Link from "next/link";
import LoginButton from "./LoginButton";
import MenuIcon from "@mui/icons-material/Menu";
import CartIcon from "./CartIcon";

type Anchor = "left";

export default function TemporaryDrawer() {
	const [state, setState] = React.useState({
		left: false,
	});

	const toggleDrawer =
		(anchor: Anchor, open: boolean) =>
		(event: React.KeyboardEvent | React.MouseEvent) => {
			if (
				event.type === "keydown" &&
				((event as React.KeyboardEvent).key === "Tab" ||
					(event as React.KeyboardEvent).key === "Shift")
			) {
				return;
			}

			setState({ ...state, [anchor]: open });
		};

	const list = (anchor: Anchor) => (
		<Box
			sx={{
				width: 250,
				height: "100%",
				backgroundColor: "#000",
				color: "white",
			}}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<div className="flex flex-col gap-8 m-4 text-3xl font-bold  ">
				<div className="flex flex-col justify-start gap-2">
					<LoginButton />

					<CartIcon />
				</div>
				<hr className="border-slate-400" />
				<div className="flex flex-col gap-8 underline">
					<Link href="/products/women">Women</Link>
					<Link href="/products/men">Men</Link>
					<Link href="/products">Products</Link>
				</div>
			</div>
		</Box>
	);

	return (
		<>
			<button onClick={toggleDrawer("left", true)}>
				<MenuIcon fontSize="large" />
			</button>

			<Drawer
				anchor={"left"}
				open={state["left"]}
				onClose={toggleDrawer("left", false)}
			>
				{list("left")}
			</Drawer>
		</>
	);
}
