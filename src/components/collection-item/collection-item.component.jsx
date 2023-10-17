import { useDispatch, useSelector } from 'react-redux';

import './component-item.styles.scss';

import  CustomButton , { BUTTON_TYPE_CLASSES } from "../custom-button/custom-button.component";

import { selectCartItems } from '../../redux/cart/cart-selector';

import { addItemToCart } from '../../redux/cart/cart-actions';

const CollectionItem = ( { product } ) => {
    const { name, price, imageUrl} = product;

    const dispatch = useDispatch();

    const cartItems = useSelector(selectCartItems);

    const addProductToCart = () => dispatch(addItemToCart(cartItems, product));
    return (
        <div className='collection-item'>
            <div className='image'
                style={
                    {
                        backgroundImage:`url(${imageUrl})`
                    }
                }
            />
            <div className='collection-footer'>
                <span className='name'> { name } </span>
                <span className='price'> { price } </span>
            </div>
            <CustomButton buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add To Cart</CustomButton>
        </div>
    )
}
export default CollectionItem;