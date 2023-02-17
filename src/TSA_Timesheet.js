import "./App.css";
import React from "react";
import Navbar from "./Navbar";

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
