import logo from "./logo.svg";
import "./App.css";
import React from "react";
import $ from "jquery";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icon from "@fortawesome/free-solid-svg-icons";

class TSA_Timesheet extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <div>
          <Navbar />
        </div>


        {/* <nav className="navbar navbar-expand-lg navbar-dark bg-primary py-2">
          <div className="container-fluid">
            <a className="navbar-brand fs-1" href="#">
              Timesheet
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className=" float-end">
              <div className=" collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item px-4">
                    <a
                      className="nav-link fs-5 active_1"
                      aria-current="page"
                      href="#"
                    >
                      MyTimesheet
                    </a>
                  </li>
                  <li className="nav-item fs-5 px-4">
                    <a className="nav-link active_1" href="#">
                      Export
                    </a>
                  </li>
                  <li className="nav-item fs-5 px-4">
                    <a className="nav-link active_1" href="#">
                      Settings
                    </a>
                  </li>
                  <li className="nav-item fs-5 px-4">
                    <a className="nav-link active_1" href="#">
                      Logout
                    </a>
                  </li>
                  <li className="ps-3">
                    <img
                      src={
                        "data:image/jpeg;base64,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"
                      }
                      alt=""
                      width="50"
                      height="50"
                      style={{ borderRadius: "25px" }}
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav> */}


        {/*---------------------------------------------------Searchbox/new Timesheet ------------------------------------------------*/}

        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-3 pt-5">
              <div className="form-group mb-3 search">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                />
              </div>
            </div>
            <div className="col-lg-2 pt-5" align="right">
              <div class="dropdown">
                <button class="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  All
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><a class="dropdown-item" href="#">Approved</a></li>
                  <li><a class="dropdown-item" href="#">Rejected</a></li>
                  <li><a class="dropdown-item" href="#">Not Viewed</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/*---------------------------------------------------------- Table ----------------------------------------------------------*/}

        <div className="container pt-4 pb-4 shadow">
          <div style={{ height: "auto", maxHeight: "500px", overflow: "auto" }}>
            <table class="table table-striped bg-white rounded" >
              <thead
                className="rounded-top"
                style={{ backgroundColor: "#0a1a49", color: "white", fontSize: "17px", top: "0px", position: "sticky" }}
              >
                <tr>
                  <th scope="col">S.no</th>
                  <th scope="col">Project</th>
                  <th scope="col">Emp.ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Month</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody style={{ fontSize: "17px" }}>
                <tr>
                  <td>1</td>
                  <td>Commscope</td>
                  <td>7701</td>
                  <td>Ganabahathi.P</td>
                  <td>January 2023</td>
                  <td>Not Viewed</td>
                </tr>

                <tr>
                  <td>2</td>
                  <td>Nexla</td>
                  <td>7702</td>
                  <td>Murugan.P</td>
                  <td>January 2023</td>
                  <td>Approved</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Commscope</td>
                  <td>7703</td>
                  <td>Manikandan.P</td>
                  <td>January 2023</td>
                  <td>Approved</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>


        {/*---------------------------------------------------- Modal for Add new timesheet ----------------------------------------------------*/}

        <div
          class="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">
                  New Timesheet
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body ">
                <div class="input-group flex-nowrap py-4 ">
                  <span
                    for="validationDefaultUsername"
                    class="input-group-text "
                    id="addon-wrapping"
                    style={{ paddingInlineEnd: "70px" }}
                  >
                    Date
                  </span>
                  <input
                    type="text"
                    id="reportrange"
                    name="datefilter"

                  />
                </div>
                <div class="col input-group flex-nowrap">
                  <div class="input-group ">
                    <div class="input-group-prepend">
                      <label
                        class="input-group-text"
                        for="inputGroupSelect01"
                        style={{ paddingInlineEnd: "20px" }}
                      >
                        Attendance
                      </label>
                    </div>
                    <select
                      class="custom-select col-8"
                      id="inputGroupSelect01"
                      style={{ backgroundColor: "white" }}
                    >
                      <option selected>Choose...</option>
                      <option value="1">Present</option>
                      <option value="2">Absent</option>
                      <option value="3">Week-End</option>
                      <option value="4">Comp-Off</option>
                      <option value="5">Public-Holiday</option>
                    </select>
                  </div>
                </div>
                <div className="row justify-content-between py-4 ">
                  <div class="input-group ">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="basic-addon1">
                        Start
                      </span>
                    </div>
                    <input
                      type="time"
                      class="form-control"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="basic-addon1">
                        End
                      </span>
                    </div>
                    <input
                      type="time"
                      class="form-control"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Activities performed.."
                  ></textarea>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>

        {/*---------------------------------------------------- Modal for Backup new timesheet ----------------------------------------------------*/}

        <div
          class="modal fade"
          id="staticBackdrop1"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">
                  Back Up
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body ">
                <div class="input-group flex-nowrap py-4 ">
                  <span
                    for="validationDefaultUsername"
                    class="input-group-text "
                    id="addon-wrapping"
                    style={{ paddingInlineEnd: "70px" }}
                  >
                    Date
                  </span>
                  <input
                    type="text"
                    id="reportrange"
                    name="datefilter"
                    value=""
                  />
                </div>
                <div class="input-group flex-nowrap  ">
                  <span
                    for="validationDefaultUsername"
                    class="input-group-text "
                    id="addon-wrapping"
                    style={{ paddingInlineEnd: "57px" }}
                  >
                    Month
                  </span>
                  <input type="month" />
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
        {/*---------------------------------------------------- Modal for Submit for approval ----------------------------------------------------*/}

        <div
          class="modal fade"
          id="staticBackdrop2"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">
                  Submit For Approval
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body ">
                <div class="input-group flex-nowrap py-4 ">
                  <span
                    for="validationDefaultUsername"
                    class="input-group-text "
                    id="addon-wrapping"
                    style={{ paddingInlineEnd: "70px" }}
                  >
                    Date
                  </span>
                  <input
                    type="text"
                    id="reportrange"
                    name="datefilter"
                    value=""
                  />
                </div>
                <div class="input-group flex-nowrap  ">
                  <span
                    for="validationDefaultUsername"
                    class="input-group-text "
                    id="addon-wrapping"
                    style={{ paddingInlineEnd: "57px" }}
                  >
                    Month
                  </span>
                  <input type="month" value="" />
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div >
    );
  }
}
export default TSA_Timesheet;
