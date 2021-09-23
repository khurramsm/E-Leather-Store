import "../css/HomePage.css";
import { NavLink } from "react-router-dom";
import JacketLeather from "../images/leatherJacket.jpg";

const HomePage = () => {
  return (
    <div className="homePage container">
      <div className="row">
        <div className="col-md-4 product-image">
          <img src={JacketLeather} alt="Leather Jacket" />
        </div>
        <div className="col-md-8 product-content">
          <div className="product-details">
            <h2 className="product-title">
              DESIGN YOUR OWN CUSTOM LEATHER JACKET
            </h2>
            <h2 className="product-price">
              <strong>$220</strong>
            </h2>
            <p className="product-desc">
              Design a one-of-a-kind leather jacket crafted for you and only you
              with LeatherCult's very own Design Your Own Leather Jacket
              service! With Leather Cult, you can bring your leather jacket idea
              to life by simply sending our expert leather craftsman your
              measurements and your vision with clear photos or sketches.
              <br />
              Whatever your reason, Leather Cult can craft the perfect custom
              leather jacket for you featuring leather made from soft, supple,
              and pure Napa sheepskin. PLEASE NOTE: During replication, there
              may be some discrepancies between your design idea and the actual
              product. <br /> We guarantee we'll do our best to create an
              accurate duplicate of your vision. If we are unable to accept your
              design for any reason, we'll give you a full refund of the
              purchase price - no questions asked. Ready to get a custom jacket
              handcrafted by our expert team?
            </p>
          </div>
          <NavLink to="/product" className="btnWebsite">
            Start your Order
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
