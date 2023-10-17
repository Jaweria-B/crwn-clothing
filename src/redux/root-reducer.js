import { combineReducers } from "@reduxjs/toolkit";

import  { userReducer }  from "./user/user-reducer";
import { cartReducer } from "./cart/cart-reducer"; 

export const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
});

