import React, { Component } from "react";
import DataEntryModal from '../components/DataEntryModal';
import Nomenclature from '../components/Nomenclature';
import Zones from '../components/Zones';
import GrowingConditions from '../components/GrowingConditions';
import Containers from '../components/Containers';
import CategoryMenu from '../components/CategoryMenu';

class DataEntry extends Component {
  state = {
    showModal: false,
    botanical_name: "",
    regional_name: "",
    common_name: "",
    category: "Perennials",
    in_stock: false,
    description: "",
    zone_low: 4,
    zone_high: 9,
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

  handleShowModal = () => {
    this.setState({ showModal: true});
  };
  handleCloseModal = () => {
    this.setState({ showModal: false})
  };
  submitForm = event => {
    event.preventDefault();
    //some add operation to database
    console.log(this.state);
    this.handleCloseModal();
  };
  handleChange = event => {
    event.preventDefault();
    this.setState({ [event.target.id]: event.target.value });
  };
  handleCheck = event => {
    const field = event.target.id;
    this.setState(prevState => ({
      [field]: !prevState[field]
    }));
    setTimeout(() => console.log(field + ": " + this.state[field]), 1000);
  };

  // scrollIntoView = event => {
  //   const el = event.target.id;
  //   document.getElementById(el).scrollIntoView();
  // };

  render() {
    return (
      <div style={{ fontSize: 'calc(14px + 0.5vw)' }}>
        <DataEntryModal 
          showModal={this.state.showModal} 
          handleSubmit={this.submitForm}
          handleClose={this.handleCloseModal} 
          form={this.form}/>
        <form style={{ margin: "2vh 10vw", width: "80vw" }}>
          <fieldset>
            <legend style={{ fontSize: "calc(14px + 1vw)" }}>
              Enter New Plant into Inventory
            </legend>
            <div style={{ width: '100%', marginTop: '2vh', padding: "0 2vw 1vh", boxSizing: "border-box", disply: "block"}}>
              <Nomenclature handleChange={this.handleChange}/>
              <span style={{ marginTop: '2vh', display: "inline-block", position: 'absolute', left: '70%' }}>
                <CategoryMenu category={this.state.category} handleChange={this.handleChange} />
                 <br />
                <Zones zoneLow={this.state.zone_low} zoneHigh={this.state.zone_high} handleChange={this.handleChange}/>
              </span>
            </div>

            <div style={{ marginTop: '2vh' }}>
              <span>
                <label htmlFor="in_stock">In stock?</label>
                <input
                  type="checkbox"
                  id="in_stock"
                  onChange={this.handleCheck}
                ></input>
              </span>
            </div>

            <div style={{ marginTop: '2vh', width: '100%' }}>
              <label htmlFor="description"></label>

              <textarea
                rows="8"
                id="description"
                className="indent0 col1"
                placeholder="Description..."
              />
            </div>

            <GrowingConditions handleCheck={this.handleCheck} />

            <Containers handleChange={this.handleChange} scrollIntoView={this.scrollIntoView} />

            <div style={{ marginTop: '2vh', width: '100%', textAlign: "center" }}>
              <label className="col5">
                Confirm information, then click here
                <br />
                <button
                  id="dataEntrySubmit"
                  type="button"
                  className="btn btn-primary"
                  onClick={this.handleShowModal}
                >
                  Enter
                </button>
              </label>
            </div>
          </fieldset>
        </form>
        <style jsx>
          {`
            .sideAffix {
              position: fixed;
              z-index: 1;
              top: 60vh;
              left: 83vw;
              overflow-x: hidden;
            }
          `}
        </style>
      </div>
    );
  }
}

export default DataEntry;