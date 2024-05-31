import React from "react";
import memesData from "../memesData.js";
import ColorPicker from "./textcolor.jsx";

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
        topTextColor: "white",
        bottomTextColor: "white"
    });
    const [allMemeImages, setAllMemeImages] = React.useState(memesData);
    const [currentMemeIndex, setCurrentMemeIndex] = React.useState(0);

    function getMemeImage() {
        const memesArray = allMemeImages.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNumber].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }));
        setCurrentMemeIndex(randomNumber);
    }

    function getPreviousMemeImage() {
        const memesArray = allMemeImages.data.memes;
        let newIndex = currentMemeIndex - 1;
        if (newIndex < 0) {
            newIndex = memesArray.length - 1;
        }
        const url = memesArray[newIndex].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }));
        setCurrentMemeIndex(newIndex);
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }));
    }

    return (
        <main>
            <div className="form">
              <div><p>Top text</p>
               <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                /></div> 
               
                <div>
                    <p>Bottom text</p>
                    <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                /></div>
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
    
                <ColorPicker 
                    topTextColor={meme.topTextColor} 
                    bottomTextColor={meme.bottomTextColor} 
                    handleChange={handleChange} 
                />
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" alt="Meme" />
                <h2 className="meme--text top" style={{ color: meme.topTextColor }}>{meme.topText}</h2>
                <h2 className="meme--text bottom" style={{ color: meme.bottomTextColor }}>{meme.bottomText}</h2>
            </div>
        </main>
    );
}
