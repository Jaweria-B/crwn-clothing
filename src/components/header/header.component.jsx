import { Link } from 'react-router-dom';
import { shallowEqual, useSelector } from 'react-redux';

import './header.styles.scss';
import {ReactComponent as Logo} from '../../assets/header-logo/crown.svg';
import {auth, signOutUser} from '../../firebase/firebase.utils';
import { selectCurrentUser } from '../../redux/user/user-selector';

const Header = () => {
    const currentUser = useSelector(selectCurrentUser, {
        equalityFn: shallowEqual,
      });
    return (
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
            </div>
        </div>
    )
}
export default Header;