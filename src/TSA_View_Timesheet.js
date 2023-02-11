import logo from "./logo.svg";
import "./App.css";
import React from "react";
import $ from "jquery";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icon from "@fortawesome/free-solid-svg-icons";

class TSA_View_Timesheet extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <div>
                    <Navbar />
                </div>
                <div className="container px-4">
                    <div className="row gy-4">
                        <div className="col-lg-3">
                            <div className="card d-flex flex-wrap" style={{ flexDirection: "row", height: "120px" }}>

                                <div className="col d-flex align-items-center justify-content-center text-light" style={{ backgroundColor: "#3F72AF" }}><b>Working Days</b></div>
                                <div className="col d-flex align-items-center justify-content-center font-weight-bold fs-5" style={{ backgroundColor: "#F9F7F7" }}> 22 </div>

                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card" style={{ flexDirection: "row", height: "120px" }}>

                                <div className="col d-flex align-items-center justify-content-center text-light" style={{ backgroundColor: "#3F72AF" }}><b>Public HoliDays</b></div>
                                <div className="col d-flex align-items-center justify-content-center font-weight-bold fs-5" style={{ backgroundColor: "#F9F7F7" }}> 00 </div>

                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card" style={{ flexDirection: "row", height: "120px" }}>

                                <div className="col d-flex align-items-center justify-content-center text-light" style={{ backgroundColor: "#3F72AF" }}><b>Days Absent</b></div>
                                <div className="col d-flex align-items-center justify-content-center font-weight-bold fs-5" style={{ backgroundColor: "#F9F7F7" }}> 01 </div>

                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card" style={{ flexDirection: "row", height: "120px" }}>

                                <div className="col d-flex align-items-center justify-content-center text-light" style={{ backgroundColor: "#3F72AF" }}><b>Billable Days (if) </b></div>
                                <div className="col d-flex align-items-center justify-content-center font-weight-bold fs-5" style={{ backgroundColor: "#F9F7F7" }}> 21 </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-4">
                    <div
                        className="card bg-light container shadow bg-white rounded"
                        style={{ width: "100%", height: "100%" }}
                    >
                        <div className="card-body ">
                            <div className="row pt-4 g-2">
                                <div class="col-sm input-group flex-nowrap">
                                    <span
                                        for="validationDefaultUsername"
                                        class="input-group-text"
                                        id="addon-wrapping"
                                    >
                                        Name
                                    </span>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="form4Example2"
                                        aria-label="Username"
                                        aria-describedby="addon-wrapping"
                                    />
                                </div>
                                <div class="col-sm input-group flex-nowrap">
                                    <span
                                        for="validationDefaultUsername"
                                        class="input-group-text"
                                        id="addon-wrapping"
                                    >
                                        Employee ID
                                    </span>
                                    <input
                                        type="number"
                                        class="form-control"
                                        id="form4Example2"
                                        aria-label="Username"
                                        aria-describedby="addon-wrapping"
                                    />
                                </div>
                            </div>
                            <div className="row pt-4 g-2">
                                <div class="col-sm input-group flex-nowrap">
                                    <span
                                        for="validationDefaultUsername"
                                        class="input-group-text"
                                        id="addon-wrapping"
                                    >
                                        Project Name
                                    </span>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="form4Example2"
                                        aria-label="Username"
                                        aria-describedby="addon-wrapping"
                                    />
                                </div>
                                <div class="col-sm input-group flex-nowrap">
                                    <span
                                        for="validationDefaultUsername"
                                        class="input-group-text"
                                        id="addon-wrapping"
                                    >
                                        Project ID
                                    </span>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="form4Example2"
                                        aria-label="Username"
                                        aria-describedby="addon-wrapping"
                                    />
                                </div>
                            </div>
                            <div className="row pt-4 g-2">
                                <div class="col-sm input-group flex-nowrap">
                                    <span
                                        for="validationDefaultUsername"
                                        class="input-group-text"
                                        id="addon-wrapping"
                                    >
                                        Date Of Joining
                                    </span>
                                    <input
                                        type="date"
                                        class="form-control"
                                        id="form4Example2"
                                        aria-label="Username"
                                        aria-describedby="addon-wrapping"
                                    />
                                </div>
                                <div class="col-sm input-group flex-nowrap pb-4">
                                    <span
                                        for="validationDefaultUsername"
                                        class="input-group-text"
                                        id="addon-wrapping"
                                    >
                                        Email
                                    </span>
                                    <input
                                        type="email"
                                        class="form-control"
                                        id="form4Example2"
                                        aria-label="Username"
                                        aria-describedby="addon-wrapping"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/*---------------------------------------------------Searchbox/new Timesheet ------------------------------------------------*/}

                <div className="container">
                    <div className="row">
                        <div className="col-3 pt-5">
                            <div className="form-group mb-3 search">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search"
                                />
                            </div>
                        </div>

                    </div>
                </div>

                {/*---------------------------------------------------------- Table ----------------------------------------------------------*/}
                <div className="px-2">
                    <div className="container pt-4 pb-2 shadow " style={{ backgroundColor: "#F9F7F7", borderRadius: "10px" }}>
                        <div style={{ height: "auto", maxHeight: "500px", overflow: "auto" }}>
                            <table class="table table-striped bg-white rounded" >
                                <thead
                                    className="rounded-top"
                                    style={{ backgroundColor: "#3F72AF", color: "white", fontSize: "17px", top: "0px", position: "sticky" }}
                                >
                                    <tr>
                                        <th scope="col">S.no</th>
                                        <th scope="col">Attendance</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Activity Performed/ Tasks</th>
                                        <th scope="col">No.Of Hours</th>
                                    </tr>
                                </thead>
                                <tbody style={{ fontSize: "17px" }}>
                                    <tr>
                                        <td>1</td>
                                        <td>Present</td>
                                        <td>01/01/2023</td>
                                        <td>Learned Python Basics</td>
                                        <td>9:00</td>
                                    </tr>

                                    <tr>
                                        <td>2</td>
                                        <td>Absent</td>
                                        <td>02/01/2023</td>
                                        <td>Learned MongoDB Basics</td>
                                        <td>8:30</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Present</td>
                                        <td>03/01/2023</td>
                                        <td>Learned MongoDB Basics</td>
                                        <td>9:00</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/*---------------------------------------------------- Submit for approval ----------------------------------------------------*/}

                <div className="container">
                    <div className="row" >
                        <div className="col p-4" align="right">

                            <button
                                type="button"
                                class="btn btn-primary "
                                data-bs-toggle="modal"
                                data-bs-target="#staticBackdrop2"
                            >
                                Approved
                            </button>
                            <button
                                type="button"
                                class="btn btn-danger ms-4"
                                data-bs-toggle="modal"
                                data-bs-target="#staticBackdrop2"
                            >
                                Rejected
                            </button>

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
export default TSA_View_Timesheet;
