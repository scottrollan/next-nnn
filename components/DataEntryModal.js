import React from "react";

const DataEntryModal = props => (
  <React.Fragment>
    <div
      className="modal"
      style={{ display: props.showModal ? "block" : "none" }}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header" style={{ textAlign: 'center' }}>
            <h2 className="modal-title">
              Are you sure you want to add this plant to inventory?
            </h2>
          </div>
          <div className="modal-footer" style={{ textAlign: "center" }}>
            <button type="button" className="btn save" onClick={props.handleSubmit}>
              Add to Inventory
            </button>
            <button
              type="submit"
              className="btn goBack"
              onClick={props.handleClose}
            >
              Return to Edit
            </button>
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
      .modal {
        position: fixed;
        left: 10vw;
        top: 8vh;
        width: 78vw;
        padding: 15px;
        border: 1px solid #dddddd;
        border-radius: 8px;
        background-color: #ffffff;
        z-index: 9999;
        box-shadow: 5px 10px 18px #777777;
      }
      .btn {
        margin: 1vh 1vw;
        background-color: #3f51b5;
        width: auto;
        height: 40px;
        border-radius: 4px;
        border: none;
        font-size: calc(14px + .5vw);
        color: whitesmoke;
      }
      .btn:hover {
        background-color: rgba(0, 0, 255, 0.7);
      }
      .save{
        float: left;
        margin-left: 10vw;
      }
      .goBack {
        float: right;
        margin-right: 10vw;
      }
    `}</style>
  </React.Fragment>
);

export default DataEntryModal;
