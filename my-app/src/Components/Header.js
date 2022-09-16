import React from "react";
import trollLogo from "../Images/Troll Face.png"



export default function Header(){
    return(
        <header className="main-header">
            <div className="header-icon">
                <img src={trollLogo} className="troll-logo"></img>
                <h2 className="header-icon-text">Meme Generator</h2>
            </div>
        </header>
    )
}