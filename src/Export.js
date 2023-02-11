import logo from "./logo.svg";
import "./App.css";
import React from "react";
import $ from "jquery";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icon from "@fortawesome/free-solid-svg-icons";

class Export extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>

                <Navbar />


                <div className="p-4">
                    <div
                        className="card bg-light container shadow p-3 mb-5 bg-white rounded "
                        style={{ width: "100%", height: "100%" }}>
                        <div className="card-header"> Export</div>
                        <div className="card-body ">
                            <div className="row justify-content-evenly">
                                <div className="col-lg-5">
                                    <div className="row">
                                        <div >
                                            <div class=" input-group flex-nowrap py-4 ">

                                                <span
                                                    for="validationDefaultUsername"
                                                    class="input-group-text "
                                                    id="addon-wrapping"
                                                    style={{ paddingInlineEnd: "40px" }}
                                                >
                                                    Date
                                                </span>

                                                <input
                                                    type="text"
                                                    id="reportrange"
                                                    name="datefilter"
                                                    value=""
                                                    className="form-control"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div>
                                            <div class=" input-group flex-nowrap py-4 ">

                                                <span
                                                    for="validationDefaultUsername"
                                                    class="input-group-text "
                                                    id="addon-wrapping"

                                                >
                                                    File Name
                                                </span>

                                                <select
                                                    class="custom-select form-control"
                                                    id="export_file_format"
                                                    style={{ backgroundColor: "white" }}
                                                >
                                                    <option selected>Choose...</option>
                                                    <option value="1">Execl &nbsp; (.xlsl)</option>
                                                    <option value="2">Pdf   &nbsp; (.pdf)</option>

                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div >
                                            <div class=" input-group flex-nowrap py-4 ">

                                                <span
                                                    for="validationDefaultUsername"
                                                    class="input-group-text "
                                                    id="addon-wrapping"
                                                >
                                                    File Name
                                                </span>

                                                <input
                                                    type="text"
                                                    id="export_file_name"
                                                    name="file_name"
                                                    className="form-control"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-1 vl g-4"></div>
                                <div className="col-lg-3 d-flex align-items-center justify-content-center pad" style={{ paddingInlineStart: "5%" }}>
                                    <div><FontAwesomeIcon icon={icon.faFileExport} style={{ width: "40%", height: "40%" }} />
                                        <p className="fs-5 " > &nbsp; Export </p></div>


                                </div>


                            </div>



                        </div>
                    </div>
                </div>
                <div className="p-4">

                    <div
                        className="card bg-light container shadow p-3 mb-5 bg-white rounded "
                        style={{ width: "100%", height: "100%" }}>
                        <div className="card-header"> Back Up's</div>
                        <div className="card-body ">
                            <div className="row flex-wrap">
                                <div className="col-lg ">
                                    <div className="row ">
                                        <div className="col-sm-2 pt-4">
                                            <FontAwesomeIcon icon={icon.faFile} style={{ width: "40%", height: "40%" }} />
                                            <p className="fs-6">May 2023</p>
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>



                    </div>
                </div>
            </div>


        );
    }
}
export default Export;
