import { useDispatch, useSelector } from 'react-redux';

import './checkout-item.styles.scss';

import { addItemToCart, removeItemFromCart, clearItemFromCart  } from '../../redux/cart/cart-actions';
import { selectCartItems } from '../../redux/cart/cart-selector';

const CheckoutItem = ({ cartItem }) => {
    const {name, imageUrl, price, quantity} = cartItem;

    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();

    const clearItemHandler = () => {
        dispatch(clearItemFromCart(cartItems, cartItem));
    }
    const addItemHandler = () => {
        dispatch(addItemToCart(cartItems, cartItem));
    }
    const removeItemHandler = () => {
        dispatch(removeItemFromCart(cartItems, cartItem));
    }

    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>
            <span className="name">
                {name}
            </span>
            <span className="quantity">
                <div className="arrow" onClick={removeItemHandler}>&#10094;</div>
                <span className="value">
                    {quantity}
                </span>
                <div className="arrow" onClick={addItemHandler}>&#10095;</div>
            </span>
            <span className="price">
                {price}
            </span>
            <div className="remove-button" onClick={clearItemHandler}>&#10005;</div>
        </div>
    );
}

export default CheckoutItem;