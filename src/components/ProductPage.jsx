import "../css/ProductPage.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import ProductCustomAcc from "./ProductCustomAcc";

const ProductPage = ({ setCart, cart }) => {
  //Leather Jacket
  const [leatherColor, setLeatherColor] = useState(false);
  // const [leatherType, setLeatherType] = useState(false);
  // const [liningColor, setLiningColor] = useState(false);
  // const [hardwareColor, setHardwareColor] = useState(false);
  // const [studsType, setStudsType] = useState(false);
  // const [productCart, setProductCart] = useState(0);

  return (
    <div className="product-page container-fluid ">
      <div className="container p-3 ">
        <div className="row  py-3">
          <div className="col-md-12">
            <h5>Step 1</h5>
            upload your design
            <h5>Step 2</h5>
            <ProductCustomAcc accTitle={"Select Leather Color"} />
            <ProductCustomAcc accTitle={"Select Leather Type"} />
            <ProductCustomAcc accTitle={"Select Lining Color"} />
            <ProductCustomAcc accTitle={"Select Hardware Color"} />
            <ProductCustomAcc accTitle={"Select Studs "} />
            <h5>Step 3</h5>
            Select your Size
            <br />
            <button onClick={() => setCart(cart + 1)}>Add to Cart</button>
            <br />
            {cart > 0 && <NavLink to="/cart">Proceed to Cart</NavLink>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
