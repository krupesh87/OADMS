import React, { useState } from "react";

import { contactemail } from "../../Services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./contact.css";
export default function Contact() {
  const [credential, setcredential] = useState({
    name: "",
    email: "",
    Message: "",
  });
  const handleChange = (e) => {
    setcredential({ ...credential, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = await contactemail(credential);
    console.log(data)
    toast.success("Query has been mail to customer care Department");
    setcredential({
      name: "",
      email: "",
      Message: "",
    });
  };
  return (
    <>
      {" "}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
      />{" "}
      <div>
        <div className="d-flex mt-5 justify-content-center">
          <h1 className="h1a mt-0 mx-1"> CONTACT </h1> <br />
          <br />
          <br />
        </div>{" "}
        <div class="container mt-5 overflow-hidden">
          <div class="row gx-5 mx-3">
            <div class="col">
              <div
                class="card mt-3"
                style={{ width: "18rem", backgroundColor: "rgba(0,0,0,.5)" }}
              >
                <div class="card-body">
                  <h5 class="card-title">
                    {" "}
                    <i
                      class="fas fa-map-marked-alt"
                      style={{
                        color: "#00f2ff",
                        fontSize: "50px",
                        position: "relative",
                        display: "inline-block",
                        left: "100px",
                      }}
                    ></i>{" "}
                  </h5>{" "}
                  <br />
                  <h6
                    class="card-subtitle mb-2 "
                    style={{
                      color: "#fff",
                      fontSize: "25px",
                      position: "relative",
                      display: "inline-block",
                      left: "75px",
                    }}
                  >
                    <strong> Address </strong>{" "}
                  </h6>{" "}
                  <br />
                  <br />
                  <p
                    class="card-text"
                    style={{
                      color: "#00f2ff",
                      position: "relative",
                      display: "inline-block",
                      left: "0px",
                    }}
                  >
                    OADMS Pvt.Ltd. <br />
                    <br />
                    Vasai(West) <br />
                    <br />
                    Maharashtra - 401202 <br />
                    <br />
                    <br />
                  </p>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div class="col">
              <div
                class="card mt-3"
                style={{ width: "18rem", backgroundColor: "rgba(0,0,0,.5)" }}
              >
                <div class="card-body">
                  <h5 class="card-title">
                    {" "}
                    <i
                      class="fas fa-clock"
                      style={{
                        color: "#00f2ff",
                        fontSize: "50px",
                        position: "relative",
                        display: "inline-block",
                        left: "100px",
                      }}
                    ></i>{" "}
                  </h5>{" "}
                  <br />
                  <h6
                    class="card-subtitle mb-2"
                    style={{
                      color: "#fff",
                      fontSize: "25px",
                      position: "relative",
                      display: "inline-block",
                      left: "60px",
                    }}
                  >
                    <strong> Work Hours </strong>{" "}
                  </h6>{" "}
                  <br />
                  <br />
                  <p
                    class="card-text"
                    style={{
                      color: "#00f2ff",
                      position: "relative",
                      display: "inline-block",
                      left: "0px",
                    }}
                  >
                    Mon - Fri &nbsp; 9: 00 am - 9: 00 pm <br />
                    <br />
                    Sat &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; 9: 00 am 6: 00
                    pm <br />
                    <br />
                    Sun &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Holiday <br />
                    <br />
                    <br />
                  </p>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div class="col">
              <div
                class="card mt-3"
                style={{ width: "18rem", backgroundColor: "rgba(0,0,0,.5)" }}
              >
                <div class="card-body">
                  <h5 class="card-title">
                    {" "}
                    <i
                      class="fas fa-mobile"
                      style={{
                        color: "#00f2ff",
                        fontSize: "50px",
                        position: "relative",
                        display: "inline-block",
                        left: "110px",
                      }}
                    ></i>{" "}
                  </h5>{" "}
                  <br />
                  <h6
                    class="card-subtitle mb-2 "
                    style={{
                      color: "#fff",
                      fontSize: "25px",
                      position: "relative",
                      display: "inline-block",
                      left: "55px",
                    }}
                  >
                    <strong> Contact Info </strong>{" "}
                  </h6>{" "}
                  <br />
                  <br />
                  <p
                    class="card-text"
                    style={{
                      color: "#00f2ff",
                      position: "relative",
                      display: "inline-block",
                      left: "0px",
                    }}
                  >
                    info @oadms.comm <br />
                    <br />
                    +91 9988776655 <br />
                    <br />
                    +91 9988776666 <br />
                    <br />
                    <br />
                  </p>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>
          <div className="row gx-5 mx-3">
            <div className="col mt-5 mx-0">
              <div
                class="card"
                style={{ width: "94%", backgroundColor: "rgba(0,0,0,.5)" }}
              >
                <div class="card-body">
                  <h1
                    style={{ fontSize: "25px" }}
                    class="card-title d-flex justify-content-center text-white"
                  >
                    {" "}
                    <strong> Get In Touch </strong>{" "}
                  </h1>{" "}
                  <br />
                  <div class="user-box">
                    <input
                      type="text"
                      name="name"
                      value={credential.name}
                      onChange={handleChange}
                      required
                    />
                    <label> Full Name </label>{" "}
                  </div>{" "}
                  <div class="user-box">
                    <input
                      type="email"
                      name="email"
                      value={credential.email}
                      onChange={handleChange}
                      required
                    />
                    <label> Email </label>{" "}
                  </div>{" "}
                  <div class="user-box">
                    <input
                      name="Message"
                      value={credential.Message}
                      onChange={handleChange}
                      required
                    />
                    <label> Message </label>{" "}
                  </div>{" "}
                  <div className="d-flex justify-content-start align-items-center">
                    <button onClick={handleSubmit} className="contact-btn ">
                      <span> </span> <span> </span> <span> </span>{" "}
                      <span> </span>
                      submit{" "}
                    </button>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <br />
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
}
