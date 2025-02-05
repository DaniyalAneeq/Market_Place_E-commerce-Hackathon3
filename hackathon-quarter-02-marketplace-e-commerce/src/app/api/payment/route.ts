import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { cartItems } = body; // Accept cartItems instead of a single product

        // Create line items for Stripe checkout
        const lineItems = Object.keys(cartItems).map((key) => {
            const item = cartItems[key];
            return {
                price_data: {
                    currency: "usd",
                    product_data: {
                        name: item.title, // Use the product title
                    },
                    unit_amount: item.price * 100, // Convert price to cents
                },
                quantity: item.quantity, // Use the product quantity
            };
        });

        // Create Stripe checkout session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: lineItems, // Pass all cart items
            mode: "payment",
            success_url: `${req.headers.get("origin")}/success`,
            cancel_url: `${req.headers.get("origin")}/failed`,
        });

        return NextResponse.json({ url: session.url });
    } catch (error: unknown) {
        let errorMessage = "An unexpected error occurred";
        if (error instanceof Error) {
          errorMessage = error.message;
        }
        return NextResponse.json({ error: errorMessage }, { status: 500 });
      }
}