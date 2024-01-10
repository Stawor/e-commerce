"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { Cookies } from "react-cookie";

type CartItem = {
	color: string;
	gen: string;
	id: number;
	image: string;
	image2: string;
	name: string;
	price: number;
	quantity: number;
};

type CartContextType = {
	cart: CartItem[];
	cookie: CartItem[];
	message: string;
	display: string;
	addToCart: (item: CartItem) => void;
	removeFromCart: (id: number) => void;
	updateQuantity: (id: number, quantity: number) => void;
	setDisplay: (display: string) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
	const cookies = new Cookies();
	const getCookie = cookies.get("cart");
	const [cookie, setCookie] = useState([]);
	const [cart, setCart] = useState<CartItem[]>(cookie);
	const [message, setMessage] = useState<string>("");
	const [display, setDisplay] = useState<string>("hidden");

	useEffect(() => {
		if (getCookie == undefined || cart.length !== 0) {
			cookies.set("cart", JSON.stringify(cart), { path: "/" });
		}
		setCookie(cookies.get("cart"));
	}, [cart]);

	const addToCart = (newItem: CartItem) => {
		const existingItem: undefined | any = cookie.find(
			(item: { id: number }) => item.id === newItem.id
		);

		if (existingItem != undefined) {
			existingItem.quantity++;
			setCart([...cookie]);
			setMessage(existingItem.name + " quantity updated");
			setDisplay("block");
		} else {
			setCart([...cookie, newItem]);
			setMessage(newItem.name + " added to cart");
			setDisplay("block");
		}
	};

	const removeFromCart = (id: number) => {
		setCart((oldCart) => oldCart.filter((item) => item.id !== id));
	};

	const updateQuantity = (id: number, quantity: number) => {
		setCart((prevCart) => {
			return prevCart.map((item) =>
				item.id === id ? { ...item, quantity } : item
			);
		});
	};

	return (
		<CartContext.Provider
			value={{
				cart,
				addToCart,
				removeFromCart,
				updateQuantity,
				message,
				display,
				setDisplay,
				cookie,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}

export function useCart() {
	const context = useContext(CartContext);
	if (context === undefined) {
		throw new Error("useCart must be used within a CartProvider");
	}
	return context;
}
