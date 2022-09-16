import React from "react";






export default function Meme(props){
    const style={
        backgroundImage: "url(" + props.randomUrl + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
    }

    return(
        <div className="meme-pic-div">
            <h1 className="upper-text">{props.inputValues.upperText}</h1>
            <h1 className="lower-text">{props.inputValues.lowerText}</h1>
            <img src={props.randomUrl} className="meme-pic"></img>
        </div>
    )
}