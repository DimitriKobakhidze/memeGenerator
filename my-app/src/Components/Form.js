import React from "react";




export default function Form(props){

    return(
        <div className="form-div">
            <div className="input-div">
                <input 
                    className="input-el" 
                    placeholder="upper-text"
                    onChange={props.handleChange} 
                    type="text" 
                    name="upperText"   
                />
                <input 
                    className="input-el" 
                    placeholder="lower-text"
                    onChange={props.handleChange} 
                    type="text" 
                    name="lowerText" 
                />
            </div>
            <button className="input-btn" onClick={props.randomMemeUrl}>Get a new meme image  <span style={{color: "green"}}>🖼</span></button>
        </div>
    )

}