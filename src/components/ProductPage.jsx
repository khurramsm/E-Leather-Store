import "../css/ProductPage.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const ProductPage = () => {
  //Leather Jacket
  const [leatherColor, setLeatherColor] = useState(false);
  const [leatherType, setLeatherType] = useState(false);
  const [liningColor, setLiningColor] = useState(false);
  const [hardwareColor, setHardwareColor] = useState(false);
  const [studsType, setStudsType] = useState(false);
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
      <button
        className="customizeProductButton"
        onClick={() => setLeatherColor(!leatherColor)}
      >
        Select Leather Color <span>{leatherColor ? "^" : ">"}</span>
      </button>
      <button
        className="customizeProductButton"
        onClick={() => setLeatherType(!leatherType)}
      >
        Select Leather Type <span>{"^"}</span>
      </button>
      <button
        className="customizeProductButton"
        onClick={() => setLiningColor(!liningColor)}
      >
        Select Lining Color <span>{"^"}</span>
      </button>
      <button
        className="customizeProductButton"
        onClick={() => setHardwareColor(!hardwareColor)}
      >
        Select Hardware Color <span>{"^"}</span>
      </button>
      <button
        className="customizeProductButton"
        onClick={() => setStudsType(!studsType)}
      >
        Select Studs <span>{"^"}</span>
      </button>
      <br />
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
