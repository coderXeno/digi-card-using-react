import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";

function Page(){
    return(
        <div className = "page">
            <App />
        </div>
    );
}

ReactDOM.render(<Page />, document.getElementById("root"));