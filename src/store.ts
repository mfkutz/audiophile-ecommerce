import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ProductData } from "@/types";

type CartItem = {
    product: ProductData;
    quantity: number;
};

type CartState = {
    cart: CartItem[];
    addToCart: (product: ProductData, quantity?: number) => void;
    removeFromCart: (id: string) => void;
    clearCart: () => void;
    getTotalProducts: () => number
    getTotalPrice: () => number
};

// Store with persist
export const useCartStore = create<CartState>()(
    persist(
        (set, get) => ({
            cart: [],

            // Add to cart
            addToCart: (product, quantity = 1) => {
                set((state) => {
                    const existingItem = state.cart.find((item) => item.product._id === product._id);

                    if (existingItem) {
                        return {
                            cart: state.cart.map((item) =>
                                item.product._id === product._id
                                    ? { ...item, quantity: item.quantity + quantity }
                                    : item
                            ),
                        };
                    }

                    return { cart: [...state.cart, { product, quantity }] };
                });
            },

            // Delete by ID
            removeFromCart: (id) => {
                set((state) => ({
                    cart: state.cart.filter((item) => item.product._id !== id),
                }));
            },

            // Empty cart
            clearCart: () => set({ cart: [] }),

            //get total quantity in the cart
            getTotalProducts: () => {
                return get().cart.reduce((acc, item) => acc + item.quantity, 0)
            },

            getTotalPrice: () => {
                return get().cart.reduce((acc, item) => acc + (item.quantity * (item.product.price)), 0)
            }
        }),
        {
            name: "cart-storage", // key localSorage
        }
    )
);
