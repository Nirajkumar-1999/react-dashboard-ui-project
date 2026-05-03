

// creating nested React element 
{/* <div id = "parent">
    <div id = "child">
        <h1>
        </h1>
        <h2></h2>
    </div>
     <div id = "child2">
        <h1>
        </h1>
        <h2></h2>
    </div>
</div> */}



// const heading = React.createElement("h1", {id:"headings"}, "Hello Mr Kumar");

// console.log(heading);

const parent = React.createElement(
    "div", {id:"parent"}, [
    React.createElement(
       "div", {id:"child1"},[
        React.createElement("h1", {}, "Hello Niraj"),
        React.createElement("h2", {}, "Hello Niraj kaise ho"),
        ]
    ),
    React.createElement(        
        "div", {id:"child2"},[
        React.createElement("h1", {}, "Hello Niraj"),
        React.createElement("h2", {}, "Hello Niraj kaise ho"),
    ]),
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);