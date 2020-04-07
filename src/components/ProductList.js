import React from "react";
import Loader from "./Loader.js";
import Nav from "./Nav.js";
import ProductCard from "./ProductCard.js";
import { Link } from "react-router-dom";
import axios from "axios";

export default class ProductList extends React.Component {
  state = {
    loading: true,
    products: [],
    allproducts: [],
  };
  filterProducts = (filtered) => {
    this.setState({ products: filtered });
  };

  componentWillMount() {
    axios
      .get(`${process.env.REACT_APP_API}/products`)
      .then((dat) =>
        this.setState({
          products: dat.data,
          allproducts: dat.data,
          loading: false,
        })
      )
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <>
        <Nav
          showFilters="true"
          products={this.state.allproducts}
          cb={this.filterProducts}
        />
        <div id="page">
          <Loader loading={this.state.loading} />
          {this.state.products.map((e, index) => {
            return <ProductCard key={index} product={e} />;
          })}
        </div>
      </>
    );
  }
}
