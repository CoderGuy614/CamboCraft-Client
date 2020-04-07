import React from "react";

class Loader extends React.Component {
  render() {
    return (
      <div id="loader" className={this.props.loading ? "" : "hidden"}>
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" />
        </svg>
      </div>
    );
  }
}

export default Loader;
