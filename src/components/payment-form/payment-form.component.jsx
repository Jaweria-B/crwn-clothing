import { useState } from "react";
import { useSelector } from "react-redux";

import {
    PaymentElement,
    useStripe,
    useElements
} from "@stripe/react-stripe-js";

import { PaymentFormContainer, FormContainer, PaymentButton } from "./payment-form.styles";

import { selectCartTotal } from "../../redux/cart/cart-selector";
import { selectCurrentUser } from "../../redux/user/user-selector";

import { BUTTON_TYPE_CLASSES } from "../custom-button/custom-button.component";

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const amount = useSelector(selectCartTotal);
    const currentUser = useSelector(selectCurrentUser);

    const [isLoading, setIsLoading] = useState(false);

    const paymentHandler = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) return;

        setIsLoading(true);

        // eslint-disable-next-line
        const response = await fetch("netlify\create-payment-intent.js",
        { 
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ amount: amount * 100 }),
        })
            .then((res) => res.json());
        
        const {
            paymentIntent: { client_secret },
            } = response;
        
        const paymentResult = await stripe.confirmCardPayment(client_secret, {
            payment_method: {
                card: elements.getElement(PaymentElement),
                billing_details: {
                name: currentUser ? currentUser.displayName : "guest",
                },
            },
        });

        setIsLoading(false);

        if (paymentResult.error) {
            alert(paymentResult.error);
          } else {
            if (paymentResult.paymentIntent.status === "succeeded") {
              alert("Payment was successful");
            }
        }
    };
    

    return (
        <PaymentFormContainer>
            <FormContainer onSubmit={paymentHandler}>
                <h2>
                    Credit Card Payment:
                </h2>
                <PaymentElement/>
                <PaymentButton
                    buttonType={BUTTON_TYPE_CLASSES.inverted}
                >
                    Pay Now
                </PaymentButton>
            </FormContainer>
        </PaymentFormContainer>
    );
}

export default PaymentForm;