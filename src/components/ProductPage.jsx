import "../css/ProductPage.css";
import { NavLink } from "react-router-dom";
import {useState} from "react";

const ProductPage = () => {
  //Leather Jacket
  const [leatherColor, setLeatherColor] = useState(false);
  const [leatherType, setLeatherType] = useState(false);
  const [liningColor, setLiningColor] = useState(false);
  const [hardwareColor, setHardwareColor] = useState(false);
  const [studsType, setStudsType] = useState(false);
  
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
