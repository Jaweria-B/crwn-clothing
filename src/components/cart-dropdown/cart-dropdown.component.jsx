import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import './cart-dropdown.styles.scss';

import CustomButton from '../custom-button/custom-button.component';

import { selectCartItems } from '../../redux/cart/cart-selector';

const CartDropDown = () => {
    const cartItems = useSelector(selectCartItems);
    const navigate = useNavigate();
    return (
        <div className='cart-dropdown'>
            <div className='cart-item'></div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    );
}

export default CartDropDown;