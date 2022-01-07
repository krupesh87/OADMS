import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
import "./passwordResetEmail.css";
const PasswordResetEmail = () => {
  const useStyles = makeStyles({
    container: {
      display: "flex",
      marginTop: 43,
   
    },
    login: {
      display: "inline-block",
      position: "relative",
      margin: "auto",
      marginTop:"auto",
      color: "white",
    },
    message: {
      display: "inline-block",
      position: "relative",
      margin: "10px auto",
    },
  });

  const classes = useStyles();

  const [credential, setcredential] = useState({ username: "", res: "" });

  const handleChange = (e) => {
    setcredential({ ...credential, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      let response = await axios.post(
        "http://localhost:8000/api/password-reset",
        credential
      );
      setcredential({ res: response.data });
    } catch (error) {
      console.log(error);
    }
    setcredential({ username: "" });
  };

  return (
    <>
      <div class="login-box">
        <h2> Password Reset </h2>
        <div class="user-box">
          <input
            type="text"
            name="username"
            value={credential.username}
            onChange={handleChange}
            required
          />
          <label htmlFor="Username"> Username </label>{" "}
        </div>
        <button type="submit" onClick={handleSubmit}>
          <span> </span> <span> </span> <span> </span> <span> </span>
          Submit{" "}
        </button>{" "}
        <br />
      
       <Box className={classes.container}>
          <Link className={classes.login} to="/login">
            {" "}
            Back to Login{" "}
          </Link>{" "}
          <Typography className={classes.message}>
            {" "}
            {credential.res}{" "}
          </Typography>{" "}
        </Box>
     
      </div>
    </>
  );
};

export default PasswordResetEmail;
