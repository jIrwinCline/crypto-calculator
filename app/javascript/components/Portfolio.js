import React, { Component } from "react";
import PortfolioItem from "./PortfolioItem";

class Portfolio extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const portfolioItems = this.props.portfolio.map((item, index) => (
      <PortfolioItem key={index} item={item} />
    ));
    const total = this.props.portfolio.reduce(
      (total, curr) => total + curr.value,
      0
    );
    const formatted_total = total
      .toFixed(2)
      .replace(/\d(?=(\d{3})+\.)/g, "$&,");

    return (
      <div>
        <div className="portfolio-value">
          <div className="portfolio-value--header">
            Your Total Portfolio Value Is:
          </div>
          <div className="portfolio-value--content">${formatted_total}</div>
        </div>
        <div className="portfolio-items">{portfolioItems}</div>
      </div>
    );
  }
}

export default Portfolio;

// {"status"=>
//     {
//         "timestamp"=>"2020-04-17T03:32:11.456Z", "error_code"=>0, "error_message"=>nil, "elapsed"=>9, "credit_count"=>1, "notice"=>nil
//     },
// "data"=>{
//     "1"=>{
//         "id"=>1, "name"=>"Bitcoin", "symbol"=>"BTC", "slug"=>"bitcoin", "num_market_pairs"=>7848, "date_added"=>"2013-04-28T00:00:00.000Z", "tags"=>["mineable"], "max_supply"=>21000000, "circulating_supply"=>18329350, "total_supply"=>18329350, "platform"=>nil, "cmc_rank"=>1, "last_updated"=>"2020-04-17T02:08:58.000Z",

//         "quote"=>{"USD"=>{"price"=>7119.96050378, "volume_24h"=>45196989988.6245, "percent_change_1h"=>0.232802, "percent_change_24h"=>7.63233, "percent_change_7d"=>-0.901685, "market_cap"=>130504248059.95995, "last_updated"=>"2020-04-17T02:08:58.000Z"
//         }
//         }
//         }}}
