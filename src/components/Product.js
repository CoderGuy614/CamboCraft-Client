import React from "react";
import axios from "axios";
import Loader from "./Loader.js";
import Basket from "./Basket.js";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import ProductDetails from "./ProductDetails.js";

class Product extends React.Component {
  state = {
    currentImg: "",
    open: false,
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

  handleOpen = (img) => {
    this.setState({ open: true, currentImg: img });
  };
  handleClose = () => {
    this.setState({ open: false });
  };

  // componentWillReceiveProps(props) {
  //   this.setState({ addToCart: props.addToCart });
  // }

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
        <div id="product">
          <div>
            <Button variant="outlined" href="/" color="primary">
              Go Back
            </Button>
            <h1>{this.state.product.name}</h1>
            <div id="gallery">
              {this.state.product.photos.map((image, i) => (
                <div
                  key={i}
                  className="photo"
                  style={{ backgroundImage: `url(${image})` }}
                  onClick={() => this.handleOpen(image)}
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
          <Dialog
            maxWidth="sm"
            modal={true}
            open={this.state.open}
            onRequestClose={this.handleClose}
          >
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Close
              </Button>
            </DialogActions>
            <img
              src={this.state.currentImg}
              alt=""
              style={{ width: "100%" }}
              onClick={this.handleClose}
            />
          </Dialog>

          {/* <button
            onClick={() => this.props.addToCart(this.state.basketItems)}
            id="addButton"
          >
            Add Items to Shopping Cart
          </button> */}

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
