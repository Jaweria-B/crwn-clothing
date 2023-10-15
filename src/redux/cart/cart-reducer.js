import CART_ACTION_TYPES from "./cart-types";

const INITIAL_VALUE = {
    hidden: true,
}

const cartReducer = (state = INITIAL_VALUE, action = {}) => {
    const {type, payload} = action;

    switch(type) {
        case CART_ACTION_TYPES.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        default:
            return state;
    }
}

export default cartReducer;