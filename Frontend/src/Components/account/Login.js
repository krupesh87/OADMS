import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";

import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router";
import "./login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = (props) => {
  const useStyles = makeStyles({
    register: {
      display: "inline-block",
      position: "relative",
      left: 80,
      color: "white",
    },
    forgot: {
      display: "inline-block",
      position: "relative",
      top: -120,
      left: 4,
      color: "white",
    },
  });

  const classes = useStyles();

  const history = useHistory();

  const [credential, setcredential] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setcredential({ ...credential, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      let response = await axios.post(
        "http://localhost:8000/api/users/login",
        credential
      );
      if (response.data.success) {
        localStorage.setItem("token", response.data.authtoken);
        history.push("/");
        props.settoggle((prev) => !prev);
        toast.success("Logged In Succesfully");
        // alert("Logged In succesfully");
      }
    } catch (error) {
      toast.error("Incorrect Credentials");
      // alert("Incorrect credentials");
      console.log(error);
    }
    setcredential({ username: "", password: "" });
  };

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
      <div class="login-box">
        <h2> Login </h2>
        <div class="user-box">
          <input
            type="text"
            name="username"
            value={credential.username}
            onChange={handleChange}
            required
          />
          <label> Username </label>{" "}
        </div>{" "}
        <div class="user-box">
          <input
            type="password"
            name="password"
            value={credential.password}
            onChange={handleChange}
            required
          />
          <label> Password </label>{" "}
        </div>{" "}
        <div className="user-box">
          <button className="login-btn" type="submit" onClick={handleSubmit}>
            <span> </span> <span> </span> <span> </span> <span> </span>
            LOGIN{" "}
          </button>{" "}
        </div>{" "}
        <br />
        <Link
          className={classes.register}
          style={{ fontSize: "11px" }}
          to="/signup"
        >
          Don 't have an account? Register{" "}
        </Link>{" "}
        <br />
        <Link
          className={classes.forgot}
          style={{ fontSize: "11px" }}
          to="/password-reset"
        >
          Forgot Password ?
        </Link>{" "}
      </div>{" "}
    </>
  );
};

export default Login;
