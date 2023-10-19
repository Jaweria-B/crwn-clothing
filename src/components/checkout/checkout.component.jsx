import { useDispatch, useSelector } from 'react-redux';

import './checkout.styles.scss';

import CheckoutItem from '../checkout-item/checkout-item.component';

import { addItemToCart, removeItemFromCart, clearItemFromCart  } from '../../redux/cart/cart-actions';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart-selector';

const CheckOut = ( {cartItem}) => {
    
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);

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
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>
                        Product
                    </span>
                </div>
                <div className="header-block">
                    <span>
                        Description
                    </span>
                </div>
                <div className="header-block">
                    <span>
                        Quantity
                    </span>
                </div>
                <div className="header-block">
                    <span>
                        Price
                    </span>
                </div>
                <div className="header-block">
                    <span>
                        Remove
                    </span>
                </div>    
            </div>
            {
                    cartItems.map(
                        cartItem => (
                            <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
                        )
                    ) 
                }            

                <div className="total">
                    <span>TOTAL: ${cartTotal}</span>
                </div>
        </div>
    );
}

export default CheckOut;