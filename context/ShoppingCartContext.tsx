"use client";
import { get } from "http";
import { createContext, useContext, useEffect, useState } from "react";
import { Cookies } from "react-cookie";

type CartItem = {
	quantity: number;
	id: string;
	name: string;
};

type CartContextType = {
	cart: CartItem[];
	addToCart: (item: CartItem) => void;
	removeFromCart: (id: string) => void;
	updateQuantity: (id: string, quantity: number) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
	const cookies = new Cookies();
	const getCookie = cookies.get("cart");

	const [cookie, setCookie] = useState([]);

	const [cart, setCart] = useState<CartItem[]>(cookie);

	useEffect(() => {
		if (getCookie == undefined || cart.length !== 0) {
			cookies.set("cart", JSON.stringify(cart), { path: "/" });
		}
		setCookie(cookies.get("cart"));
	}, [cart]);

	const addToCart = (newItem: CartItem) => {
		const existingItem = cookie.find((item) => item.id === newItem.id);

		if (existingItem != undefined) {
			existingItem.quantity++;
			setCart([...cookie]);
		} else {
			setCart([...cookie, newItem]);
		}
	};

	const removeFromCart = (id: string) => {
		setCart((oldCart) => oldCart.filter((item) => item.id !== id));
	};

	const updateQuantity = (id: string, quantity: number) => {
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
