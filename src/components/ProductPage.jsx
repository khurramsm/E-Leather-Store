import "../css/ProductPage.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import LeatherColorAcc from "./LeatherColorAcc";
import LeatherTypeAcc from "./LeatherTypeAcc";
import LiningColorAcc from "./LiningColorAcc";
import HardwareColorAcc from "./HardwareColorAcc";
import SelectStudsAcc from "./SelectStudsAcc";

const ProductPage = ({ setCart, cart }) => {
  //Leather Jacket
  const [leatherColor, setLeatherColor] = useState("");
  const [leatherType, setLeatherType] = useState("");
  const [liningColor, setLiningColor] = useState("");
  const [hardwareColor, setHardwareColor] = useState("");
  const [studsType, setStudsType] = useState("");
  const [men, women] = useState("");

  return (
    <div className="product-page container-fluid ">
      <div className="container p-3">
        <h2 className="text-center">Design Your Custom Leather Jacket Now!</h2>
        <div className="row prow py-3">
          <div className="col-md-12">
            <div>
              <h5>Step 1: Upload Images</h5>
              <p>
                Upload the image of the leather jacket you want to customize.
                You can also explain the changes you want in the images and
                attach them to this section. Leather Jacket selection can be
                from our website OR you can upload any design from the internet
                and we will customize the leather jackets for you. excited?
              </p>
            </div>
            <div>
              <h5>Step 2: Customize Product (Optional)</h5>
              <p>
                Now, tell us how would you like us to customize the leather
                jackets for you? We can customize the jacket’s color, lining,
                studs, embroidery, design, and anything else you can think of!
                So, let us know your requirements and we will make it happen.{" "}
                <br />
                <strong>Note:</strong>The default value of 'No change - As shown
                in the Pictures' means that we will make no change in that area
                on the jacket e.g. 'No Change' in Choosing Leather Color means
                we will take the color as in the images uploaded by you.
              </p>
              <LeatherColorAcc
                leatherColor={leatherColor}
                setLeatherColor={setLeatherColor}
              />
              <LeatherTypeAcc
                leatherType={leatherType}
                setLeatherType={setLeatherType}
              />
              <LiningColorAcc
                liningColor={liningColor}
                setLiningColor={setLiningColor}
              />
              <HardwareColorAcc
                hardwareColor={hardwareColor}
                setHardwareColor={setHardwareColor}
              />
              <SelectStudsAcc
                studsType={studsType}
                setStudsType={setStudsType}
              />
            </div>
            <div>
              <h5>Step 3: Select Size</h5>
              <div className="gender">
                <div className="forMen">For Men</div>
                <div className="forWoMen">For Women</div>
              </div>
              <div className="my-2">
                <small>Size Chart</small>
                <div className="size-boxes">
                  <div className="box">XS</div>
                  <div className="box">S</div>
                  <div className="box">M</div>
                  <div className="box">L</div>
                  <div className="box">XL</div>
                  <div className="box">2XL</div>
                  <div className="box">3XL</div>
                  <div className="box custom-box">Customize Size</div>
                </div>
              </div>
              <div className="custom-size-fields">
                <div className="box">IN</div>
              </div>
            </div>
            <div className="text-center">
              <button className="btnWebsite" onClick={() => setCart(cart + 1)}>
                Add to Cart
              </button>
              <br />
              <br />
              {cart > 0 && (
                <NavLink className="btnWebsite" to="/cart">
                  Proceed to Cart
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
