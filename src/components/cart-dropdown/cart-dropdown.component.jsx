import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import './cart-dropdown.styles.scss';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import { setIsCartOpen } from '../../redux/cart/cart-actions';
import { selectIsCartOpen, selectCartItems } from '../../redux/cart/cart-selector';

const CartDropDown = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const cartItems = useSelector(selectCartItems);
    const isCartOpen = useSelector(selectIsCartOpen);

    const goToCheckoutHandler = () => {
        navigate('/checkout');
        dispatch(setIsCartOpen(!isCartOpen));
        
    }
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
            <CustomButton onClick={goToCheckoutHandler} >GO TO CHECKOUT</CustomButton>
        </div>
    );
}

export default CartDropDown;