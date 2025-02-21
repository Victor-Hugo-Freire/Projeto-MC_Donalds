"use client";

import { Product } from "@prisma/client";
import { createContext, ReactNode, useState } from "react";

interface CartProduct extends Product{
    quantity: number;
}

export interface ICartContext {
    isOpen : boolean;
    products: CartProduct[];
    togleCart: ( ) => void;
}

export const CartContext = createContext<ICartContext>({
    isOpen: false,
    products: [],
    togleCart: () => {},
})

export const CartProvider = ({ children }: {children : ReactNode}) => {
    const [products, setProducts] = useState<CartProduct[]>([]);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const togleCart = () => {
        setIsOpen(prev => !prev);
    }

    return (
        <CartContext.Provider value={{
            isOpen, 
            products,
            togleCart,

        }}
        >
            {children}
        </CartContext.Provider>
    );
}