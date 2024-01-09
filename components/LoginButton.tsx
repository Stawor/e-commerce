"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import LockPersonOutlinedIcon from "@mui/icons-material/LockPersonOutlined";

export default function CamperVanPage() {
	const { data: session, status } = useSession();
	const userName = session?.user?.name;
	const userImage = session?.user?.image;

	if (status === "loading") {
		return <p>Loading...</p>;
	}

	if (status === "authenticated") {
		return (
			<div className="flex flex-col lg:flex-row gap-4 lg:items-center  items-start">
				<button onClick={() => signOut()}>
					Log out
					<LockPersonOutlinedIcon />
				</button>
				<div className="flex gap-2 items-center">
					{userName}
					<Image
						className="rounded-full"
						src={userImage || ""}
						width={30}
						height={30}
						alt={""}
					></Image>
				</div>
			</div>
		);
	}

	return (
		<>
			<button onClick={() => signIn("github")}>
				Login
				<LockPersonOutlinedIcon />
			</button>
		</>
	);
}
