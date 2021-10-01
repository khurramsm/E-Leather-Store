import "../css/ProductPage.css";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import LeatherColorAcc from "./LeatherColorAcc";
import LeatherTypeAcc from "./LeatherTypeAcc";
import LiningColorAcc from "./LiningColorAcc";
import HardwareColorAcc from "./HardwareColorAcc";
import { useStateValue } from "../StateProvider";
import uuidv4 from "uuid/dist/v4";
import { storage } from "../firebase";

const ProductPage = () => {
  // This scroll page at top on navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //Leather Jacket
  const [leatherColor, setLeatherColor] = useState("No Changes");
  const [leatherType, setLeatherType] = useState("Suitable Leather");
  const [liningColor, setLiningColor] = useState("No Changes");
  const [hardwareColor, setHardwareColor] = useState("No Changes");
  const [gender, setGender] = useState("");
  const [size, setSize] = useState("");
  const [{ basket }, dispatch] = useStateValue();
  const [imageForFirebase, setImageForFirebase] = useState(null);
  const [quantityProduct, setQuantityProduct] = useState(1);

  let productPrice = 250;


  if (quantityProduct >= 10) {
    productPrice = 175;
  }
  if (quantityProduct >= 100) {
    productPrice = 75;
  }

  const incrementQuantity = () => {
    setQuantityProduct( quantityProduct + 1);
  };
  const decrementQuantity = () => {
    setQuantityProduct(quantityProduct - 1);
  };

  //Customize Design
  const [customSizing, setCustomSizing] = useState([]);

  const [sleeves, setSleeves] = useState("");
  const [shoulder, setShoulder] = useState("");
  const [chest, setChest] = useState("");
  const [naturalWaist, setNaturalWaist] = useState("");
  const [backLength, setBackLength] = useState("");
  const [height, setHeight] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onMediaChange = async (event) => {
    if (event.target.files && event.target.files[0]) {
      setIsLoading(true);
      const media = event.target.files[0];
      const storageRef = storage.ref();
      const mediaRef = await storageRef.child(media.name);
      await mediaRef.put(media);
      setImageForFirebase(await mediaRef.getDownloadURL());
      setIsLoading(false);
    }
  };

  const id = uuidv4();
  const productPricingByQuantity = productPrice * quantityProduct;

  const onSizeAdd = () => {
    customSizing.push(
      `Chest: ${chest}`,
      `Height: ${height}`,
      `Sleeves: ${sleeves}`,
      `Natural Waist: ${naturalWaist}`,
      `Back Length: ${backLength}`,
      `Shoulder: ${shoulder}`
    );
    setSleeves("");
    setShoulder("");
    setChest("");
    setNaturalWaist("");
    setBackLength("");
    setHeight("");
  };

  if (
    size === "XS" ||
    size === "S" ||
    size === "M" ||
    size === "L" ||
    size === "XL" ||
    size === "2XL" ||
    size === "3XL"
  ) {
    customSizing.length = 0;
  }

  const onAddToCart = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        leatherColor,
        leatherType,
        liningColor,
        hardwareColor,
        gender,
        size,
        productPrice,
        customSizing,
        imageForFirebase,
        quantityProduct,
        productPricingByQuantity,
      },
    });
  };

  return (
    <div className="product-page container-fluid ">
      <div className="container p-3 mt-1">
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
                onChange={onMediaChange}
                type="file"
                name="profile"
                accept="image/jpeg, image/png"
                className="image-input bg-light"
              />
              {imageForFirebase ? (
                <img
                  className="mt-1 firebase-image"
                  src={imageForFirebase}
                  width="150px"
                  height="150px"
                  alt="custom design"
                />
              ) : (
                ""
              )}
              {isLoading && <i className="fas fa-spinner fa-spin"></i>}
            </div>
            <div>
              <h5>Step 2: Customize Product (Optional)</h5>
              <p>
                Now, tell us how would you like us to customize the leather
                jackets for you? We can customize the jacket’s color, lining,
                studs, embroidery, design, and anything else you can think of!
                So, let us know your requirements and we will make it happen.{" "}
                <br />
                <strong>Note:</strong> The default value of 'No change - As
                shown in the Pictures' means that we will make no change in that
                area on the jacket e.g. 'No Change' in Choosing Leather Color
                means we will take the color as in the images uploaded by you.
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
              {/* <SelectStudsAcc
                studsType={studsType}
                setStudsType={setStudsType}
                setProductPrice={setProductPrice}
                productPrice={productPrice}
              /> */}
            </div>
            <div>
              <h5>Step 3: Select Size</h5>
              <div className="gender">
                <div
                  className="forMen"
                  onClick={() => setGender("Men")}
                  style={{
                    backgroundColor: gender === "Men" ? "#000" : "transparent",
                    color: gender === "Men" ? "#fff" : "#000",
                  }}
                >
                  For Men
                </div>
                <div
                  className="forWoMen"
                  onClick={() => setGender("Women")}
                  style={{
                    backgroundColor:
                      gender === "Women" ? "#000" : "transparent",
                    color: gender === "Women" ? "#fff" : "#000",
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
                  {" "}
                  Customize Size
                </div>
              </div>
              {size === "Customize Size" && (
                <div className="custom-size-fields">
                  <div className="custom-form mt-2">
                    <div className="row">
                      <div className="col-md-4 mb-2 size-column">
                        <label>
                          Chest(in){" "}
                          <input
                            value={chest}
                            onChange={(e) => setChest(e.target.value)}
                            type="number"
                            placeholder="in"
                          />
                        </label>
                      </div>
                      <div className="col-md-4 mb-2 size-column">
                        <label>
                          Sleeves(in){" "}
                          <input
                            value={sleeves}
                            onChange={(e) => setSleeves(e.target.value)}
                            type="number"
                            placeholder="in"
                          />
                        </label>
                      </div>
                      <div className="col-md-4 mb-2 size-column">
                        <label>
                          Shoulder(in){" "}
                          <input
                            value={shoulder}
                            onChange={(e) => setShoulder(e.target.value)}
                            type="number"
                            placeholder="in"
                          />
                        </label>
                      </div>
                      <div className="col-md-4 mb-2 size-column">
                        <label>
                          Natural Waist(in){" "}
                          <input
                            value={naturalWaist}
                            onChange={(e) => setNaturalWaist(e.target.value)}
                            type="number"
                            placeholder="in"
                          />
                        </label>
                      </div>
                      <div className="col-md-4 mb-2 size-column">
                        <label>
                          Back Length(in){" "}
                          <input
                            value={backLength}
                            onChange={(e) => setBackLength(e.target.value)}
                            type="number"
                            placeholder="in"
                          />
                        </label>
                      </div>
                      <div className="col-md-4 mb-2 size-column">
                        <label>
                          Height(in){" "}
                          <input
                            value={height}
                            onChange={(e) => setHeight(e.target.value)}
                            type="number"
                            placeholder="in"
                          />
                        </label>
                      </div>
                      <button className="ml-3 btnWebsite" onClick={onSizeAdd}>
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="text-center mt-5">
              <div className="quantity-product">
                <button onClick={() => decrementQuantity()} className="minus">
                  {" "}
                  -{" "}
                </button>
                <div
                  className="quantity-input"
                  // type="number"
                  // value={quantityProduct}
                  // onChange={(e) => setQuantityProduct(e.target.value)}
                >
                  {quantityProduct}
                </div>
                <button onClick={() => incrementQuantity()} className="plus">
                  {" "}
                  +{" "}
                </button>
              </div>
              <h3>
                Price: <span>${productPrice} / product</span>
                <br />
                Total: <span>${productPricingByQuantity}</span>
                <br />
                <small style={{ fontSize: ".9rem" }}>
                  {
                    "1 > 9 Product(s) Price: $250 || 10 > 99 Products Price: $175 || > 100 Products Price: $75"
                  }
                </small>
              </h3>

              {size === "Customize Size" ? (
                <>
                  {customSizing.length === 0 ||
                  !imageForFirebase ||
                  !gender ||
                  quantityProduct <= 0 ||
                  !size ? (
                    <button className="disBtnWebsite">Add to Cart</button>
                  ) : (
                    <button className="btnWebsite" onClick={onAddToCart}>
                      <i className="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                  )}
                </>
              ) : (
                ""
              )}
              {size !== "Customize Size" ? (
                <>
                  {!imageForFirebase ||
                  !gender ||
                  !size ||
                  quantityProduct <= 0 ? (
                    <button className="disBtnWebsite">Add to Cart</button>
                  ) : (
                    <button className="btnWebsite" onClick={onAddToCart}>
                      <i className="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                  )}
                </>
              ) : (
                ""
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
