import React from "react";
import "./Home.css"
import { GoogleLogin } from 'react-google-login';


const responseGoogle = (response) => {
    console.log(response);
}
const Home = (props) => {
    function logg() {
        props.history.push(`/Login`);
    }

    return (

        <div className="bg">
            <div className="Home">
                <h1> Welcome!</h1>
            </div>
            <div className="Login">
                <GoogleLogin
                    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
                <button id="button-log" onClick={logg}>Login</button>
            </div>
        </div >

    );
};

export default Home;
