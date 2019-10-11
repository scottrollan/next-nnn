import React, { Component } from "react";
import Layout from "./Layout";
import GrowingConditions from "../components/GrowingConditions";
import CategoryMenu from "../components/CategoryMenu";

class SearchPage extends Component {
  state = {
    search_name: "",
    category: "any",
    soil_ph_acid: false,
    soil_ph_neutral: false,
    soil_ph_alkaline: false,
    soil_type_clay: false,
    soil_type_average: false,
    soil_type_sand: false,
    water_dry: false,
    water_average: false,
    water_wet: false,
    sun_full: false,
    sun_partial: false,
    sun_shade: false,
    foliage_evergreen: false,
    foliage_semievergreen: false,
    foliage_deciduous: false,
    zone: 8
  };

  handleChange = event => {
    event.preventDefault();
    const field = event.target.id;
    this.setState({ [field]: event.target.value });
    setTimeout(() => console.log(field + ": " + this.state[field]), 1000);
  };

  handleCheck = event => {
    const field = event.target.id;
    this.setState(prevState => ({
      [field]: !prevState[field]
    }));
    setTimeout(() => console.log(field + ": " + this.state[field]), 1000);
  };
  render() {
    return (
      <Layout>
        <div style={{ textAlign: "center" }}>
          <label htmlFor="search_name">
            <h5>Search Botanical Name or Common Name: &nbsp;</h5>
          </label>
          <input
            type="text"
            id="search_name"
            onChange={this.handleChange}
            style={{ backgroundColor: '#e3e3e3', padding: '0 8px' }}
          ></input>
          <GrowingConditions handleCheck={this.handleCheck} />
          <h5><CategoryMenu
            category={this.state.category}
            handleChange={this.handleChange}
          /></h5>
          <span>
            <div>
            <label htmlFor="zone"><h5>USDA Hardiness Zone</h5></label>
            </div>
            <input
              type="number"
              id="zone"
              min="1"
              max="13"
              value={this.state.zone}
              onChange={this.handleChange}
            />
            
          </span>
        </div>
      </Layout>
    );
  }
}

export default SearchPage;
