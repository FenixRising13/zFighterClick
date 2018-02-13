import React from "react";
import logo from "./z_logo.png";
import "./Title.css";

class Title extends React.Component {
    render() {
        return (
            <div>
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Z Fighter Click</h2>
                </div>
                <div className="App-intro">
                    Try clicking each Z Fighter at Random. See if you can click all 12 without repeating.
                </div>
            </div>
        )
    }
}

export default Title;