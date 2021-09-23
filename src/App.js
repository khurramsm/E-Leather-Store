import HomePage from "./components/HomePage";
import ProductPage from "./components/ProductPage";
import CartPage from "./components/CartPage";
import CheckoutPage from "./components/CheckoutPage";
import ContactPage from "./components/ContactPage";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import FooterPage from "./components/FooterPage";
// import { useState } from "react";

function App() {
  return (
    <div className="main-board">
      <Navigation />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/product" component={ProductPage} />
        <Route exact path="/cart" component={CartPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route exact path="/contact" component={ContactPage} />
      </Switch>
      <FooterPage />
    </div>
  );
}

export default App;
