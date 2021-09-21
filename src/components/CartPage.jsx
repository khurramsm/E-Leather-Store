import "../css/CartPage.css";
import { NavLink } from "react-router-dom";

const CartPage = () => {
  return (
    <div className="cart-page">
      <NavLink className="btnWebsite" to="/checkout">
        Proceed to Checkout
      </NavLink>
    </div>
  );
};

export default CartPage;
