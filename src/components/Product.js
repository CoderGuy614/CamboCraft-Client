import React from "react";
import axios from "axios";
import Loader from "./Loader.js";
import Nav from "./Nav.js";
import Basket from "./Basket.js";
import ProductDetails from "./ProductDetails.js";

class Product extends React.Component {
  state = {
    product: {
      categories: [],
      price: 0,
      likes: 0,
      options: {},
      photos: [],
      avg: 0,
    },

    basketItems: [],
    loading: true,
  };

  constructor(props) {
    super(props);
    this.addToBasket = this.addToBasket.bind(this);
  }

  addToBasket(item) {
    let basketItems = this.state.basketItems;
    basketItems.push(item);
    this.setState({
      basketItems,
    });
  }

  componentWillMount() {
    axios
      .get(
        `${process.env.REACT_APP_API}/products/${this.props.match.params.id}`
      )
      .then((res) => {
        this.setState({
          product: res.data,
          loading: false,
        });
      })
      .catch((err) => {
        console.log({ err });
      });
  }

  rounded = (num) => {
    return num.toFixed(2);
  };

  render() {
    return (
      <>
        <Nav showFilters={false} />
        <div id="product">
          <div>
            <h1>{this.state.product.name}</h1>
            <div id="gallery">
              {this.state.product.photos.map((image, i) => (
                <div
                  key={i}
                  className="photo"
                  style={{ backgroundImage: `url(${image})` }}
                />
              ))}
            </div>
            <ul className="categories">
              {this.state.product.categories.map((category, i) => (
                <li key={i} style={{ background: `${category.color}` }}>
                  {category.name}
                </li>
              ))}
            </ul>
            <div className="info">
              {/* <span className="likes">
                <i className="fas fa-thumbs-up" />
                {this.state.Product.likes}
              </span> */}
              <span className="time">
                <i className="fas fa-clock" />
                Custom Orders: 48 Hours
              </span>
              <br />
              <span className="inStock">
                <i className="fas fa-store" /> In Stock:{" "}
                {this.state.product.inStock}
              </span>
              <br />
              <span className="delivery">
                <i className="fas fa-truck" />
                Free Delivery (Siem Reap)
              </span>
            </div>
          </div>
          <Loader loading={this.state.loading} />
          <ProductDetails
            description={this.state.product.description}
            options={this.state.product.options}
            addToBasket={this.addToBasket}
          />
          <Basket items={this.state.basketItems} />
        </div>
      </>
    );
  }
}

export default Product;
