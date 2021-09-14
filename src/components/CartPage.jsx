import "../css/CartPage.css";
import { NavLink } from "react-router-dom";

const CartPage = () => {
  return (
    <div>
      CartPage <NavLink to="/checkout">Proceed to Checkout</NavLink>{" "}
    </div>
  );
};

export default CartPage;
