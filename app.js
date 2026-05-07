import React from "react";
import ReactDOM from "react-dom/client";
import myLogo from "url:./assets/wkc__logo.png";
import dosa from "url:./assets/SKCT.png";
import amazing_khana from "url:./assets/amazing khana.png";
import apna_dhaba from "url:./assets/apna dhaba.png";
import CDH from "url:./assets/CDH.png";
import eat_healthy from "url:./assets/Eat Healthy.png";
import NSK from "url:./assets/NSK.png";
import NTJ from "url:./assets/NTJ.png";
import RTH from "url:./assets/RTH.png";



// React.createElement => it is a java script object => not an html element
// render method converts this js object into htmml emlement and place it to the root
const heading = React.createElement("h1",{id:"heading"},"Hii Everyone welcome");

const jsxheading = (
    <h1 id = "heading">Hii wlecome</h1>
)


/**
 * Header
 *   Logo
 *   Nav Items(Home, About US)
 * Body
 *   Search bar
 *   Restraunt Container
 *     Restraunt Card
 *       Image
 *       Name of restraunt
 *       star rating
 *       Time for delivery
 *       cuisine
 * Footer
 *  copyright
 *  Links
 *  Contact Info
 *  Address
 */

const Header = () => {
    return(
        <div className="header">
            <div className="logo-container">
                {console.log("myLogo", myLogo)}
                <img className="logo" src={myLogo}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About US</li>
                    <li>Contact US</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestrauntCard = (props) => {
    return(
        <div className="res-card">
            <img className="res-logo" src={props.image}></img>
            <h5>Meghana Foods</h5>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search-bar">Search</div>
            <div className="restraunt-container">
                <RestrauntCard image = {dosa}/>
                <RestrauntCard image = {CDH}/>
                <RestrauntCard image = {NSK}/>
                <RestrauntCard image = {RTH}/>
                <RestrauntCard image = {NTJ}/>
                <RestrauntCard image = {amazing_khana}/>
                <RestrauntCard image = {apna_dhaba}/>
                <RestrauntCard image = {eat_healthy}/>
            </div>
        </div>
    )
}


const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);

// functional component

const HeadingComponent = () =>{
    return(
        <div id = "container">
            {jsxheading}
            {jsxheading}
            {100+200}
            <h1>Hello bro</h1>
        </div>
    )
        
    
}

root.render(<AppLayout />);