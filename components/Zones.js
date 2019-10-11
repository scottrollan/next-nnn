const Zones = props => (
    <React.Fragment>
        <div>
                  <label htmlFor="zone_low">from Zone: </label>
                </div>
                <div>
                  <input
                    type="number"
                    id="zone_low"
                    min="1"
                    max="12"
                    value={props.zoneLow}
                    onChange={props.handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="zone_high">to Zone: </label>
                </div>
                <div>
                  <input
                    type="number"
                    id="zone_high"
                    min="2"
                    max="13"
                    value={props.zoneHigh}
                    onChange={props.handleChange}
                  />
                </div>
    </React.Fragment>
);

export default Zones;