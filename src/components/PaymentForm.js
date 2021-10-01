import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import "../css/CheckoutPage.css";

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "#fff",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": {
        color: "#fce883",
      },
      "::placeholder": {
        color: "#87bbfd",
      },
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#ffc7ee",
    },
  },
};

export default function PaymentForm({
  paymentSuccess,
  setPaymentSuccess,
  setIsLoading,
  orderAmount,
}) {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    if (!error) {
      setIsLoading(true);
      try {
        const { id } = paymentMethod;
        const response = await axios.post(`${REACT_APP_BASE_URL}/payment`, {
          // set jacket amount here
          amount: orderAmount * 100,
          id,
        });
        if (response.data.success) {
          console.log("success payment");
          setPaymentSuccess(true);
          setIsLoading(false);
        }
      } catch (error) {
        console.log("Error ", error);
      }
    } else {
      console.log(error.message);
    }
  };
  return (
    <>
      {!paymentSuccess ? (
        <form onSubmit={handleSubmit}>
          <fieldset className="FormGroup">
            <div className="formRow">
              <CardElement options={CARD_OPTIONS} />
            </div>
          </fieldset>
          <button className="btnWebsite">Pay</button>
        </form>
      ) : (
        <div className="mt-2 text-success">
          <h5>Payment Success</h5>
        </div>
      )}
    </>
  );
}
