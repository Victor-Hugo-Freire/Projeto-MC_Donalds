"use client";

import { Product } from "@prisma/client";
import { createContext, ReactNode, useState } from "react";

interface CartProduct extends Pick<Product, 'id' | 'name' | 'price' | 'imageUrl'>{
    quantity: number;
}

export interface ICartContext {
    isOpen : boolean;
    products: CartProduct[];
    togleCart: ( ) => void;
    addProduct: (product: CartProduct) => void,
}

export const CartContext = createContext<ICartContext>({
    isOpen: false,
    products: [],
    togleCart: () => {},
    addProduct: () => {},
})

export const CartProvider = ({ children }: {children : ReactNode}) => {
    const [products, setProducts] = useState<CartProduct[]>([]);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const togleCart = () => {
        setIsOpen(prev => !prev);
    }

    const addProduct = (product : CartProduct) => {
        setProducts(prev => ([...prev , product]))
    }

    return (
        <CartContext.Provider value={{
            isOpen, 
            products,
            togleCart,
            addProduct
        }}
        >
            {children}
        </CartContext.Provider>
    );
}