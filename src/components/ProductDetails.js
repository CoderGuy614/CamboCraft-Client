import React from "react";

export default class ProductDetails extends React.Component {
  state = {
    options: {
      productOptions: [],
    },
  };

  componentWillReceiveProps(props) {
    this.setState({
      description: props.description,
      options: props.options,
    });
  }

  render() {
    return (
      <div id="menu">
        <h2>Details</h2>
        {this.state.description}
        {this.state.options.productOptions.map((itemVariant, i) => {
          return (
            <React.Fragment key={i}>
              <h3>{itemVariant.name}</h3>
              <ul>
                {itemVariant.items.map((item, i) => {
                  return (
                    <li key={i}>
                      <span className="name">{item.name}</span>
                      <span className="price">
                        ${item.price}
                        <i
                          className="fas fa-plus"
                          onClick={(e) => this.props.addToBasket(item)}
                        />
                      </span>
                    </li>
                  );
                })}
              </ul>
            </React.Fragment>
          );
        })}
      </div>
    );
  }
}
