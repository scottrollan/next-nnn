const Nomenclature = props => (
  <React.Fragment>
    <span
      className="spacedRow indent0 col3"
      style={{ display: "inline-block" }}
    >
      <div>
        <label htmlFor="botanical_name">Botanical name</label>
      </div>
      <div>
        <input
          type="text"
          id="botanical_name"
          onChange={props.handleChange}
        ></input>
      </div>
      <br />
      <div>
        <label htmlFor="regional_name">Regional name</label>
      </div>
      <div>
        <input
          type="text"
          id="regional_name"
          onChange={props.handleChange}
        ></input>
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
        <input type="text" id="variety" onChange={props.handleChange}></input>
      </div>
      <br />
      <div>
        <label htmlFor="common_name">Common name</label>
      </div>
      <div>
        <input
          type="text"
          id="common_name"
          onChange={props.handleChange}
        ></input>
      </div>
    </span>
    <style jsx>{`
      .spacedRow {
        margin-top: 2vh;
      }
      .indent0 {
        position: relative;
        left: 0%;
        width: auto;
      }

      .indent40 {
        position: absolute;
        left: 40%;
        width: auto;
      }
      .col3 {
        max-width: 33%;
      }
    `}</style>
  </React.Fragment>
);

export default Nomenclature;
