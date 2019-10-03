import React, { Component } from "react";
import Link from "next/link";

class Nav extends Component {
  state = {
    menuIsActive: false
  };

  dropDown = () => {
    this.setState({
      menuIsActive: !this.state.menuIsActive
    });
  };

  mouseOut = list => {
    this.setState({ menuIsActive: !this.state.menuIsActive });
    document.getElementById(list).style.display = "none";
  };

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>

            <Link href="index">
              <a className="navbar-brand">
                <img
                  src="../static/N3nameTransparent.png"
                  alt=""
                  style={{ height: "23px", lineHeight: "64px" }}
                />
              </a>
            </Link>
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav">
              <li className="active">
                <Link href="index">
                  <a>
                    Home <span className="sr-only">(current)</span>
                  </a>
                </Link>
              </li>

              <li>
                <Link href="SearchPage">
                  <a>Search Plants</a>
                </Link>
              </li>

              <li className="dropdown">
                <a
                  href="#"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-expanded="false"
                  onClick={() => this.dropDown()}
                >
                  Our Nursery
                  <span className="caret"></span>
                </a>
                <ul
                  className="dropdown-menu"
                  role="menu"
                  style={{
                    display: this.state.menuIsActive ? "block" : "none"
                  }}
                  id="ourNursery"
                  onMouseOut={() => this.mouseOut("ourNursery")}
                >
                  <li>
                    <Link href="AboutUs">
                      <a>About Us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="ContactUs">
                      <a>Contact Us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="Hours">
                      <a>Hours</a>
                    </Link>
                  </li>
                  <li>
                    <a
                      href="https://www.google.com/maps/place/Nearly+Native+Nursery/@33.38202,-84.473911,15z/data=!4m5!3m4!1s0x0:0xf3eaee697edb71e1!8m2!3d33.38202!4d-84.473911"
                      target="_blank"
                    >
                      >Map
                    </a>
                  </li>
                  <li className="divider"></li>
                  <li>
                    <a href="https://www.rarepalmseeds.com" target="_blank">
                      >Rare Palm Seeds</a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="navbar-form navbar-right" role="search">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                />
              </div>
              <button type="submit" className="btn btn-default">
                Submit
              </button>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
