import { useState, createContext, useReducer } from "react";

const CART_ACTION_TYPES = {
    SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
    SET_CART_ITEMS: 'SET_CART_ITEMS',
    SET_CART_COUNT: 'SET_CART_COUNT',
    SET_CART_TOTAL: 'SET_CART_TOTAL',
};

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0,
};

const cartReducer = (state, action = {}) => {
    const {type, payload} = action;

    switch(type) {
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                ...payload
            }
        // case CART_ACTION_TYPES.SET_IS_CART_OPEN:
        //     return {
        //         ...state,
        //         isCartOpen: !state.isCartOpen
        //     }
        default:
            throw new Error(`Unhandled type ${type} in cartReducer`);
    }
}



export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);

    const [{ cartCount, cartTotal, cartItems }, dispatch] = useReducer(
        cartReducer,
        INITIAL_STATE
      );

    const value = {
        isCartOpen,
        setIsCartOpen,
        cartItems,
    }

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
};

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    cartCount: 0,
    cartTotal: 0,
});