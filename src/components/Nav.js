import React from "react";
import { Link } from "react-router-dom";
import navLogo from "./Images/NavLogo.png";
import axios from "axios";
import ToggleBraColor from "./Icons/ToggleBraColor";
import ToggleOutfitColor from "./Icons/ToggleOutfitColor";
import ToggleBikiniColor from "./Icons/ToggleBikiniColor";
import ToggleDressColor from "./Icons/ToggleDressColor";
import ToggleSkirtColor from "./Icons/ToggleSkirtColor";

class Nav extends React.Component {
  state = {
    categories: [],
    filteredCategories: [],
  };
  componentWillMount() {
    axios
      .get(`${process.env.REACT_APP_API}/categories`)
      .then((dat) =>
        this.setState({
          categories: dat.data,
        })
      )
      .catch((err) => console.log(err));
  }
  filterCategory = (name) => {
    let copy = this.state.filteredCategories;
    if (!this.state.filteredCategories.find((e) => e == name)) {
      copy.push(name);
    } else {
      copy = copy.filter((e) => e != name);
    }
    this.setState({ filteredCategories: copy }, () => {
      if (this.state.filteredCategories.length == 0) {
        this.props.cb(this.props.products);
        return;
      }
      let a = this.props.products.filter((el) => {
        for (let i = 0; i < el.categories.length; i++) {
          for (let j = 0; j < this.state.filteredCategories.length; j++) {
            if (el.categories[i].name == this.state.filteredCategories[j]) {
              return true;
            }
          }
        }
      });
      this.props.cb(a);
    });
  };

  isFilled(name) {
    if (this.state.filteredCategories.find((e) => e == name)) {
      return true;
    } else {
      return false;
    }
  }
  render() {
    return (
      <nav>
        <div className="nav-categories">
          <ul className={this.props.showFilters ? "" : "hidden"}>
            <h2>Choose Types </h2>
            <li
              id="bra"
              onClick={() => {
                this.filterCategory("Shirt");
              }}
            >
              <ToggleBraColor colored={this.isFilled("Shirt")} />
            </li>
            <li
              id="outfit"
              onClick={() => {
                this.filterCategory("Outfit");
              }}
            >
              <ToggleOutfitColor colored={this.isFilled("Outfit")} />
            </li>
            <li
              id="bikini"
              onClick={() => {
                this.filterCategory("Bikini");
              }}
            >
              <ToggleBikiniColor colored={this.isFilled("Bikini")} />
            </li>
            <li
              id="dress"
              onClick={() => {
                this.filterCategory("Dress");
              }}
            >
              <ToggleDressColor colored={this.isFilled("Dress")} />
            </li>
            <li
              id="skirt"
              onClick={() => {
                this.filterCategory("Skirt");
              }}
            >
              <ToggleSkirtColor colored={this.isFilled("Skirt")} />
            </li>
          </ul>
        </div>
        {/* <div>
          <img src={kimlang} alt="by Kimlang in Cambodia" />
        </div> */}
        {/* <div>
          <img src={navList} alt="free delivery in siem reap" />
        </div> */}
      </nav>
    );
  }
}

export default Nav;
