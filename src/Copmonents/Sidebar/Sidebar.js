/*
 **Author: Santosh Kumar Dash
 **Author URL: http://santoshdash.epizy.com/
 **Github URL: https://github.com/quintuslabs/dashio-admin
 */

import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import "./StyleSheets/Sidebar.css";
function Sidebar(props) {
  const [active, setActive] = useState("");
  const [studentdropdownToggle, setstudentDropDownToggle] = useState(false);
  const [academicropdownToggle, setAcademicDropDownToggle] = useState(false);
  const [ResultropdownToggle, setResultDropDownToggle] = useState(false);
  useEffect(() => {
    setActive(props.location.pathname);
  }, [props.location.pathname, active]);

  return (
    <div
      className="sidebar-container border-right main-sidebar"
      id="sticky-sidebar"
    >
      <nav id="sidebar" className={props.toggleClass}>
        <ul className="list-unstyled components">
          <li className={active === "/dashboard" ? "active" : null}>
            <a href="/dashboard">
              <div className="menu-icon">
                <i className="fa fa-home nav_icon" aria-hidden="true"></i>
              </div>
              <span className="menu-title">Dashboard</span>
            </a>
          </li>

          <li
            className="menu-item-has-children dropdown"
            onClick={() => setstudentDropDownToggle(!studentdropdownToggle)}
          >
            <a
              href="#"
              className="dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="menu-icon fa-solid fa-user-graduate" />
              Student
            </a>
            <ul
              className={
                studentdropdownToggle
                  ? "sub-menu children dropdown-menu show"
                  : "sub-menu children dropdown-menu"
              }
            >
              <li className={active === "/ListStudent" ? "active" : null}>
                <a href="/ListStudent">
                  <div className="menu-icon">
                    <i className="fa-solid fa-clipboard-list"></i>
                  </div>
                  <span className="menu-title">Student List</span>
                </a>
              </li>
              <li className={active === "/ViewStudent" ? "active" : null}>
                <a href="/ViewStudent">
                  <div className="menu-icon">
                    <i className="fa-solid fa-clipboard-list"></i>
                  </div>
                  <span className="menu-title">Student View</span>
                </a>
              </li>
              <li className={active === "/AddStudent" ? "active" : null}>
                <a href="/AddStudent">
                  <div className="menu-icon">
                    <i className="fa-solid fa-address-book"></i>
                  </div>
                  <span className="menu-title">Student Add</span>
                </a>
              </li>

              <li className={active === "/StudentEdit" ? "active" : null}>
                <a href="/StudentEdit">
                  <div className="menu-icon">
                    <i className="fa-solid fa-pen-to-square"></i>
                  </div>
                  <span className="menu-title">Student Edit</span>
                </a>
              </li>
              <li className={active === "/DeleteStudent" ? "active" : null}>
                <a href="/DeleteStudent">
                  <div className="menu-icon">
                    <i className="fa-solid fa-pen-to-square"></i>
                  </div>
                  <span className="menu-title">Student Delete</span>
                </a>
              </li>
            </ul>
          </li>

          <li
            className="menu-item-has-children dropdown"
            onClick={() => setAcademicDropDownToggle(!academicropdownToggle)}
          >
            <a
              href="#"
              className="dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="menu-icon fa-solid fa-book" />
              Subjects
            </a>
            <ul
              className={
                academicropdownToggle
                  ? "sub-menu children dropdown-menu show"
                  : "sub-menu children dropdown-menu"
              }
            >
              <li className={active === "/ListSubject" ? "active" : null}>
                <a href="/ListSubject">
                  <div className="menu-icon">
                    <i className="fa-solid fa-clipboard-list"></i>
                  </div>
                  <span className="menu-title">Subject List</span>
                </a>
              </li>

              <li className={active === "/AddSubject" ? "active" : null}>
                <a href="/AddSubject">
                  <div className="menu-icon">
                    <i className="fa-solid fa-address-book"></i>
                  </div>
                  <span className="menu-title">Subject Add</span>
                </a>
              </li>

              <li className={active === "/EditSubject" ? "active" : null}>
                <a href="/EditSubject">
                  <div className="menu-icon">
                    <i className="fa-solid fa-pen-to-square"></i>
                  </div>
                  <span className="menu-title">Subject Edit</span>
                </a>
              </li>
              <li
                className={
                  active === "/DeleteSubject" ? "active" : null
                }
              >
                <a href="/DeleteSubject">
                  <div className="menu-icon">
                    <i className="fa-solid fa-clipboard-list"></i>
                  </div>
                  <span className="menu-title">Subject Delete</span>
                </a>
              </li>
            </ul>
          </li>

          {/* <li className={active === "/widgets" ? "active" : null}>
            <a href="/widgets">
              <div className="menu-icon">
                <i className="fa fa-th-large nav_icon" aria-hidden="true"></i>
              </div>
              <span className="menu-title">Widgets</span>
            </a>
          </li> */}

          <li
            className="menu-item-has-children dropdown"
            onClick={() => setResultDropDownToggle(!ResultropdownToggle)}
          >
            <a
              href="#"
              className="dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="menu-icon fa-solid fa-book" />
              Result
            </a>
            <ul
              className={
                ResultropdownToggle
                  ? "sub-menu children dropdown-menu show"
                  : "sub-menu children dropdown-menu"
              }
            >
              <li
                className={
                  active === "/dashio-admin/components/buttons"
                    ? "active"
                    : null
                }
              >
                <a href="/dashio-admin/components/buttons">
                  <div className="menu-icon">
                    <i className="fa-solid fa-clipboard-list"></i>
                  </div>
                  <span className="menu-title"> Result List</span>
                </a>
              </li>
              <li
                className={
                  active === "/dashio-admin/components/badge" ? "active" : null
                }
              >
                <a href="/dashio-admin/components/badge">
                  <div className="menu-icon">
                    <i className="fa-solid fa-clipboard-list"></i>
                  </div>
                  <span className="menu-title"> Result View</span>
                </a>
              </li>
              <li
                className={
                  active === "/dashio-admin/components/card" ? "active" : null
                }
              >
                <a href="/dashio-admin/components/card">
                  <div className="menu-icon">
                    <i className="fa-solid fa-address-book"></i>
                  </div>
                  <span className="menu-title"> Result Add</span>
                </a>
              </li>

              <li
                className={
                  active === "/dashio-admin/components/alert" ? "active" : null
                }
              >
                <a href="/dashio-admin/components/alert">
                  <div className="menu-icon">
                    <i className="fa-solid fa-pen-to-square"></i>
                  </div>
                  <span className="menu-title"> Result Edit</span>
                </a>
              </li>
            </ul>
          </li>

          {/* <li className={active === "/dashio-admin/tables" ? "active" : null}>
            <a href="/dashio-admin/tables">
              <div className="menu-icon">
                <i className="fa fa-table nav_icon" aria-hidden="true"></i>
              </div>
              <span className="menu-title">Tables</span>
            </a>
          </li>

          <li className={active === "/dashio-admin/pages" ? "active" : null}>
            <a href="/dashio-admin/pages">
              <div className="menu-icon">
                <i
                  className="fa fa-file-text-o nav_icon"
                  aria-hidden="true"
                ></i>
              </div>
              <span className="menu-title">Pages</span>
            </a>
          </li>

          <li className={active === "/dashio-admin/charts" ? "active" : null}>
            <a href="/dashio-admin/charts">
              <div className="menu-icon">
                <i className="fa fa-bar-chart nav_icon" aria-hidden="true"></i>
              </div>
              <span className="menu-title">Charts</span>
            </a>
          </li> */}
        </ul>

        {/* <ul className="list-unstyled CTAs">
              <li>
                <a
                  href="https://bootstrapious.com/tutorial/files/sidebar.zip"
                  className="download"
                >
                  Download source
                </a>
              </li>
              <li>
                <a
                  href="https://bootstrapious.com/p/bootstrap-sidebar"
                  className="article"
                >
                  Back to article
                </a>
              </li>
      </ul> */}
      </nav>
    </div>
  );
}

export default withRouter(Sidebar);
