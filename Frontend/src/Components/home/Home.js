import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import "react-tailblocks";

const Home = (props) => {
  useEffect(() => {
    props.getUser();
    // eslint-disable-next-line
  }, []);

  return (
    <>
    <br/><br/>
      <div className="d-flex mt-5 justify-content-center">
        <br/>
        <br/>
        <br/>
        <h1 className="h1h mt-5"> WELCOME TO OADMS </h1> <br />
        <br />
      </div>{" "}
      <h4 className="h44 d-flex justify-content-center mx-2 align-item-center mt-5">
        {" "}
        One stop solution to all your broadcasting and advertising needs!!!{" "}
      </h4>
      <br/>
      <br/>
      <div className=" row mx-5 d-flex justify-content-center align-items-center mt-5">
        <div className=" mx-5 mt-2 d-flex justify-content-center align-items-center  home">
          <Link to="/ourchannel" className="btns ">
            <span> </span> <span> </span> <span> </span> <span> </span>
            BOOK A SLOT{" "}
          </Link>{" "}
        </div>

        <div className="mx-5 mt-2 d-flex justify-content-center align-items-center  home1">
          <Link to="/ouradvertisement" className="btns ">
            <span> </span> <span> </span> <span> </span> <span> </span>
            SUBMIT AN AD{" "}
          </Link>{" "}
        </div>
      </div>{" "}
    </>
  );
};

export default Home;
