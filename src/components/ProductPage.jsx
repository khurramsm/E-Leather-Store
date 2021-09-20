import "../css/ProductPage.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const ProductPage = () => {
  //Leather Jacket
  const [leatherColor, setLeatherColor] = useState(false);
  // const [leatherType, setLeatherType] = useState(false);
  // const [liningColor, setLiningColor] = useState(false);
  // const [hardwareColor, setHardwareColor] = useState(false);
  // const [studsType, setStudsType] = useState(false);
  const [productCart, setProductCart] = useState(0);

  return (
    <div>
      <h2>ProductPage</h2>
      <select name="item" id="item">
        <option value="leather-jacket">leather-jacket</option>
        <option value="leather-lakeland">leather-lakeland</option>
      </select>
      <br />
      <h5>Step 1</h5>
      upload your design
      <h5>Step 2</h5>
      {[
        "Select Leather Color",
        "Select Leather Type",
        "Select Lining Color",
        "Select Hardware Color",
        "Select Studs ",
      ].map((item, ind) => (
        <button
          key={ind}
          className="customizeProductButton"
          onClick={() => setLeatherColor(!leatherColor)}
        >
          {item}
          <span>
            {leatherColor ? (
              <i className="fa fa-chevron-down"></i>
            ) : (
              <i className="fa fa-chevron-up"></i>
            )}
          </span>
        </button>
      ))}
      <h5>Step 3</h5>
      Select your Size
      <br />
      <button onClick={() => setProductCart(productCart + 1)}>
        Add to Cart
      </button>
      <br />
      {productCart > 0 && <NavLink to="/cart">Proceed to Cart</NavLink>}
    </div>
  );
};

export default ProductPage;
