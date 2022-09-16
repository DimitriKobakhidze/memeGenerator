import React from "react";
import Header from "./Components/Header";
import Form from "./Components/Form";
import Meme from "./Components/Meme";



export default function App(){
    React.useEffect(() =>{
        fetch("https://api.imgflip.com/get_memes")
            .then((respone) => respone.json())
            .then((data) => setMemeData(data.data.memes))
        }
        ,[]
    )
    const [inputValues,setInputValues] = React.useState({upperText:"UPPER TEXT",lowerText:"LOWER TEXT"})
    const [memeData,setMemeData] = React.useState()
    const [randomUrl,setRandomUrl] = React.useState("https://i.imgflip.com/23ls.jpg")


    function randomMemeURL(){
            setRandomUrl(memeData[Math.floor(Math.random() * 100)].url)
    }



    function handleChange(event){
        setInputValues(prev => {
            return(
                {
                    ...prev,
                    [event.target.name] : event.target.value
                }
            )
        })
    }
    return(
        <div className="container">
            <Header />
            <Form inputValues = {inputValues} handleChange = {handleChange} randomMemeUrl ={randomMemeURL}/>
            <Meme inputValues = {inputValues}  randomUrl={randomUrl}/>
        </div>
    )
}