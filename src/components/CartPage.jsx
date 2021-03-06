import "../css/CartPage.css";
import { NavLink } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../reducer";
import CurrencyFormat from "react-currency-format";
import { useEffect } from "react";

const CartPage = () => {
  const [{ basket }, dispatch] = useStateValue();

  // This scroll page at top on navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const removeFromCart = (id) => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id,
    });
  };

  return (
    <div className="cart-page">
      {basket?.length === 0 ? (
        <div>
          <h2 className="text-center basket_heading my-5">
            Your Basket is Empty :(
          </h2>
        </div>
      ) : (
        <div>
          <h2 className="text-center basket_heading my-5">
            Your Shopping Basket
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
                    <strong
                      style={{ color: "crimson", cursor: "pointer" }}
                      className="removeBtn text-center"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <i className="fa fa-times"></i>
                      {"  "}Remove
                    </strong>
                  </div>
                );
              })}
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
        <NavLink className="mr-3 btnWebsite" to="/product">
          Product Page
        </NavLink>
        <br />
        <br />
        {basket.length > 0 && (
          <NavLink className="btnWebsite" to="/checkout">
            Proceed to Checkout
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default CartPage;
