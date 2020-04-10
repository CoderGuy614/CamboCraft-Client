import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./components/pages/About";
import "./App.css";

import Product from "./components/Product.js";
import Album from "./components/Album.js";
import Checkout from "./components/pages/Checkout";
import TopNavBar from "./components/TopNavBar";

class App extends Component {
  state = {
    basketItems: [],
  };
  addToCart = (items) => {
    this.setState({ basketItems: items });
  };

  render() {
    return (
      <BrowserRouter>
        {/* <TopNavBar /> */}
        <Switch>
          <Route
            path="/product/:id"
            render={(props) => (
              <Product {...props} addToCart={this.addToCart} />
            )}
          />

          <Route exact path="/" render={(props) => <Album />} />
          <Route path="/about" component={About} />
          <Route path="/checkout" component={Checkout} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
