"use server";

import { BasketItem } from "@/store/store";

export type Metadata = {
  orderNumber: string;
  customerName: string;
  customerEmail: string;
  clerkUserId: string;
};

export type GroupedBasketItem = {
  product: BasketItem["product"];
  quantity: number;
};

export async function createCheckoutSession(
  items: GroupedBasketItem[],
  metadata: Metadata
) {
  try {
    // Check if any grouped items don't have a price
    const itemsWithoutPrice = items.filter((item) => !item.product.price);
    if (itemsWithoutPrice.length > 0) {
      throw new Error(
        `The following items don't have a price: ${itemsWithoutPrice
          .map((item) => item.product.name)
          .join(", ")}`
      );
    }

    return null; // Temporary, replace with actual checkout session URL after implementing Stripe
  } catch (error) {
    console.error("Error creating checkout session:", error);
    throw error;
  }
}
