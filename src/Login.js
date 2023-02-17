/*eslint-disable*/
import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icon from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import $ from "jquery";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink } from "react-router-dom";
import Timesheet from "./Timesheet";
import { createBrowserHistory } from 'history'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login_id: "",
      login_password: "",
      login_status: ""
    }
    this.checkForLogin = this.checkForLogin.bind(this)
    this.move = this.move.bind(this)

  }
  history = createBrowserHistory()


  myFunction() {
    let x = document.getElementById("password_eye");
    x.type === "password" ? x.type = "text" : x.type = "password"
  }
  // fun_2() {
  //   fetch('http://localhost:5000/', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(this.state)
  //   });
  // }

  // fun_1() {
  //   $.ajax({
  //     url: "http://localhost:5000/",
  //     contentType: "application/json",
  //   })
  //     .done(
  //       function (abcd) {
  //         console.log(abcd);
  //         this.setState({ "login_status": abcd })
  //       }.bind(this)
  //     )
  //     .fail(function (datas) { });

  // }


  success_notify() {
    toast.success("Login Success")
    this.setState({ login_status: true })
  }
  fail_notify() {
    toast.info("Login Fail")
    this.setState({ login_status: false })
  }

  checkForLogin = async (event) => {
    console.log("result");
    const response = await fetch('http://localhost:5000/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    });
    const result = await response.json();
    (result.success == "True") ? this.success_notify() : this.fail_notify();

  }
  move() {
    if (this.state.login_status) {
      this.history.push('/timesheet')
      location.reload()
    }
    else {
      this.history.push('/')
      location.reload()
    }
  }



  render() {
    return (


      <div className="yhu" style={{ width: "max-width", backgroundImage: `url("https://img.freepik.com/premium-vector/geometrical-monochromatic-background-minimal-style_23-2148942313.jpg")`, backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "100vh" }}>
        <ToastContainer autoClose={false} closeOnClick={true} closeButton={<FontAwesomeIcon icon={icon.faXmarkCircle} onClick={this.move} className="fs-4 mt-2 text-info" />} />
        <div className="row  px-4" >
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
                    <div className="col-sm input-group flex-nowrap py-3">
                      <span
                        className="input-group-text"
                        id="addon-wrapping"
                      >
                        Employee ID
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        id="employee_id"
                        aria-label="Username"
                        aria-describedby="addon-wrapping"
                        onChange={(e) => this.setState({ "login_id": e.target.value })}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm">
                    <div className="col-sm input-group flex-nowrap py-3">
                      <span
                        className="input-group-text"
                        id="addon-wrapping"
                      >
                        Password
                      </span>
                      <input
                        type="password"
                        className="form-control"
                        id="password_eye"
                        aria-label="Username"
                        aria-describedby="addon-wrapping"
                        onChange={(e) => this.setState({ "login_password": e.target.value })}
                        required
                      />
                      <button
                        className="btn btn-outline-secondary"
                        type="button"
                        id="button-addon2"
                        onClick={this.myFunction}
                      >
                        <FontAwesomeIcon icon={icon.faEye} />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="row text-center py-4" >
                  <div className="col-sm" >
                    <button type="button" className="btn btn-info" onClick={this.checkForLogin}>
                      &nbsp;&nbsp; Login &nbsp;&nbsp;
                    </button>

                  </div>
                </div>
              </form>
            </div>
          </div>
        </div >
        <div className="text-center" style={{ paddingBottom: "55px" }}>
          <div>
            <a className="text-light">Don't have an account? </a>
          </div>
          <div>
            <NavLink exact to="SignUp"> <a className="text-light">SighUp Here</a> </NavLink>
          </div>
        </div>

      </div >
    );
  }
}

export default Login;
