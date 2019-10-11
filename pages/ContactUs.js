import Layout from "./Layout";
import React, { Component } from "react";

const formStyle = {
  width: "64vw",
  margin: "1vh 18vw",
  paddingBottom: "9vh"
};

class ContactUs extends Component {
  state = {
    subject: "Information Request",
    name: "",
    email: "",
    company: "",
    address1: "",
    address2: "",
    city: "",
    st: "",
    zip: "",
    message: ""
  };

  handleSubmit = event => {
    const {
      subject,
      name,
      email,
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
      name,
      email,
      company,
      address1,
      address2,
      city,
      st,
      zip,
      message
    };
    console.log(this.state);
    event.preventDefault();
  };

  handleInputChange = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  scrollIntoView = event => {
    const el = event.target.name;
    document.getElementById(el).scrollIntoView();
  };

  render() {
    return (
      <Layout>
        <form className="form">
          <fieldset>
            <legend>Contact Us</legend>
            <div className="form-group" style={{ width: "50%" }}>
              <select className="form-control" name="subject" onChange={this.handleInputChange} required='required'>
                <option>Informatin Request</option>
                <option>General Inquiry</option>
                <option>Praise/Complaint</option>
                <option>Website Suggestion</option>
              </select>
            </div>
            <span className="form-group" style={{ display: "inline" }}>
              <label htmlFor="name" style={{ width: "50%" }}>
                Your name
              </label>
              <label htmlFor="email" style={{ width: "50%" }}>
                Email address
              </label>
            </span>

            <span style={{ width: "100%", display: "flex" }}>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                onChange={this.handleInputChange}
                placeholder="Jane Doe"
                required="required"
                style={{ width: "45%", marginRight: "5%" }}
              />
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                onChange={this.handleInputChange}
                aria-describedby="emailHelp"
                placeholder="jane@email.com"
                required="required"
                style={{ width: "45%" }}
              />
              
            </span>

            <span>
              <small
                id="emailHelp"
                className="form-text text-muted"
                style={{ marginLeft: "50%" }}
              >
                We'll never share your state with anyone else.
              </small>
            </span>

            <span className="form-group" style={{ display: "inline" }}>
              <label htmlFor="company" style={{ width: "50%" }}>
                Company
              </label>
            </span>

            <span style={{ width: "100%", display: "flex" }}>
              <input
                type="text"
                className="form-control"
                id="company"
                name="company"
                onChange={this.handleInputChange}
                style={{ width: "45%", marginRight: "5%" }}
              />
            </span>

            <span className="form-group" style={{ display: "inline" }}>
              <label htmlFor="address1" style={{ width: "50%" }}>
                Address line 1
              </label>
            </span>

            <span style={{ width: "100%", display: "flex" }}>
              <input
                type="text"
                className="form-control"
                id="address1"
                name='address1'
                onChange={this.handleInputChange}
                onFocus={this.scrollIntoView}
                placeholder="123 Main Street"
                style={{ width: "45%", marginRight: "5%" }}
              />
            </span>

            <span className="form-group" style={{ display: "inline" }}>
              <label htmlFor="address2" style={{ width: "50%" }}>
                Address line 2
              </label>
            </span>

            <span style={{ width: "100%", display: "flex" }}>
              <input
                type="text"
                className="form-control"
                id="address2"
                name="address2"
                onChange={this.handleInputChange}
                onFocus={this.scrollIntoView}
                placeholder=""
                style={{ width: "45%", marginRight: "5%" }}
              />
            </span>

            <span className="form-group" style={{ display: "inline" }}>
              <label htmlFor="city" style={{ width: "40%" }}>
                City
              </label>
              <label htmlFor="st" style={{ width: "40%" }}>
                State/Province
              </label>
              <label htmlFor="zip" style={{ width: "20%" }}>
                Postal Code
              </label>
            </span>

            <span style={{ width: "100%", display: "flex" }}>
              <input
                type="text"
                className="form-control"
                id="city"
                name="city"
                onChange={this.handleInputChange}
                onFocus={this.scrollIntoView}
                style={{ width: "35%", marginRight: "5%" }}
              />
              <input
                type="text"
                className="form-control"
                id="st"
                name="st"
                onChange={this.handleInputChange}
                onFocus={this.scrollIntoView}
                style={{ width: "35%", marginRight: "5%" }}
              />
              <input
                type="text"
                className="form-control"
                id="zip"
                name="zip"
                onChange={this.handleInputChange}
                onFocus={this.scrollIntoView}
                style={{ width: "20%" }}
              />
            </span>

            <div className="form-group">
              <label htmlFor="message">Your message</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                onChange={this.handleInputChange}
                onFocus={this.scrollIntoView}
                rows="4"
                placeholder="Your message here..."
                required="required"
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputFile">File input</label>
              <input
                type="file"
                className="form-control-file"
                id="exampleInputFile"
                aria-describedby="fileHelp"
              />
            </div>
            {/* <img
              src="../static/fluttering2.gif"
              alt=""
              style={{
                float: "right",
                width: "12vw",
                zIndex: "2",
                transform: "rotateY(180deg)",
                WebkitTransform: "rotateY(180deg)"
              }}
            />
            <img
              src="../static/fluttering.gif"
              alt=""
              style={{ float: "left", width: "12vw", zIndex: "2" }}
            /> */}
            <button type="submit" onSubmit={() => this.handleSubmit()} className="btn btn-primary">
              Submit
            </button>
          </fieldset>
        </form>

        <style jsx>{`
          .form {
            margin: 0 15%;
          }

          @media only screen and (max-width: 1024px) {
            .form {
              margin: 0 4%;
            }
          }
        `}
        </style>
      </Layout>
    );
  }
}

export default ContactUs;
