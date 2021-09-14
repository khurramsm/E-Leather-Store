import "../css/HomePage.css";
import { NavLink } from "react-router-dom";
const HomePage = () => {
  return (
    <div>
      HomePage <NavLink to="/product">Start your Order</NavLink>{" "}
    </div>
  );
};

export default HomePage;
