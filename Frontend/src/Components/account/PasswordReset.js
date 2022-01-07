import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
// import { Box } from "@mui/system";
import {  Typography } from "@mui/material";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import "./login.css";
const PasswordReset = () => {
  const useStyles = makeStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      color: "black",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 120,
      "&>*": {
        padding: 20,
      },
      border: "1px solid grey",
      padding: 20,
      width: 800,
      marginLeft: 330,
      backgroundColor: "#f2f2f2",
      borderRadius: 20,
    },
    label: {
      display: "inline-block",
      position: "relative",
      right: "250px",
      fontWeight: "600",
      flex: 1,
      margin: "10px 30px",
    },
    textfield: {
      flex: 1,
      marginTop: 15,
      marginLeft: 31,
      position: "relative",
      right: "250px",
      fontSize: 25,
      border: "1px solid grey",
      padding: "2px 10px",
      backgroundColor: "white",
    },
    container: {
      display: "flex",
      marginTop: 10,
    },
    message: {
      display: "inline-block",
      position: "relative",
      margin: "10px auto",
      color: "#03e9f4",
    },
  });

  const classes = useStyles();

  const [credential, setcredential] = useState({ password: "" });

  const [message, setmessage] = useState({ cpassword: "", res: "" });

  let history = useHistory();

  let params = useParams();

  const handleChange = (e) => {
    setcredential({ ...credential, [e.target.name]: e.target.value });
    setmessage({ ...message, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      if (credential.password !== message.cpassword) {
        setmessage({ res: "The two passwords are not matching" });
      }

      console.log(credential.password);
      let response = await axios.post(
        `http://localhost:8000/api/password-reset/${params.userId}/${params.token}`,
        { password: credential.password }
      );
      console.log("response",response.data);
      history.push("/");
      console.log(response.data.status)
    } catch (error) {
      console.log(error);
    }
    setcredential({ username: "" });
  };

  return (
    <>
      {/* <Box className={classes.root}>
                <Typography variant='h3'>Password Reset</Typography>
                <FormControl>
                    <label htmlFor="Password" className={classes.label}>Password:</label>
                    <InputBase type="password" name="password" value={credential.password} onChange={handleChange} placeholder="Enter password" className={classes.textfield} required />
                    <label htmlFor="Password" className={classes.label}>Confirm Password:</label>
                    <InputBase type="password" name="cpassword" value={message.cpassword} onChange={handleChange} placeholder="Enter password" className={classes.textfield} required />
                </FormControl>
                <Button variant="contained" color="primary" onClick={handleSubmit}>Submit</Button>
                <Box className={classes.container}>
                    <Typography className={classes.message}>{message.res}</Typography>
                </Box>
            </Box> */}

      <div class="login-box">
        <h2>Password Reset</h2>
        <Typography className={classes.message}>{message.res}</Typography>

        <div class="user-box">
          <input
            type="password"
            name="password"
            value={credential.password}
            onChange={handleChange}
            required
          />
          <label htmlFor="Password">Password</label>
        </div>
        <div class="user-box">
          <input
            type="password"
            name="cpassword"
            value={message.cpassword}
            onChange={handleChange}
            required
          />
          <label>Confirm Password</label>
        </div>
        <button type="submit" onClick={handleSubmit}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </button>
        <br />
      </div>
    </>
  );
};

export default PasswordReset;
