import React from "react";

import logo from "../../images/icon.png";

function Header(){

    return <div className="header">

        <img  className="logo" src={logo}></img>

        <h2 className="header-text">My travel journal</h2>
    </div>
}

export default Header