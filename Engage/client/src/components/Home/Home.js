import React from "react";
import "./Home.css"
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
                <form>
                    <ul>     Name:
                        <input type="text" name="name" /> </ul>
                    <ul> Password:
                        <input type="text" name="password" /></ul>

                </form>
                <button id="button-log" onClick={logg}>Login</button>
            </div>
        </div >

    );
};

export default Home;
