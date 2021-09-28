import { NavLink } from "react-router-dom";
import "../css/FooterPage.css";

const FooterPage = () => {
  return (
    <div className="footer-page container-fluid bg-dark">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-3">
            <h5>About</h5>
            <p className="mb-0">
              Design a one-of-a-kind leather jacket crafted for you and only you
              with LeatherCult's very own Design Your Own Leather Jacket
              service!
            </p>
          </div>
          <div className="col-md-3">
            <h5>Popular Jackets</h5>
            <ul>
              <li>Sheep Leather Jacket</li>
              <li>Bronze Leather Jacket</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Connect</h5>
            <NavLink className="link" to="/contact">
              Contact
            </NavLink>
          </div>
          <div className="col-md-3">
            <h5>Subscribe</h5>
            <form>
              <input type="text" placeholder="Your Email" />
              <button className="subsBtn">Send</button>
            </form>
          </div>
        </div>
        <div className="row">
          <div
            className="col-md-6"
            style={{ display: "flex", alignItems: "center" }}
          >
            <p className="mb-0">Copyright &copy; 2021, C. Leather Jacket</p>
          </div>
          <div className="card-logo col-md-6">
            <i className=" card-logo1 fab fa-cc-visa"></i>
            {/* <i className=" card-logo2 fab fa-cc-paypal"></i> */}
            <i className="card-logo3 fab fa-cc-mastercard"></i>
            {/* <i className="card-logo4 fab fa-cc-stripe"></i> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterPage;
