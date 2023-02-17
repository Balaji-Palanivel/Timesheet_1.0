/*eslint-disable*/
import "./App.css";
import React from "react";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icon from "@fortawesome/free-solid-svg-icons";
import Logo from './person_images.png';
class Settings extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <Navbar />
                <div className="p-4 ">
                    <div
                        className="card bg-light container shadow p-3 mb-5 bg-white rounded"
                        style={{ width: "100%", height: "100%" }}
                    >
                        <div className="card-header"> Edit Profile</div>
                        <div className="card-body ">
                            <div className="row pt-4 g-2 justify-content-center flex-wrap" >
                                <div className="col-lg-2 text-center">
                                    <img
                                        src={Logo}
                                        alt=""
                                        width="180"
                                        height="200"
                                        style={{ borderRadius: "25px" }}
                                    />
                                </div>
                                <div className="col-lg-2 g-4 py-4 text-center" >

                                    <div class="btn-group dropend">
                                        <button className="btn btn-info dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><FontAwesomeIcon icon={icon.faUserPen} /> &nbsp; Edit</button>

                                        <ul class="dropdown-menu text-info">
                                            <li className="px-2 ">Select New Photo</li>
                                        </ul>
                                    </div>
                                    <div><button className="btn btn-info my-4" ><FontAwesomeIcon icon={icon.faTrash} /> &nbsp; Delete</button></div>
                                </div>
                            </div>
                            <div className="row pt-4 g-2">
                                <div class="col-sm input-group pt-4 flex-nowrap">
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
                                <div class="col-sm input-group pt-4 flex-nowrap">
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
                                <div class="col-sm input-group flex-nowrap">
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

                                <div className="row pt-4 g-2">
                                    <div className="text-center ">
                                        <button className="btn btn-primary col-sm-3 ">Save</button>
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
export default Settings;
