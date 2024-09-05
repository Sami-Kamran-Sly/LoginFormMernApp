import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Login() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();



  const handleSubmit =async(e)=>{

    e.preventDefault()

    try {
      

      const res = await axios.post(`${window.location.origin}/api/v1/auth/login`, {
        email,password
      })

      if(res){
        navigate("/")
      }else {
        alert("Invalid credentials")
      }

    } catch (error) {
      console.log(error)
    }



  }
  return (
    <div className="form-container " style={{ minHeight: "90vh" }}>
    <form onSubmit={handleSubmit}>
      <h4 className="title">LOGIN FORM</h4>

      <div className="mb-3">
        <input
          type="email"
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
          id="exampleInputEmail1"
          placeholder="Enter Your Email "
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Enter Your Password"
          required
        />
      </div>
     
      <button type="submit" className="btn btn-primary">
        LOGIN
      </button>
    </form>
  </div>
  )
}

export default Login
