import React from "react";

export default function ImageIntro(){
    return(
        <div className = "image-div">
            <img className = "doggo" src = "https://i.redd.it/1o9ba9v57lk61.jpg" alt="cute doggo"/>
            <div className="color">
                <p className = "name">Universal Xeno</p>
                <p className = "job">Frontend Developer</p>
                <p className = "web">cutedoggo.website</p>
            </div>
        </div>
    );
}