import React from "react";
import logo from "../assets/pn-logo.png";
function Header ({BatchName}) {
    return (
        <header id="header">
            <img src={logo} alt="PN Logo" />
            <h1>Students results for {BatchName}</h1>
        </header>
    );
}
export default Header;