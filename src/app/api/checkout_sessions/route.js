import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

export async function POST(request) {
  try {
    const { title, price } = await request.json();

    const origin = request.headers.get("origin");

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],

      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: title,
            },
            unit_amount: Math.round(Number(price) * 100),
          },
          quantity: 1,
        },
      ],

      success_url: `${origin}/payment-success`,
      cancel_url: `${origin}/payment-cancel`,
    });

    return NextResponse.json({
      url: session.url,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}