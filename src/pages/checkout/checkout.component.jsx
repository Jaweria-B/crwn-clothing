import { useSelector } from 'react-redux';
import { Elements } from "@stripe/react-stripe-js";

import './checkout.styles.scss';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import PaymentForm from '../../components/payment-form/payment-form.component';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart-selector';

import { stripePromise } from '../../utils/stripe/stripe.utils';

const CheckOut = () => {

    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);

    const options = {
        mode: 'payment',
        currency: 'usd',
        amount: cartTotal,
      };

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

                {/* <div className="test-warning">
                    *Please use the following test credit card for payments*
                    <br />
                    4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
                </div> */}

                <Elements stripe={stripePromise} options={options}>
                    <PaymentForm/>
                </Elements>
        </div>
    );
}

export default CheckOut;