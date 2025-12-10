import axios from "axios";
import React, { useState } from "react";

const Login = () => {

  const [emailId, setEmailid] = useState("rahul@gmail.in");
  const[password, setPasssword] = useState("Rahul@123$$");

  const handleLogin =async() =>{
    
    try{
      const res = axios.post("http://localhost:3000/login",{
        emailId,
        password
    },{withCredentials:true})
  }
    catch(err){
      console.log(err.message);
      
    }
  } 
  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-200 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title justify-center">Login</h2>
          <div className="">
            <fieldset className="fieldset my-2">
              <legend className="fieldset-legend">Email Id</legend>
              <input 
                type="text"  
                value={emailId}
                className="input" 
                placeholder="" 
                onChange={(e) => setEmailid(e.target.value)}
              />
            </fieldset>

            <fieldset className="fieldset my-2">
              <legend className="fieldset-legend">Password</legend>
              <input 
                type="text" 
                value={password}
                className="input"
                onChange={(e) => setPasssword(e.target.value)} 
                placeholder="" 
              />
            </fieldset>
          </div>
          <div className="card-actions justify-center">
            <button className="btn btn-primary" onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
