/*
 **Author: Santosh Kumar Dash
 **Author URL: http://santoshdash.epizy.com/
 **Github URL: https://github.com/quintuslabs/dashio-admin
 */

import React, { Component } from "react";
import "./StyleSheets/Navbar.css";
import { Link } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsBellFill } from "react-icons/bs";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="header-section" id="sticky">
        <nav className="navbar navbar-expand-lg navbar-bg ">
          <div className="container-fluid">
            <Link className="Link" to="/dashboard">
              <div className="nav-title">Maharashtra School</div>
            </Link>
            <div onClick={() => this.props.onToggleClick()}>
              <i className="fa fa-bars" aria-hidden="true"></i>
            </div>
            <button
              className="btn btn-dark d-inline-block d-lg-none ml-auto"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fa fa-align-justify"></i>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <div className="topbarContainer">
                <div className="topbarCenter">
                  <div className="searchbar">
                    <input placeholder="Search" className="searchInput" />
                    <BiSearchAlt2 />
                  </div>
                </div>
                <ul className="nav navbar-nav ml-auto d-flex justify-content-center align-items-center ">
                  <li className="nav-item">
                    <div className="topbarIconItem">
                      <BsBellFill color="#7f8c8d" size="1.5rem" />
                      <span className="topbarIconBadge">1</span>
                    </div>
                  </li>
                  <div class="collapse navbar-collapse" id="navbar-list-4">
                    <ul class="navbar-nav">
                      <li class="nav-item ">
                        <img
                          src="Images/profile.jpg"
                          width="35"
                          height="35"
                          class="rounded-circle"
                          alt="profile"
                        />
                      </li>
                    </ul>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
