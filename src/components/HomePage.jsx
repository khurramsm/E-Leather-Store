import "../css/HomePage.css";
import { NavLink } from "react-router-dom";
const HomePage = () => {
  return (
    <div className="homePage">
      <div className="product-image">
        <img
          src="https://luckyleather.com.pk/wp-content/uploads/2018/09/Johnson_Mens_Leather_Jacket__25775_zoom.jpg"
          alt="product"
        />
      </div>
      <div className="product-content">
        <div className="product-details">
          Title
          <br />
          Description
          <br />
          Stock
          <br />
          Brand
          <br />
          Price
        </div>
        <NavLink to="/product" className="startOrder">
          Start your Order
        </NavLink>
      </div>
    </div>
  );
};

export default HomePage;
