import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

// TODO: add publishable key 
const stripePromise= loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY)
const Payment = () => {
    return (
        <div>
            <SectionTitle heading={"payment"}
            subHeading={"please payment to eat "}
            >

            </SectionTitle>
            <div>
                <Elements stripe={stripePromise} >
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;