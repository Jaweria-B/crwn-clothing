import './cart-icon.styles.scss';

import {ReactComponent as ShopingIcon} from '../../assets/shopping-cart/shopping-bag.svg';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen } = useContext(CartContext);

    const toggleIsCartOpen = () => {setIsCartOpen(!isCartOpen);}

    return (
        <div  onClick={toggleIsCartOpen} className='cart-icon'>
            <ShopingIcon className='shopping-icon'/>
            <span className='item-count'>0</span>
        </div>
    );
}

export default CartIcon;