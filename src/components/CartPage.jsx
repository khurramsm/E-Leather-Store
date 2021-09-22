import "../css/CartPage.css";
import { NavLink } from "react-router-dom";
import { useStateValue } from "../StateProvider";

const CartPage = () => {
  const [{ basket }] = useStateValue();

  return (
    <div className="cart-page">
      {basket?.length === 0 ? (
        <div>
          <h2 className="text-center basket__heading my-5">
            Your Basket is Empty :(
          </h2>
        </div>
      ) : (
        <div>
          <h2 className="text-center basket__heading my-5">
            Your Shopping Basket
          </h2>
          {basket.map((item, ind) => (
            <div className="mb-4" key={ind}>
              <h2>Leather Color: {item.leatherColor}</h2>
              <h2>Leather Type: {item.leatherType}</h2>
              <h2>Lining Color: {item.liningColor}</h2>
              <h2>Hardware Color: {item.hardwareColor}</h2>
              <h2>Studs Type: {item.studsType}</h2>
              <h2>Gender: {item.gender}</h2>
              <h2>Size: {item.size}</h2>
              <h2>Price: {item.productPrice}</h2>
              <img
                width="100px"
                height="100px"
                src={item.customDesignImage}
                alt=""
              />
            </div>
          ))}
        </div>
      )}
      <div className="text-center">
        <NavLink className="mr-3 btnWebsite" to="/product">
          Product Page
        </NavLink>
        <NavLink className="btnWebsite" to="/checkout">
          Proceed to Checkout
        </NavLink>
      </div>
    </div>
  );
};

export default CartPage;
