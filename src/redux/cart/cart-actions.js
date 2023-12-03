import { createAction } from "../../reducer/reducer.utils";
import CART_ACTION_TYPES from "./cart-types";

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map(
            (cartItem) => 
                cartItem.id === productToAdd.id ?
                {...cartItem, quantity: cartItem.quantity + 1}
                :
                cartItem
        );
    }

    return [...cartItems, {...productToAdd, quantity: 1}];
};

const removeCartItem = (cartItems, productToremove) => {
    // find the cart item to remove
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToremove.id
    );

    // check if the quantity == 1, remove it from cart
    if (existingCartItem.quantity === 1) {
        return cartItems.filter( (cartItem) => cartItem.id !== productToremove.id);
    }

    // return back the cartItems with matching with reduced quantity
    return cartItems.map( 
        (cartItem) => 
            cartItem.id === productToremove.id ?
            {...cartItem, quantity: cartItem.quantity - 1}
            :
            cartItem
    ); 
};

const clearCartItem = (cartItems, productToClear) => {
    return cartItems.filter(
        (cartItem) => 
            cartItem.id !== productToClear.id
    );
};


export const addItemToCart = (cartItems, productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}

export const removeItemFromCart = (cartItems, productToremove) => {
    const newCartItems = removeCartItem(cartItems, productToremove);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}

export const clearItemFromCart = (cartItems, productToClear) => {
    const newCartItems = clearCartItem(cartItems, productToClear);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}

export const setIsCartOpen = (boolean) => createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);

export const clearCart = () => createAction(CART_ACTION_TYPES.CLEAR_CART);