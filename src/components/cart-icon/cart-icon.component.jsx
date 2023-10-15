import { useContext } from 'react';
import './cart-icon.styles.scss';

import {ReactComponent as ShopingIcon} from '../../assets/shopping-cart/shopping-bag.svg';
import { CartContext } from '../../contexts/cart.context';
// import {toggleIsCartOpen}

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
    // function toggleIsCartOpen() {
    //     return console.log("The Cart is: " + isCartOpen);
    // }
    const toggleIsCartOpen = () => {
        console.log("The Cart is: " + isCartOpen); 
        return setIsCartOpen(!isCartOpen)}

    return (
        <div onClick={toggleIsCartOpen}  className='cart-icon'>
            <ShopingIcon className='shopping-icon' />
            <span className='item-count'>{cartCount}</span>
        </div>
    );
}

export default CartIcon;