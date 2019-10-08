const GrowingConditions = props => {
  return (
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
          <input
            type="checkbox"
            id="soil_ph_acid"
            onChange={props.handleCheck}
            defaultChecked
          ></input>
          <label htmlFor="soil_ph_acid">acid</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="soil_ph_neutral"
            onChange={props.handleCheck}
            defaultChecked
          ></input>
          <label htmlFor="soil_ph_neutral">neutral</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="soil_ph_alkaline"
            onChange={props.handleCheck}
            defaultChecked
          ></input>
          <label htmlFor="soil_ph_alkaline">alkaline</label>
        </div>
      </span>

      <span className="spacedRow indent28 col5">
        <div>Soil Type</div>
        <div>
          <input
            type="checkbox"
            id="soil_type_clay"
            onChange={props.handleCheck}
            defaultChecked
          ></input>
          <label htmlFor="soil_type_clay">clay</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="soil_type_average"
            onChange={props.handleCheck}
            defaultChecked
          ></input>
          <label htmlFor="soil_type_average">average</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="soil_type_sand"
            onChange={props.handleCheck}
            defaultChecked
          ></input>
          <label htmlFor="soil_type_sand">sand</label>
        </div>
      </span>

      <span className="spacedRow indent40 col5">
        <div>Water</div>
        <div>
          <input
            type="checkbox"
            id="water_wet"
            onChange={props.handleCheck}
          ></input>
          <label htmlFor="water_wet">wet</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="water_average"
            onChange={props.handleCheck}
            defaultChecked
          ></input>
          <label htmlFor="water_average">average</label>
        </div>
        <div>
          <input
            type="checkbox"
            onChange={props.handleCheck}
            id="water_dry"
          ></input>
          <label htmlFor="water_dry">dry</label>
        </div>
      </span>

      <span className="spacedRow indent55 col5">
        <div>Sun Exposure</div>
        <div>
          <input
            type="checkbox"
            id="sun_full"
            onChange={props.handleCheck}
          ></input>
          <label htmlFor="sun_full">full</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="sun_partial"
            onChange={props.handleCheck}
            defaultChecked
          ></input>
          <label htmlFor="sun_partial">partial</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="sun_shade"
            onChange={props.handleCheck}
          ></input>
          <label htmlFor="sun_shade">shade</label>
        </div>
      </span>

      <span className="spacedRow indent70 col5">
        <div>Foliage</div>
        <div>
          <input
            type="checkbox"
            id="foliage_evergreen"
            onChange={props.handleCheck}
          ></input>
          <label htmlFor="foliage_evergreen">evergreen</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="foliage_semievergreen"
            onChange={props.handleCheck}
          ></input>
          <label htmlFor="foliage_semievergreen">semi-evergreen</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="foliage_deciduous"
            onChange={props.handleCheck}
          ></input>
          <label htmlFor="foliage_deciduous">deciduous</label>
        </div>
      </span>
      <style jsx>
          {`
            .spacedRow {
              margin-top: 2vh;
            }
            .indent0 {
              position: relative;
              left: 0%;
              width: auto;
            }
            .indent28 {
              position: absolute;
              left: 28%;
              width: auto;
            }
            .indent40 {
              position: absolute;
              left: 40%;
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
            .col1 {
              width: 100%;
            }          
            .col5 {
              min-width: 20%;
            }
          `}
        </style>
    </div>
  );
};

export default GrowingConditions;
