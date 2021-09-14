import "../css/ProductPage.css";
import { NavLink } from "react-router-dom";

const ProductPage = () => {
  return (
    <div>
      ProductPage{" "}
      <select name="item" id="item">
        <option value="leather-jacket">leather-jacket</option>
        <option value="leather-lakeland">leather-lakeland</option>
      </select>{" "}
      <button>Add to Cart</button>
      <NavLink to="/cart">Proceed to Cart</NavLink>
    </div>
  );
};

export default ProductPage;
