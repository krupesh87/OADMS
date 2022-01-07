import React, { Component } from "react";
import { sendAdvertisementEmail } from "../../Services/api";
import "./Advertising.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default class Advertising extends Component {
  state = {
    name: "",
    contactno: "",
    email: "",
    advertisementurl: "",
    datefrom: "",
    dateto: "",
    size: "",
  };

  handleSubmit = async () => {
    await sendAdvertisementEmail(this.state);
    this.setState({
      name: "",
      contactno: "",
      email: "",
      advertisementurl: "",
      datefrom: "",
      dateto: "",
      size: "",
    });
    toast.success("We have recieved your mail you will be contacted very soon");
    // alert("We have recieved your mail you will be contacted very soon")
    this.setState({
      name: "",
      contactno: "",
      email: "",
      advertisementurl: "",
      datefrom: "",
      dateto: "",
      size: "",
    });
    setTimeout(() => {
      window.location.reload()
    },5210 );
  };

  render() {
    return (
      <>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
        />{" "}
        <div className="adver-box">
          <h2> Advertising </h2>
          <div className="user-box">
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
              required
            />
            <label> Name </label>{" "}
          </div>{" "}
          <div className="user-box">
            <input
              type="number"
              name="contactno"
              value={this.state.contactno}
              onChange={(e) => this.setState({ contactno: e.target.value })}
              required
            />
            <label> Contact No </label>{" "}
          </div>{" "}
          <div className="user-box">
            <input
              type="email"
              name="email"
              onChange={(e) => this.setState({ email: e.target.value })}
              required
            />
            <label> Email </label>{" "}
          </div>{" "}
          <div className="user-box">
            <input
              type="text"
              name="advertisementurl"
              onChange={(e) =>
                this.setState({ advertisementurl: e.target.value })
              }
              required
            />
            <label> Advertisement URL </label>{" "}
          </div>{" "}
          <div className="user-box">
            {" "}
            <br />
            <input
              type="date"
              name="datefrom"
              onChange={(e) => this.setState({ datefrom: e.target.value })}
              required
            />
            <label> Date From </label>{" "}
          </div>{" "}
          <div className="user-box">
            <br />
            <input
              type="date"
              name="dateto"
              onChange={(e) => this.setState({ dateto: e.target.value })}
              required
            />
            <label> Date To </label>{" "}
          </div>{" "}
          <div className="user-box">
            <input
              type="text"
              name="size"
              onChange={(e) => this.setState({ size: e.target.value })}
              required
            />
            <label> Size </label>{" "}
          </div>{" "}
          <button
            className="login-btn"
            type="submit"
            onClick={this.handleSubmit}
          >
            <span> </span> <span> </span> <span> </span> <span> </span>
            Submit{" "}
          </button>{" "}
          <br />
        </div>{" "}
      </>
    );
  }
}
