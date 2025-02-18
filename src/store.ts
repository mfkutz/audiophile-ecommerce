import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ProductData } from "@/types";

// Definir la estructura del carrito
type CartItem = {
    product: ProductData;
    quantity: number;
};

// Definir el estado del store
type CartState = {
    cart: CartItem[];
    addToCart: (product: ProductData, quantity?: number) => void;
    removeFromCart: (id: string) => void;
    clearCart: () => void;
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

            // Eliminar un producto por su ID
            removeFromCart: (id) => {
                set((state) => ({
                    cart: state.cart.filter((item) => item.product._id !== id),
                }));
            },

            // Vaciar el carrito
            clearCart: () => set({ cart: [] }),
        }),
        {
            name: "cart-storage", // Clave en localStorage
        }
    )
);
