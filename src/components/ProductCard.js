import React from "react";
import { Link } from "react-router-dom";

export default class ProductCard extends React.Component {
  render() {
    let product = this.props.product;

    return (
      <Link to={`/product/${product._id}`} className="product">
        <div
          className="photo"
          style={{ backgroundImage: `url(${product.photos[0]})` }}
        />
        <h3>{product.name}</h3>
        {
          <>
            <ul className="categories">
              {product.categories.map((e, i) => {
                return (
                  <li key={i} style={{ background: `${e.color}` }}>
                    {e.name}
                  </li>
                );
              })}
            </ul>

            <div className="info">
              <span className="price">
                <i className="fas fa-dollar-sign" /> {product.avg.toFixed(2)}
              </span>
              <span className="inStock">
                <i className="fas fa-store" /> In Stock: {product.inStock}
              </span>
              <br />
              <span className="time">
                <i className="fas fa-truck" />
                Free Delivery
              </span>
            </div>
          </>
        }
      </Link>
    );
  }
}
