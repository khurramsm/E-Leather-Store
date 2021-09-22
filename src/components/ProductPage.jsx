import "../css/ProductPage.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import LeatherColorAcc from "./LeatherColorAcc";
import LeatherTypeAcc from "./LeatherTypeAcc";
import LiningColorAcc from "./LiningColorAcc";
import HardwareColorAcc from "./HardwareColorAcc";
import SelectStudsAcc from "./SelectStudsAcc";
import { useStateValue } from "../StateProvider";

const ProductPage = () => {
  //Leather Jacket
  const [leatherColor, setLeatherColor] = useState("");
  const [leatherType, setLeatherType] = useState("");
  const [liningColor, setLiningColor] = useState("");
  const [hardwareColor, setHardwareColor] = useState("");
  const [customDesignImage, setCustomDesignImage] = useState(null);
  const [studsType, setStudsType] = useState("");
  const [gender, setGender] = useState("");
  const [size, setSize] = useState("");
  const [{ basket }, dispatch] = useStateValue();
  const [productPrice, setProductPrice] = useState(220);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setCustomDesignImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  const onAddToCart = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        leatherColor,
        leatherType,
        liningColor,
        hardwareColor,
        studsType,
        customDesignImage,
        gender,
        size,
        productPrice,
      },
    });
    console.log(basket);
  };

  return (
    <div className="product-page container-fluid ">
      <div className="container p-3">
        <h2 className="text-center">Design Your Custom Leather Jacket Now!</h2>
        <div className="row prow py-3">
          <div className="col-md-12">
            <div>
              <h5>Step 1: Upload Image</h5>
              <p>
                Upload the image of the leather jacket you want to customize.
                You can also explain the changes you want in the images and
                attach them to this section. Leather Jacket selection can be
                from our website OR you can upload any design from the internet
                and we will customize the leather jackets for you. excited?
              </p>
              <input
                onChange={onImageChange}
                type="file"
                name="profile"
                accept="image/jpeg, image/png"
              />
              {customDesignImage ? (
                <img
                  className="mt-1"
                  src={customDesignImage}
                  width="100px"
                  height="100px"
                  alt="custom design"
                />
              ) : (
                ""
              )}
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
                setProductPrice={setProductPrice}
                productPrice={productPrice}
              />
            </div>
            <div>
              <h5>Step 3: Select Size</h5>
              <div className="gender">
                <div
                  className="forMen"
                  onClick={() => setGender("men")}
                  style={{
                    backgroundColor: gender === "men" ? "#000" : "transparent",
                    color: gender === "men" ? "#fff" : "#000",
                  }}
                >
                  For Men
                </div>
                <div
                  className="forWoMen"
                  onClick={() => setGender("women")}
                  style={{
                    backgroundColor:
                      gender === "women" ? "#000" : "transparent",
                    color: gender === "women" ? "#fff" : "#000",
                  }}
                >
                  For Women
                </div>
              </div>
              <div className="my-2">
                <small>Size Chart</small>
                <div className="size-boxes">
                  <div
                    className="box"
                    onClick={() => setSize("XS")}
                    style={{
                      backgroundColor: size === "XS" ? "#000" : "transparent",
                      color: size === "XS" ? "#fff" : "#000",
                    }}
                  >
                    XS
                  </div>
                  <div
                    className="box"
                    onClick={() => setSize("S")}
                    style={{
                      backgroundColor: size === "S" ? "#000" : "transparent",
                      color: size === "S" ? "#fff" : "#000",
                    }}
                  >
                    S
                  </div>
                  <div
                    className="box"
                    onClick={() => setSize("M")}
                    style={{
                      backgroundColor: size === "M" ? "#000" : "transparent",
                      color: size === "M" ? "#fff" : "#000",
                    }}
                  >
                    M
                  </div>
                  <div
                    className="box"
                    onClick={() => setSize("L")}
                    style={{
                      backgroundColor: size === "L" ? "#000" : "transparent",
                      color: size === "L" ? "#fff" : "#000",
                    }}
                  >
                    L
                  </div>
                  <div
                    className="box"
                    onClick={() => setSize("XL")}
                    style={{
                      backgroundColor: size === "XL" ? "#000" : "transparent",
                      color: size === "XL" ? "#fff" : "#000",
                    }}
                  >
                    XL
                  </div>
                  <div
                    className="box"
                    onClick={() => setSize("2XL")}
                    style={{
                      backgroundColor: size === "2XL" ? "#000" : "transparent",
                      color: size === "2XL" ? "#fff" : "#000",
                    }}
                  >
                    2XL
                  </div>
                  <div
                    className="box"
                    onClick={() => setSize("3XL")}
                    style={{
                      backgroundColor: size === "3XL" ? "#000" : "transparent",
                      color: size === "3XL" ? "#fff" : "#000",
                    }}
                  >
                    3XL
                  </div>
                </div>
                <div
                  className="box custom-box"
                  onClick={() => setSize("Customize Size")}
                  style={{
                    backgroundColor:
                      size === "Customize Size" ? "#000" : "transparent",
                    color: size === "Customize Size" ? "#fff" : "#000",
                  }}
                >
                  Customize Size
                </div>
              </div>
              {size === "Customize Size" && (
                <div className="custom-size-fields">
                  <div className="custom-form mt-2">
                    <div className="row">
                      <div className="col-md-4 mb-2 size-column">
                        <label>
                          Chest(in) <input type="number" placeholder="in" />
                        </label>
                      </div>
                      <div className="col-md-4 mb-2 size-column">
                        <label>
                          Sleeves(in) <input type="number" placeholder="in" />
                        </label>
                      </div>
                      <div className="col-md-4 mb-2 size-column">
                        <label>
                          Shoulder(in) <input type="number" placeholder="in" />
                        </label>
                      </div>
                      <div className="col-md-4 mb-2 size-column">
                        <label>
                          Natural Waist(in){" "}
                          <input type="number" placeholder="in" />
                        </label>
                      </div>
                      <div className="col-md-4 mb-2 size-column">
                        <label>
                          Back Length(in){" "}
                          <input type="number" placeholder="in" />
                        </label>
                      </div>
                      <div className="col-md-4 mb-2 size-column">
                        <label>
                          Height(in) <input type="number" placeholder="in" />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="text-center mt-5">
              <h3>
                Total: <span>${productPrice}</span>{" "}
              </h3>
              {!customDesignImage || !gender || !size ? (
                <button className="disBtnWebsite">Add to Cart</button>
              ) : (
                <button className="btnWebsite" onClick={onAddToCart}>
                  Add to Cart
                </button>
              )}

              <br />
              <br />
              {basket.length > 0 && (
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
