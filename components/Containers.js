const Containers = props => (
    <React.Fragment>
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
                  <label
                    htmlFor="container_1_size"
                  >
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
                  <input
                    type="text"
                    id="container_1_size"
                    // onFocus={(event) => props.scrollIntoView()}
                    onChange={props.handleChange}
                  ></input>
                </span>
                <span className="indent50">
                  <input
                    type="number"
                    step="0.01"
                    id="container_1_price"
                    placeholder="$"
                    onChange={props.handleChange}
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
                      onChange={props.handleChange}
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
                  <input
                    type="text"
                    id="container_2_size"
                    onChange={props.handleChange}
                  ></input>
                </span>
                <span className="indent50">
                  <input
                    type="number"
                    step="0.01"
                    id="container_2_price"
                    placeholder="$"
                    onChange={props.handleChange}
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
                      onChange={props.handleChange}
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
                  <input
                    type="text"
                    id="container_3_size"
                    onChange={props.handleChange}
                  ></input>
                </span>
                <span className="indent50">
                  <input
                    type="number"
                    step="0.01"
                    id="container_3_price"
                    placeholder="$"
                    onChange={props.handleChange}
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
                      onChange={props.handleChange}
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
                  <input
                    type="text"
                    id="container_4_size"
                    onChange={props.handleChange}
                  ></input>
                </span>
                <span className="indent50">
                  <input
                    type="number"
                    step="0.01"
                    id="container_4_price"
                    placeholder="$"
                    onChange={props.handleChange}
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
                      onChange={props.handleChange}
                    />
                  </label>
                </span>
              </div>
            </div>
            <style jsx>{`
                .spacedRow {
                    margin-top: 2vh;
                }
                .col1 {
                    width: 100%;
                }
                .indent0 {
                    position: relative;
                    left: 0%;
                    width: auto;
                  }
                .indent50 {
                    position: absolute;
                    left: 50%;
                    width: auto;
                  }
            `}</style>
    </React.Fragment>
);

export default Containers;