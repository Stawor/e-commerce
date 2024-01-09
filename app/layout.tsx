import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/ShoppingCartContext";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${inter.className} `}>
				<SessionProvider>
					<CartProvider>
						<NavBar />
						<div className=" flex flex-col gap-60 justify-between h-screen">
							{children}
							<Footer />
						</div>
					</CartProvider>
				</SessionProvider>
			</body>
		</html>
	);
}
