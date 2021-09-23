import "../css/CartPage.css";
import "../css/CheckoutPage.css";
import { NavLink } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../reducer";
import CurrencyFormat from "react-currency-format";
import { useState } from "react";

const CheckoutPage = () => {
  const [{ basket }] = useStateValue();
  const [creditCard, setCreditCard] = useState(false);

  return (
    <div className="cart-page">
      {basket?.length === 0 ? (
        <div>
          <h2 className="text-center basket__heading my-5">
            No item for Checkout :(
          </h2>
        </div>
      ) : (
        <div>
          <h2 className="text-center basket__heading my-5">
            Your Custom Leather Jacket
          </h2>
          <div className="container bg-light py-2 mb-5">
            <div className="row">
              {basket.map((item, ind) => {
                const customSizingPro = item.customSizing;
                const customSizeProdInd = customSizingPro[0];
                return (
                  <div className="col-md-12 mb-3 cart-product" key={ind}>
                    <div className="left-div">
                      <img src={item.customDesignImage} alt="" />
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
                        <strong> Studs Type:</strong> {item.studsType}
                      </p>
                      <p>
                        {" "}
                        <strong> Gender:</strong> {item.gender}
                      </p>
                      <p>
                        <strong> Size: </strong>
                        {item.size === "Customize Size" ? (
                          <ul>
                            {customSizeProdInd.map((item, ind) => {
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
                        <strong> Price:</strong> {item.productPrice}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="row p-2">
              <div className="col-md-6 shipping-info">
                <h5>Shipping Information</h5>

                <input type="text" placeholder="Full Name" />
                <input type="email" placeholder="Email" />
                <textarea rows="3" type="text" placeholder="Address" />
                <br />
                <input type="text" placeholder="City" />
                <input type="text" placeholder="Country" />
                <input type="text" placeholder="Postal Code" />
              </div>
              <div className="col-md-6 payment-info">
                <h5>Payment Information</h5>

                <NavLink className="btnWebsite mr-1" to="">
                  <i class="fab fa-paypal"></i> PayPal
                </NavLink>
                <button
                  className="btnWebsite"
                  onClick={() => setCreditCard(!creditCard)}
                >
                  <i class="fas fa-credit-card"></i> Credit or Debit
                </button>
                {creditCard && (
                  <>
                    <input type="text" placeholder="Name on Card" />
                    <small> e.g: John Smith</small>
                    <input type="number" placeholder="Card Number" />
                    <small> e.g: 42XXXXXXXXXX</small>
                    <input type="number" placeholder="Expiry" />
                    <small> e.g: 31/02/20XX</small>
                    <input type="number" placeholder="CCV" />
                    <small> e.g: 123</small>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="text-center my-3">
        <CurrencyFormat
          renderText={(value) => (
            <>
              <h5 className="mb-3">
                Subtotal ({basket.length} item(s)) <br />{" "}
                <strong>Total: {`${value}`}</strong>
              </h5>
            </>
          )}
          decimalScale={2}
          value={getBasketTotal(basket)}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$ "}
        />
        {basket.length > 0 ? (
          <NavLink className="mr-3 btnWebsite" to="/cart">
            <i className="fas fa-shopping-cart"></i> Cart
          </NavLink>
        ) : (
          <NavLink className="mr-3 btnWebsite" to="/product">
            Product Page
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default CheckoutPage;
