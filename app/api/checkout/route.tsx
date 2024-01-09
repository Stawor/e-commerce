import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/stripe";

const corsHeaders = {
	"Access-Control-Allow-Origin": "*",
	"Access-Control-Allow-Methods": "POST, GET",
	"Access-Control-Allow-Headers": "Content-Type",
};

export function OPTIONS() {
	return NextResponse.json({}, { headers: corsHeaders });
}

export async function POST(req: NextRequest, res: NextResponse) {
	const items = await req.json();
	const line_items: {
		price_data: {
			currency: string;
			product_data: { name: any; images: any[] };
			unit_amount: number;
		};
		quantity: any;
	}[] = [];
	items.forEach(
		(item: {
			name: string;
			image: string;
			price: number;
			quantity: number;
		}) => {
			line_items.push({
				price_data: {
					currency: "usd",
					product_data: {
						name: item.name,
						images: [item.image],
					},
					unit_amount: item.price * 100 * item.quantity,
				},
				quantity: item.quantity,
			});
		}
	);
	console.log(items);

	// Create Checkout Sessions from body params.
	const origin = req.headers.get("origin");

	const session = await stripe.checkout.sessions.create({
		line_items,
		mode: "payment",
		success_url: `${origin}/?success=true`,
		cancel_url: `${origin}/products/?canceled=true`,
	});

	return NextResponse.json({ url: session.url }, { headers: corsHeaders });
}
