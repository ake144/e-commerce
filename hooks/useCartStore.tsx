import { create } from "zustand";
import { currentCart } from "@wix/ecom";
import { WixClient } from "@/context/wixContext";

// Define default state
const defaultState = {
  cart: [] as currentCart.Cart,
  isLoading: false,
  counter: 0,
};

// Define the Cart State type
type CartState = {
  cart: currentCart.Cart;
  isLoading: boolean;
  counter: number;
  getCart: (wixClient: WixClient) => Promise<void>;
  addItem: (
    wixClient: WixClient,
    productId: string,
    variantId?: string,
    quantity?: number
  ) => Promise<void>;
  removeItem: (wixClient: WixClient, itemId: string) => Promise<void>;
  reset: () => void;
};

// Zustand store
export const useCartStore = create<CartState>((set) => ({
  ...defaultState,

  getCart: async (wixClient) => {
    set({ isLoading: true });
    try {
      const cart = await wixClient.currentCart.getCurrentCart();
      set({
        cart: cart || [],
        counter: cart?.lineItems.length || 0,
        isLoading: false,
      });
    } catch (error) {
      console.error("Error fetching cart:", error);
      set({ isLoading: false });
    }
  },

  addItem: async (wixClient, productId, variantId, quantity = 1) => {
    set({ isLoading: true });
    try {
      const response = await wixClient.currentCart.addToCurrentCart({
        lineItems: [
          {
            catalogReference: {
              appId: process.env.NEXT_PUBLIC_WIX_APP_ID!,
              catalogItemId: productId,
              ...(variantId && { options: { variantId } }),
            },
            quantity,
          },
        ],
      });

      set((state) => ({
        cart: response.cart,
        counter: response.cart?.lineItems.length || 0,
        isLoading: false,
      }));
    } catch (error) {
      console.error("Error adding item to cart:", error);
      set({ isLoading: false });
    }
  },

  removeItem: async (wixClient, itemId) => {
    set({ isLoading: true });
    try {
      const response =
        await wixClient.currentCart.removeLineItemsFromCurrentCart([itemId]);
      set((state) => ({
        cart: response.cart,
        counter: response.cart?.lineItems.length || 0,
        isLoading: false,
      }));
    } catch (error) {
      console.error("Error removing item from cart:", error);
      set({ isLoading: false });
    }
  },

  reset: () => {
    set({ ...defaultState });
  },
}));
