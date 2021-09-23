import "../css/CartPage.css";
import "../css/CheckoutPage.css";
import { NavLink } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../reducer";
import CurrencyFormat from "react-currency-format";

const CheckoutPage = () => {
  const [{ basket }, dispatch] = useStateValue();

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
              {basket.map((item, ind) => (
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
                      {" "}
                      <strong> Size:</strong> {item.size}
                    </p>
                    <p>
                      {" "}
                      <strong> Price:</strong> {item.productPrice}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="row p-2">
              <div className="col-md-6 shipping-info">
                <h5>Shipping Information</h5>

                <input type="text" value="" placeholder="Full Name" />
                <input type="email" value="" placeholder="Email" />
                <textarea rows="3" type="text" value="" placeholder="Address" />
                <br />
                <input type="text" value="" placeholder="City" />
                <input type="text" value="" placeholder="Country" />
                <input type="text" value="" placeholder="Postal Code" />
              </div>
              <div className="col-md-6">
                <h5>Payment Information</h5>
                <br />
                <br />
                <NavLink className="btnWebsite" to="">
                  Checkout With PayPal
                </NavLink>
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
        <NavLink className="mr-3 btnWebsite" to="/cart">
          <i className="fas fa-shopping-cart"></i> Cart
        </NavLink>
      </div>
    </div>
  );
};

export default CheckoutPage;
