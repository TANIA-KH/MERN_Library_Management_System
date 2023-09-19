import React  from "react";
//import "./loginform.css";
const Login=()=>{
  
   return (
        <body>
        
      
        <div className="cover">
          <h1>Login</h1>
          <input type="text" placeholder="username" id="username" ></input>
          
        <input type="password" placeholder="password" id="password" ></input>
        <div className="login-btn">
        <button >Login</button></div>
        </div>
        </body>
    )
}
export default Login;