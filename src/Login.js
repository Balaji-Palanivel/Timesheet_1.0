/*eslint-disable*/
import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { NavLink } from "react-router-dom";

class Login extends React.Component {
  constructor() {
    super();
  }
  myFunction() {
    let x = document.getElementById("password_eye");
    x.type === "password" ? x.type = "text" : x.type = "password"
    }
  
  render() {
    return (
      <div className="yhu" style={{width : "max-width" ,backgroundImage : `url("https://img.freepik.com/premium-vector/geometrical-monochromatic-background-minimal-style_23-2148942313.jpg")`, backgroundRepeat : "no-repeat", backgroundSize : "cover",height: "100vh"}}>
        <div className="row  px-4">
          <div className="col card my-2 rounded-3" style={{ maxWidth: "500px" }}>
            <div className="row">
              <div className="card-header text-center">
            
                <img
                  src="https://www.asmltd.com/wp-content/uploads/2019/12/New-ASM-Logo-with-R.png"
                  className="p-2 rounded-top img-fluid"
                  alt=""
                 
                />
                
              </div>
            </div>

            <div className="card-body px-5 text-center">
              <h3>
                Login
              </h3>
              <form>
             
                <div className="row">
                  <div className="col-sm">
                    <div class="col-sm input-group flex-nowrap py-3">
                      <span
                        for="validationDefaultUsername"
                        class="input-group-text"
                        id="addon-wrapping"
                      >
                        Employee ID
                      </span>
                      <input
                        type="email"
                        class="form-control"
                        id="employee_id"
                        aria-label="Username"
                        aria-describedby="addon-wrapping"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm">
                    <div class="col-sm input-group flex-nowrap py-3">
                      <span
                        for="validationDefaultUsername"
                        class="input-group-text"
                        id="addon-wrapping"
                      >
                        Password
                      </span>
                      <input
                        type="password"
                        class="form-control"
                        id="password_eye"
                        aria-label="Username"
                        aria-describedby="addon-wrapping"
                        required
                      />
                      <button
                        class="btn btn-outline-secondary"
                        type="button"
                        id="button-addon2"
                        onClick={this.myFunction}
                      >
                        <FontAwesomeIcon icon={faEye} />
                      </button>
                    </div>
                  </div>
                </div>
                
                
                <div className="row text-center py-4" >
                  <div className="col-sm" >
                  <NavLink exact to="timesheet"> <button type="submit" className="btn btn-info">
                      &nbsp;&nbsp; Login &nbsp;&nbsp;
                    </button></NavLink>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
<div className="text-center" style={{paddingBottom : "55px"}}>
        <div>
          <a className="text-light">Don't have an account? </a>
        </div>
        <div>
        <NavLink exact to="SignUp"> <a href="" className="text-light">SighUp Here</a> </NavLink>
        </div>
      </div>
      </div>
    );
  }
}

export default Login;
