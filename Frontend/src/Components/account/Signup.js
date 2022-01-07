import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles';

import { Link } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router';
import './signup.css'

const Signup = () => {

    const useStyles = makeStyles({
       
        login: {
            display: 'inline-block',
            position: 'relative',
            margin: '10px auto',
            left : 170,
            color: 'white'
        }
    });

    const classes = useStyles();

    const history = useHistory();

    const [credential, setcredential] = useState({ username: "", email: "", password: "" });

    const handleChange = (e) => {
        setcredential({ ...credential, [e.target.name]: e.target.value })
    }

    const handleSubmit = async () => {
       try {
        let response = await axios.post("http://localhost:8000/api/users/createuser", credential);
        if (response.data.success) {
            console.log("Email Sent")
            history.push("/activationmail")
            setcredential({ username: "", email: "", password: "" });
        }
       } catch (error) {
           console.log(error)
       }
    }

    return (
        <>
    <div class="signup-box">
  <h2>Register</h2>

 
    <div class="user-box">
      <input type="text"  size={50} name="username" value={credential.username} onChange={handleChange} required/>
      <label>Username</label>
    </div>
 
    <div class="user-box">
      <input type="text" size={50} name="email" value={credential.email} onChange={handleChange} required/>
      <label>Email</label>
    </div>
    <div class="user-box">
      <input type="password" size={50} name="password" value={credential.password} onChange={handleChange} required/>
      <label>Password</label>
    </div>
   <div className='user-box'>
   <button className="signup-btn" type="submit" onClick={handleSubmit}>
  
  <span></span>
  <span></span>
  <span></span>
  <span></span> 
  REGISTER
  </button>
   </div>
    <br/>
    <Link className={classes.login} style={{fontSize : '11px '}}to="/login" > Back to Login</Link><br/>
   
  
 
</div>

        </>
    )
}

export default Signup
