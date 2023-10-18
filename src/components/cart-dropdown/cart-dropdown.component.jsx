import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import './cart-dropdown.styles.scss';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import { selectCartItems } from '../../redux/cart/cart-selector';

const CartDropDown = () => {
    const cartItems = useSelector(selectCartItems);
    const navigate = useNavigate();
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                { cartItems.length ?
                    ( cartItems.map(
                        (item) => <CartItem key={item.id} cartItem={item}/>
                    ))
                    :
                    <span className="error-message">Your cart is empty</span>
                }
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    );
}

export default CartDropDown;