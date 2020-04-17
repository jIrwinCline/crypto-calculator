import React, { Component } from "react";
import Search from "./Search";
import Calculate from "./Calculate";
import Portfolio from "./Portfolio";

import axios from "axios";

class PortfolioContainer extends Component {
  state = {
    portfolio: [],
    search_results: [],
    active_currency: null,
    amount: "",
  };

  render() {
    return <div className="grid"></div>;
  }
}

export default PortfolioContainer;
