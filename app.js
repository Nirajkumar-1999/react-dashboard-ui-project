import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => it is a java script object => not an html element
// render method converts this js object into htmml emlement and place it to the root
const heading = React.createElement("h1",{id:"heading"},"Hii Everyone welcome");

const jsxheading = (
    <h1 id = "heading">Hii wlecome</h1>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);

// functional component

const HeadingComponent = () =>{
    return(
        <div id = "container">
            {100+200}
            <h1>Hello bro</h1>
        </div>
    )
        
    
}

root.render(<HeadingComponent />);