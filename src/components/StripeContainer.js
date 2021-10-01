import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "./PaymentForm";

const PUBLIC_KEY = `${process.env.REACT_APP_PUBLIC_KEY}`;
const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer({
  paymentSuccess,
  setPaymentSuccess,
  setIsLoading,
  isLoading,
  orderAmount,
}) {
  return (
    <Elements stripe={stripeTestPromise}>
      {!isLoading && (
        <PaymentForm
          paymentSuccess={paymentSuccess}
          setPaymentSuccess={setPaymentSuccess}
          setIsLoading={setIsLoading}
          orderAmount={orderAmount}
        />
      )}
    </Elements>
  );
}
