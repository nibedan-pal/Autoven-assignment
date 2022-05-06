import React from "react";
import "./App.css";
import "./responsive.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/productScreen";
import CategoriesScreen from "./screens/CategoriesScreen";
import OrderScreen from "./screens/OrderScreen";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/products" component={ProductScreen} />
          <Route path="/category" component={CategoriesScreen} />
          <Route path="/orders" component={OrderScreen} />
      
        </Switch>
      </Router>
    </>
  );
}

export default App;
