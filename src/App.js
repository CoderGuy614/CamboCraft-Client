import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import Product from "./components/Product.js";
import ProductList from "./components/ProductList.js";
import Album from "./components/Album.js";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/Product/:id" component={Product} />
        <Route path="/" component={Album} />
        {/* <Route path="/" component={ProductList} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
