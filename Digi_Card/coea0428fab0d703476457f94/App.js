import React from "react";
import ImageIntro from "./ImageIntro.js";
import Body from "./Body.js";
import Buttons from "./Buttons.js";
import Footer from "./Footer.js";

export default function App(){
   return(
        <div>
            <ImageIntro />
            <Buttons />
            <Body />
            <Footer />
        </div>       
   ) 
}