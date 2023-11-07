import SHOP_DATA from "./shop.data";
import { CATEGORIES_ACTION_TYPES } from "./shop.types";

const INITIAL_STATE = {
    collections: [],
}

export const shopReducer = (state = INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch (type) {
        case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
            return { ...state, collections: payload };
        default:
            return state;
    }
}