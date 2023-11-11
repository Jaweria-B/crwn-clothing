import { CATEGORIES_ACTION_TYPES } from "./shop.types";

const INITIAL_STATE = {
    collections: [],
    isLoading: false,
    error: null,  
}

export const shopReducer = (state = INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch (type) {
        case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
            return {
                ...state,
                isLoading: true,
            };

        case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
            return { ...state, isLoading: false, collections: payload };
            
        case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
            return { ...state, isLoading: false, error: payload };

        default:
            return state;
    }
}