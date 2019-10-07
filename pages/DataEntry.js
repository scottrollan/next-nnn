import React, { Component } from "react";

class DataEntry extends Component {
  state = {
    in_stock: false,
    botanical_name: "",
    regional_name: "",
    common_name: "",
    category: "Ferns",
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
    description: "",
    zone_high: 0,
    container_1_size: "",
    container_1_price: 0,
    container_1_notes: "",
    container_2_size: "",
    container_2_price: 0,
    container_2_notes: "",
    container_3_size: "",
    container_3_price: 0,
    container_3_notes: "",
    container_4_size: "",
    container_4_price: 0,
    container_4_notes: ""
  };

  handleSubmit = (event) => {
      event.preventDefault();
    console.log(this.state)
  }
  handleChange = event => {
    event.preventDefault();
    this.setState({ [event.target.id]: event.target.value });
  };
  handleCheck = event => {
    const field = event.target.id
    this.setState(prevState => ({
        [field]: !prevState[field]
      }));
      setTimeout(() => (console.log(field + ": " + this.state[field])), 1000);
  };
  render() {
    return (
      <div className="page">
        <form style={{ margin: "2vh 10vw", width: "80vw" }}>
          <fieldset>
            <div
              className="spacedRow col1"
              style={{
                padding: "0 2vw 1vh",
                boxSizing: "border-box",
                disply: "block"
              }}
            >
              <span
                className="spacedRow indent0 col3"
                style={{ display: "inline-block" }}
              >
                <div>
                  <label htmlFor="botanical_name">Botanical name</label>
                </div>
                <div>
                  <input type="text" id="botanical_name" onChange={this.handleChange}></input>
                </div>
                <br />
                <div>
                  <label htmlFor="regional_name">Regional name</label>
                </div>
                <div>
                  <input type="text" id="regional_name" onChange={this.handleChange}></input>
                </div>
              </span>

              <span
                className="spacedRow indent40 col3"
                style={{ display: "inline-block" }}
              >
                <div>
                  <label htmlFor="variety">Variety</label>
                </div>
                <div>
                  <input type="text" id="variety" onChange={this.handleChange}></input>
                </div>
                <br />
                <div>
                  <label htmlFor="common_name">Common name</label>
                </div>
                <div>
                  <input type="text" id="common_name" onChange={this.handleChange}></input>
                </div>
              </span>

              <span
                className="spacedRow indent70"
                style={{ display: "inline-block" }}
              >
                <div>
                  <label htmlFor="category">Category</label>
                </div>
                <div>
                  <select id="category" onChange={this.handleChange}>
                    <option value="Ferns">Ferns</option>
                    <option value="Grasses">Grasses</option>
                    <option value="Opuntia">Opuntia</option>
                    <option value="Palms">Palms</option>
                    <option value="Perennials">Perennials</option>
                    <option value="Seeds">Seeds</option>
                    <option value="Shrubs">Shrubs</option>
                    <option value="Trees">Trees</option>
                    <option value="Vines">Vines</option>
                    <option value="Yucca">Yucca</option>
                  </select>
                </div>
                <br />
                <div>
                  <label htmlFor="zone_low">from Zone: </label>
                </div>
                <div>
                  <input type="number" id="zone_low" min="1" max="12" onChange={this.handleChange}/>
                </div>
                <div>
                  <label htmlFor="zone_high">to Zone: </label>
                </div>
                <div>
                  <input type="number" id="zone_high" min="2" max="13" onChange={this.handleChange}/>
                </div>
              </span>
            </div>

            <div className="spacedRow">
              <span>
                <label htmlFor="in_stock">In stock?</label>
                <input
                  type="checkbox"
                  className="checkboxStyle"
                  id="in_stock"
                  onChange={this.handleCheck}
                ></input>
              </span>
            </div>

            <div className="spacedRow col1">
              <label htmlFor="description"></label>

              <textarea
                rows="8"
                id="description"
                className="indent0 col1"
                placeholder="Description..."
              />
            </div>

            <div
              className="spacedRow col1"
              style={{
                padding: "0 2vw 1vh",
                boxSizing: "border-box",
                border: "1px solid #cccccc"
              }}
            >
              <span
                className="spacedRow indent0 col5"
                style={{ display: "inline-block" }}
              >
                <div>Soil Ph</div>
                <div>
                  <input type="checkbox" id="soil_ph_acid" onChange={this.handleCheck}></input>
                  <label htmlFor="soil_ph_acid">acid</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="soil_ph_neutral"
                    onChange={this.handleCheck}
                  ></input>
                  <label htmlFor="soil_ph_neutral">neutral</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="soil_ph_alkaline"
                    onChange={this.handleCheck}
                  ></input>
                  <label htmlFor="soil_ph_alkaline">alkaline</label>
                </div>
              </span>

              <span className="spacedRow indent25 col5">
                <div>Soil Type</div>
                <div>
                  <input type="checkbox" id="soil_type_clay" onChange={this.handleCheck}></input>
                  <label htmlFor="soil_type_clay">clay</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="soil_type_average"
                    onChange={this.handleCheck}
                  ></input>
                  <label htmlFor="soil_type_average">average</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="soil_type_sand"
                    onChange={this.handleCheck}
                  ></input>
                  <label htmlFor="soil_type_sand">sand</label>
                </div>
              </span>

              <span className="spacedRow indent40 col5">
                <div>Water</div>
                <div>
                  <input type="checkbox" id="water_wet" onChange={this.handleCheck}></input>
                  <label htmlFor="water_wet">wet</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="water_average"
                    onChange={this.handleCheck}
                  ></input>
                  <label htmlFor="water_average">average</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    onChange={this.handleCheck}
                    id="water_dry"
                  ></input>
                  <label htmlFor="water_dry">dry</label>
                </div>
              </span>

              <span className="spacedRow indent55 col5">
                <div>Sun Exposure</div>
                <div>
                  <input type="checkbox" id="sun_full" onChange={this.handleCheck}></input>
                  <label htmlFor="sun_full">full</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="sun_partial"
                    onChange={this.handleCheck}
                  ></input>
                  <label htmlFor="sun_partial">partial</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="sun_shade"
                    onChange={this.handleCheck}
                  ></input>
                  <label htmlFor="sun_shade">shade</label>
                </div>
              </span>

              <span className="spacedRow indent70 col5">
                <div>Foliage</div>
                <div>
                  <input type="checkbox" id="foliage_evergreen" onChange={this.handleCheck}></input>
                  <label htmlFor="foliage_evergreen">evergreen</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="foliage_semievergreen"
                    onChange={this.handleCheck}
                  ></input>
                  <label htmlFor="foliage_semievergreen">semi-evergreen</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="foliage_deciduous"
                    onChange={this.handleCheck}
                  ></input>
                  <label htmlFor="foliage_deciduous">deciduous</label>
                </div>
              </span>
            </div>

            <div
              className="spacedRow col1"
              style={{
                boxSizing: "border-box",
                backgroundColor: "rgba(200, 200, 200, 0.5)",
                borderRadius: "1vw",
                padding: "0 2vw 1vh"
              }}
            >
              <div>
                <span className="indent0">
                  <label htmlFor="container_1_size">
                    First container size:{" "}
                  </label>
                </span>
                <span className="indent50">
                  <label htmlFor="container_1_price">
                    First container price:
                  </label>
                </span>
              </div>

              <div>
                <span className="indent0">
                  <input type="text" id="container_1_size" onChange={this.handleChange}></input>
                </span>
                <span className="indent50">
                  <input
                    type="number"
                    step="0.01"
                    id="container_1_price"
                    placeholder="$"
                    onChange={this.handleChange}
                  ></input>
                </span>
              </div>

              <div className="spacedRow col1">
                <span className="indent0">
                  <label htmlFor="container_1_notes">
                    <textarea
                      className="col1"
                      placeholder="notes for first container size"
                      rows="2"
                      id="container_1_notes"
                      onChange={this.handleChange}
                    />
                  </label>
                </span>
              </div>
            </div>
            <hr />
            <div
              className="spacedRow col1"
              style={{
                boxSizing: "border-box",
                backgroundColor: "rgba(200, 200, 200, 0.5)",
                borderRadius: "1vw",
                padding: "0 2vw 1vh"
              }}
            >
              <div>
                <span className="indent0">
                  <label htmlFor="container_2_size">
                    Second container size:{" "}
                  </label>
                </span>
                <span className="indent50">
                  <label htmlFor="container_2_price">
                    Second container price:
                  </label>
                </span>
              </div>

              <div>
                <span className="indent0">
                  <input type="text" id="container_2_size" onChange={this.handleChange}></input>
                </span>
                <span className="indent50">
                  <input
                    type="number"
                    step="0.01"
                    id="container_2_price"
                    placeholder="$"
                    onChange={this.handleChange}
                  ></input>
                </span>
              </div>

              <div className="spacedRow col1">
                <span className="indent0">
                  <label htmlFor="container_2_notes">
                    <textarea
                      className="col1"
                      placeholder="notes for second container size"
                      rows="2"
                      id="container_2_notes"
                      onChange={this.handleChange}
                    />
                  </label>
                </span>
              </div>
            </div>
            <hr />

            <div
              className="spacedRow col1"
              style={{
                boxSizing: "border-box",
                backgroundColor: "rgba(200, 200, 200, 0.5)",
                borderRadius: "1vw",
                padding: "0 2vw 1vh"
              }}
            >
              <div>
                <span className="indent0">
                  <label htmlFor="container_3_size">
                    Third container size:{" "}
                  </label>
                </span>
                <span className="indent50">
                  <label htmlFor="container_3_price">
                    Third container price:
                  </label>
                </span>
              </div>

              <div>
                <span className="indent0">
                  <input type="text" id="container_3_size" onChange={this.handleChange}></input>
                </span>
                <span className="indent50">
                  <input
                    type="number"
                    step="0.01"
                    id="container_3_price"
                    placeholder="$"
                    onChange={this.handleChange}
                  ></input>
                </span>
              </div>

              <div className="spacedRow col1">
                <span className="indent0">
                  <label htmlFor="container_3_notes">
                    <textarea
                      className="col1"
                      placeholder="notes for third container size"
                      rows="2"
                      id="container_3_notes"
                      onChange={this.handleChange}
                    />
                  </label>
                </span>
              </div>
            </div>
            <hr />

            <div
              className="spacedRow col1"
              style={{
                boxSizing: "border-box",
                backgroundColor: "rgba(200, 200, 200, 0.5)",
                borderRadius: "1vw",
                padding: "0 2vw 1vh"
              }}
            >
              <div>
                <span className="indent0">
                  <label htmlFor="container_4_size">
                    Fourth container size:{" "}
                  </label>
                </span>
                <span className="indent50">
                  <label htmlFor="container_4_price">
                    Fourth container price:
                  </label>
                </span>
              </div>

              <div>
                <span className="indent0">
                  <input type="text" id="container_4_size" onChange={this.handleChange}></input>
                </span>
                <span className="indent50">
                  <input
                    type="number"
                    step="0.01"
                    id="container_4_price"
                    placeholder="$"
                    onChange={this.handleChange}
                  ></input>
                </span>
              </div>

              <div className="spacedRow col1">
                <span className="indent0">
                  <label htmlFor="container_4_notes">
                    <textarea
                      className="col1"
                      placeholder="notes for fourth container size"
                      rows="2"
                      id="container_4_notes"
                      onChange={this.handleChange}
                    />
                  </label>
                </span>
              </div>
            </div>
            <div className="spacedRow col1" style={{ textAlign: "center" }}>
              <label className="col5">
                Confirm information, then click here
                <br />
                <button
                  id="dataEntrySubmit"
                  type="submit"
                  className="btn btn-primary"
                  onClick={this.handleSubmit}
                >
                  Enter
                </button>
              </label>
            </div>
          </fieldset>
        </form>
        <style jsx>
          {`
            .page {
              font-size: calc(14px + 0.5vw);
            }
            .spacedRow {
              margin-top: 2vh;
            }
            .indent0 {
              position: relative;
              left: 0%;
              width: auto;
            }

            .indent25 {
              position: absolute;
              left: 28%;
              width: auto;
            }

            .indent30 {
              position: absolute;
              left: 30%;
              width: auto;
            }

            .indent40 {
              position: absolute;
              left: 40%;
              width: auto;
            }

            .indent50 {
              position: absolute;
              left: 50%;
              width: auto;
            }

            .indent55 {
              position: absolute;
              left: 55%;
              width: auto;
            }
            .indent70 {
              position: absolute;
              left: 70%;
            }

            .indent80 {
              position: absolute;
              left: 80%;
              width: auto;
            }
            .indent85 {
              position: absolute;
              left: 85%;
            }
            .indent90 {
              position: absolute;
              left: 90%;
            }
            .sideAffix {
              position: fixed;
              z-index: 1;
              top: 60vh;
              left: 83vw;
              overflow-x: hidden;
            }
            .col1 {
              width: 100%;
            }
            .col2 {
              width: 50%;
            }
            .col3 {
              max-width: 33%;
            }
            .col4 {
              width: 25%;
            }
            .col5 {
              min-width: 20%;
            }
          `}
        </style>
      </div>
    );
  }
}

export default DataEntry;
