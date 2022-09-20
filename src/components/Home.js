import React from "react";

const Home = () => {
    const myStyle = {
        color: "white",
        backgroundColor: "blue",
        padding: "10px",
        fontFamily: "Sans-Serif"
        
    };

    return (
        <div>
            <h1 style={myStyle}>Game Gazer</h1>
            <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/most-popular-video-games-of-2022-1642612227.png"></img>
        </div>
    )
};

export default Home; 