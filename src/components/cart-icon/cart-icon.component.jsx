import { useSelector, useDispatch } from 'react-redux';
import './cart-icon.styles.scss';

import {ReactComponent as ShopingIcon} from '../../assets/shopping-cart/shopping-bag.svg';
import { selectIsCartOpen } from '../../redux/cart/cart-selector';
import { setIsCartOpen } from '../../redux/cart/cart-actions';

const CartIcon = () => {
    const dispatch = useDispatch();
    const isCartOpen = useSelector(selectIsCartOpen);

    const toggleIsCartOpen = () => {
        console.log("Cart is: " + isCartOpen)
        dispatch(setIsCartOpen(!isCartOpen));
    }
    return (
        <div className='cart-icon' onClick={toggleIsCartOpen}>
            <ShopingIcon className='shopping-icon' />
            <span className='item-count'>0</span>
        </div>
    );
}

export default CartIcon;