import "../css/CartPage.css";
import "../css/CheckoutPage.css";
import { NavLink } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../reducer";
import CurrencyFormat from "react-currency-format";
import { useState, useEffect } from "react";
import firebase from "firebase/app";

import { db } from "../firebase";
import StripeContainer from "./StripeContainer";

const CheckoutPage = () => {
  const [{ basket }, dispatch] = useStateValue();
  const [creditCard, setCreditCard] = useState(false);
  const [yourName, setYourName] = useState("");
  const [yourEmail, setYourEmail] = useState("");
  const [yourAddress, setYourAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [successOrder, setSuccessOrder] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [completeOrder] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // This scroll page at top on navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const addUserOrder = db.collection("orders");

  const onPlaceOrder = () => {
    addUserOrder
      .add({
        orderDetails: basket,
        orderTime: firebase.firestore.Timestamp.fromDate(new Date()),
        name: yourName,
        email: yourEmail,
        address: yourAddress,
        city,
        country,
        postalCode,
        totalPrice,
        completeOrder,
      })
      .then(() => {
        setYourEmail("");
        setYourName("");
        setYourAddress("");
        setCity("");
        setCountry("");
        setPostalCode("");
        setSuccessOrder("Your Order Successfully Placed👍");
      })
      .catch((error) => {
        alert(error.message);
        alert(`Error! ${error}`);
      });
    dispatch({
      type: "EMPTY_BASKET",
    });
  };

  return (
    <div className="cart-page">
      <div>
        <h2 className="text-center text-success basket__heading my-5">
          {successOrder}
        </h2>
      </div>
      {basket?.length === 0 ? (
        <div>
          <h2 className="text-center basket__heading my-5">
            No item for Checkout
          </h2>
        </div>
      ) : (
        <div>
          <h2 className="text-center basket_heading my-5">
            Your Custom Leather Jacket
          </h2>
          <div className="container bg-light py-2 mb-5">
            <div className="row">
              {basket.map((item, ind) => {
                const customSizingPro = item.customSizing;

                return (
                  <div className="col-md-12 mb-3 cart-product" key={ind}>
                    <div className="left-div">
                      <img src={item.imageForFirebase} alt="" />
                    </div>
                    <div className="right-div">
                      <p>
                        {" "}
                        <strong> Leather Color: </strong> {item.leatherColor}
                      </p>
                      <p>
                        {" "}
                        <strong> Leather Type: </strong> {item.leatherType}
                      </p>
                      <p>
                        {" "}
                        <strong> Lining Color: </strong> {item.liningColor}
                      </p>
                      <p>
                        {" "}
                        <strong> Hardware Color: </strong> {item.hardwareColor}
                      </p>
                    </div>
                    <div className="right-div2">
                      <p>
                        {" "}
                        <strong> Gender:</strong> {item.gender}
                      </p>
                      <p>
                        <strong> Size: </strong>
                        {item.size === "Customize Size" ? (
                          <ul>
                            {customSizingPro.map((item, ind) => {
                              return (
                                <>
                                  <li key={ind}>{item}</li>{" "}
                                </>
                              );
                            })}
                          </ul>
                        ) : (
                          <>{item.size}</>
                        )}
                      </p>
                      <p>
                        {" "}
                        <strong> Price:</strong> {item.productPrice} X{" "}
                        {item.quantityProduct} = {item.productPricingByQuantity}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="row p-2">
              <div className="col-md-6 shipping-info">
                <h5>Shipping Information</h5>

                <input
                  value={yourName}
                  onChange={(e) => setYourName(e.target.value)}
                  type="text"
                  placeholder="Your Name"
                />
                <input
                  value={yourEmail}
                  onChange={(e) => setYourEmail(e.target.value)}
                  type="email"
                  placeholder="Your Email"
                />
                <textarea
                  value={yourAddress}
                  onChange={(e) => setYourAddress(e.target.value)}
                  rows="3"
                  type="text"
                  placeholder="Your Address"
                />
                <br />
                <input
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  type="text"
                  placeholder="City"
                />
                <input
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  type="text"
                  placeholder="Country"
                />
                <input
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                  type="text"
                  placeholder="Postal Code"
                />
              </div>
              <div className="col-md-6 payment-info">
                <h5>Payment Information</h5>
                <button
                  className="btnWebsite mr-3"
                  onClick={() => setCreditCard(!creditCard)}
                >
                  <i className="fas fa-credit-card"></i> Credit or Debit
                </button>
                {creditCard && (
                  <>
                    <StripeContainer
                      paymentSuccess={paymentSuccess}
                      setPaymentSuccess={setPaymentSuccess}
                      isLoading={isLoading}
                      setIsLoading={setIsLoading}
                    />
                  </>
                )}
                {isLoading && (
                  <>
                    {" "}
                    <i className="fas fa-spinner fa-spin"></i> Wait a while processing
                  </>
                )}
                {paymentSuccess && (
                  <button className="btnWebsite" onClick={onPlaceOrder}>
                    Place Order
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="text-center my-3">
        <CurrencyFormat
          renderText={(value) => {
            setTotalPrice(value);
            return (
              <>
                <h5 className="mb-3">
                  Subtotal ({basket.length} item(s)) <br />{" "}
                  <strong>Total: {`${value}`}</strong>
                </h5>
              </>
            );
          }}
          decimalScale={2}
          value={getBasketTotal(basket)}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$ "}
        />

        {basket.length > 0 ? (
          <NavLink className="my-3 btnWebsite" to="/cart">
            <i className="fas fa-shopping-cart"></i> Cart
          </NavLink>
        ) : (
          <NavLink className="btnWebsite" to="/product">
            Product Page
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default CheckoutPage;
