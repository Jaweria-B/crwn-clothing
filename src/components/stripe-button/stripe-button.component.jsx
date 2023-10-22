import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51O3yNhAHUjxYWLMNB3iR464al7uMaTieD6Rc75cKTHZyji6m8uqgp5Nz6yfmhLb48G5dPE0eXsf8tSxPbE2sZd55004naP4xi0';
    
    const tokenhandle = (token) => {
        console.log("Token: " , token);
        alert('Payment Successful')
    }
    return (
        <StripeCheckout
            label = "Pay Now"
            name = "CRWN Clothing Ltd. "
            billingAddress
            shippingAddress
            image = "https://sendeyo.com/show/42cbc5acb9"
            description = {`Your total is $${price}`}
            amount = {priceForStripe}
            panelLabel = "Pay Now"
            token = {tokenhandle}
            stripeKey = {publishableKey}
        />
    );
} 

export default StripeCheckoutButton;