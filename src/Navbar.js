import React from "react";
import logo from './logo192.png';
export default function Navbar(){
    return (
        <nav>
            <img src={logo} alt = "" width="50px" className="logo spin"/>
            <h3>ReactFacts</h3>
            <h4>React Course - Project 1</h4>
        </nav>
    )
}
