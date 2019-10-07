import React from "react";
import './Sidenav.css';
import History from "../History/History";

const sidenav = () => {
    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
    }

    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }

    return (
        <div>
            <div id="mySidenav" className="sidenav">
                <a className="closebtn" onClick={closeNav}>&times;</a>
                <History></History>
            </div>
            <span style={{float: "right", padding: 15, position: 'absolute', top: 12}} onClick={openNav}> <i
                className="fa fa-history fa-2x" aria-hidden="true"></i></span>
        </div>)
};

export default sidenav;