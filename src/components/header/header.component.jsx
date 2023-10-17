import { Link, Outlet } from 'react-router-dom';
import { Fragment } from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import './header.styles.scss';

import {ReactComponent as Logo} from '../../assets/header-logo/crown.svg';
import { signOutUser} from '../../firebase/firebase.utils';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';

import { selectCurrentUser } from '../../redux/user/user-selector';
import { selectIsCartOpen } from '../../redux/cart/cart-selector';


const Header = () => {
    const currentUser = useSelector(selectCurrentUser, {
        equalityFn: shallowEqual,
    });

    const isCartOpen  = useSelector(selectIsCartOpen);

    return (
        <Fragment>
            <div className='header'>
                <Link to='/' className='loogo-container'>
                    <Logo className='logo'/>
                </Link>
                <div className='options'>
                    <Link to='/shop' className='option'> SHOP </Link>
                    <Link to='/shop' className='option'> CONTACT </Link>
                    {
                        currentUser ?
                        (<div className='option' onClick={signOutUser}>SIGN OUT</div>)
                        :
                        (<Link to='/signin' className='option'>SIGN IN</Link>)
                    }
                    <CartIcon/>
                </div>
                { isCartOpen && <CartDropDown/>}
            </div>
            <Outlet/>
        </Fragment>
    )
}
export default Header;