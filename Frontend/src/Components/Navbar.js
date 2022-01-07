import React, { useEffect } from "react";

import { useHistory } from "react-router";

const Navbar = (props) => {
 


  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("Logout")
    history.push("/");
    props.settoggle((prev) => !prev);
  };

  useEffect(() => {}, [props.toggle]);

  return (
    <>
    

      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <label class="navbar-brand" >OADMS</label>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse mx-5 align-items-center navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto mx-5 me-auto align-items-center me-auto mb-2 mb-lg-0">
        <li class="nav-item ">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" aria-current="page" href="/howto">How To</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="/about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="/contact">Contact</a>
        </li>
        {!localStorage.getItem("token")?<>   <li class="nav-item">
          <a class="nav-link text-white" href="/login">Login/Register</a>
        </li>
        </> : <><li class="nav-item">
          <label class="nav-link text-white" onClick={handleLogout} >Logout</label>
        </li></>}
       
       
      </ul>
     
    </div>
  </div>
</nav>
     
    </>
  );
};

export default Navbar;
