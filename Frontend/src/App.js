import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/home/Home";
import Login from "./Components/account/Login";
import Signup from "./Components/account/Signup";
import ActivationEmail from "./Components/account/ActivationEmail";
import PasswordReset from "./Components/account/PasswordReset";
import PasswordResetEmail from "./Components/account/PasswordResetEmail";
import Channels from "./Components/channels/Channels";
import Channel from "./Components/channels/Channel";
import About from "./Components/home/about";
import Contact from "./Components/home/contact";
import OurChannel from "./Components/channels/OurChannel";
import Advertising from "./Components/home/Advertising";
import OurAdvertisement from "./Components/home/OurAdvertisement";
import Vedio from "./Components/Vedio.js";
import Toasst from './Components/toast/Toasst';
function App() {
  const [toggle, settoggle] = useState(false);
  const [user, setuser] = useState({});
  const [toast, setToast] = useState(null);
  const [type, setType] = useState("")

  const getUser = async () => {
    const response = await fetch("http://localhost:8000/api/users/getuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    let json = await response.json();
    setuser(json);
    settoggle((prev) => !prev);
    console.log(user);
  };

  const showToast = (message) => {
    setToast(message);
  }

  const showType = (type) => {
    setType(type);
  }

  return (
    <>
      <Router>
        <Navbar toggle={toggle} settoggle={settoggle} />{" "}
        <Toasst toast={toast} type={type} />{" "}
        <Switch>
          <Route exact path="/">
            <Home
              getUser={getUser}
              username={user.username}
              email={user.email}
            />{" "}
          </Route>{" "}
          <Route exact path="/login">
            <Login toggle={toggle} settoggle={settoggle} />{" "}
          </Route>{" "}
          <Route exact path="/signup">
            <Signup />
          </Route>{" "}
          <Route exact path="/about">
            <About />
          </Route>{" "}
          <Route exact path="/contact">
            <Contact />
          </Route>{" "}
          <Route exact path="/Advertising">
            <Advertising />
          </Route>{" "}
          <Route exact path="/ouradvertisement">
            <OurAdvertisement />
          </Route>{" "}
          <Route exact path="/activationmail">
            <ActivationEmail />
          </Route>{" "}
          <Route exact path="/password-reset">
            <PasswordResetEmail />
          </Route>{" "}
          <Route exact path="/password-reset/:userId/:token">
            <PasswordReset />
          </Route>{" "}
          <Route exact path="/ourchannel">
            <OurChannel />
          </Route>{" "}
          <Route exact path="/channels">
            <Channels />
          </Route>{" "}
          <Route exact path="/howto">
            <Vedio />
          </Route>{" "}
          <Route exact path="/channels/:channelname">
            <Channel
              getUser={getUser}
              username={user.username}
              email={user.email}
            />{" "}
          </Route>{" "}
        </Switch>{" "}
      </Router>{" "}
    </>
  );
}

export default App;
