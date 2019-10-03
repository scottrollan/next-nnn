import Layout from "./Layout";
import React, { Component } from "react";

const formStyle = {
  width: "64vw",
  margin: "1vh 18vw",
  paddingBottom: "9vh"
};

class ContactUs extends Component {
  state = {
    subject: "General Inquiry",
    state: "",
    name: "",
    company: "",
    address1: "",
    address2: "",
    city: "",
    st: "",
    zip: "",
    message: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("message contents: ", this.state);

    const {
      subject,
      state,
      name,
      company,
      address1,
      address2,
      city,
      st,
      zip,
      message
    } = this.state;

    const form = {
      subject,
      state,
      name,
      company,
      address1,
      address2,
      city,
      st,
      zip,
      message
    };
    console.log(form);
  };

  handleInputChange = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <Layout>
        <form style={{ margin: "0 15%" }}>
          <fieldset>
            <legend>Contact Us</legend>
            {/* <div class="form-group row"> */}
            <div class="form-group" style={{ width: "50%" }}>
              <select class="form-control" id="exampleSelect1">
                <option>Informatin Request</option>
                <option>General Inquiry</option>
                <option>Praise/Complaint</option>
                <option>Website Suggestion</option>
              </select>
            </div>
            <span class="form-group" style={{ display: "inline" }}>
              <label for="name" style={{ width: "50%" }}>
                Your name
              </label>
              <label for="state" style={{ width: "50%" }}>
                Email address
              </label>
              </span>

              <span style={{ width: '100%', display: 'flex' }}>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  aria-describedby="emailHelp"
                  placeholder="Jane Doe"
                  required='required'
                  style={{ width: "45%", marginRight: "5%" }}
                />
                <input
                  type="state"
                  class="form-control"
                  id="state"
                  aria-describedby="emailHelp"
                  placeholder="jane@email.com"
                  required="required"
                  style={{ width: "45%" }}
                />
              </span>
              
              <span>
              <small id="emailHelp" class="form-text text-muted" style={{ marginLeft: '50%' }}>
                We'll never share your state with anyone else.
              </small>
            </span>

              <span class="form-group" style={{ display: "inline" }}>
              <label for="name" style={{ width: "50%" }}>
                Company
              </label>
              </span>

              <span style={{ width: '100%', display: 'flex' }}>
                <input
                  type="text"
                  class="form-control"
                  id="company"
                  placeholder="Acme Bird Seed Co."
                  style={{ width: "45%", marginRight: "5%" }}
                />
              </span>

              <span class="form-group" style={{ display: "inline" }}>
              <label for="name" style={{ width: "50%" }}>
                Address line 1
              </label>
              </span>

              <span style={{ width: '100%', display: 'flex' }}>
                <input
                  type="text"
                  class="form-control"
                  id="address1"
                  placeholder="123 Main Street"
                  style={{ width: "45%", marginRight: "5%" }}
                />
              </span>
              
              <span class="form-group" style={{ display: "inline" }}>
              <label for="name" style={{ width: "50%" }}>
                Address line 2
              </label>
              </span>

              <span style={{ width: '100%', display: 'flex' }}>
                <input
                  type="text"
                  class="form-control"
                  id="address2"
                  placeholder=""
                  style={{ width: "45%", marginRight: "5%" }}
                />
              </span>


              <span class="form-group" style={{ display: "inline" }}>
              <label for="city" style={{ width: "40%" }}>
                City
              </label>
              <label for="st" style={{ width: "40%" }}>
                State/Province
              </label>              
              <label for="zip" style={{ width: "20%" }}>
                Postal Code
              </label>
              </span>

              <span style={{ width: '100%', display: 'flex' }}>
                <input
                  type="text"
                  class="form-control"
                  id="city"
                  placeholder=""
                  style={{ width: "35%", marginRight: "5%" }}
                />
                <input
                  type="text"
                  class="form-control"
                  id="st"
                  placeholder=""
                  style={{ width: "35%", marginRight: '5%' }}
                /> 
                <input
                type="text"
                class="form-control"
                id="zip"
                placeholder=""
                style={{ width: "20%" }}
              />
              </span>

            <div class="form-group">
              <label for="yourMessage">Your message</label>
              <textarea
                class="form-control"
                id="yourMessage"
                rows="4"
                placeholder="Your message here..."
                required="required"
              ></textarea>
            </div>
            <div class="form-group">
              <label for="exampleInputFile">File input</label>
              <input
                type="file"
                class="form-control-file"
                id="exampleInputFile"
                aria-describedby="fileHelp"
              />
              
            </div>

            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </fieldset>
        </form>
        <img src='../static/fluttering.gif' alt='' style={{ position: 'fixed', top: '15vh', left: '2vw', width: '12vw' }} />
        <img src='../static/fluttering2.gif' alt='' style={{ position: 'fixed', bottom: '15vh', right: '2vw', width: '12vw', transform: 'rotateY(180deg)', WebkitTransform: 'rotateY(180deg)' }} />

      </Layout>
    );
  }
}

export default ContactUs;
