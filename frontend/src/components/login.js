//import {useEffect, useState } from "react";
const Login = () => {
    return(
        <div className="login">
            <div className="login_window">
                <label>User id</label><br></br>
                <input className="userid" type="text"></input><br></br>
                <label>Password</label><br></br>
                <input className="password" type="password"></input><br></br>
                <button type="submit">Submit</button>
            </div>

        </div>
    );
}
export default Login;