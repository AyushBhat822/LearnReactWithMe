

//Part Two
/**     How to create nested structure in React, Siblings
 *     <div id="parent">
 *          <div id="child 1 ">
 *              <h1> I'm h1 Tag</h1>
 *              <h2> I'm h2 Tag</h2>
 *          </div>
 *          
 *          <div id="child 2 ">
 *              <h1> I'm h1 Tag</h1>
 *              <h2> I'm h2 Tag</h2>
 *          </div>
 * 
 *      </div>
 * 
 */

    const parent = React.createElement(
        "div",
        {id : "parent"},[
            React.createElement(
                "div",
                {id:"child 1"},[
                React.createElement("h1",{},"I'm the HTML tag hehhe") , 
                React.createElement("h2",{},"I'm h2 tag bruhh...:)")
            ]),
            React.createElement(
                "div",
                {id:"child 2"},[
                React.createElement("h1",{},"I'm the HTML tag hehhe") , 
                React.createElement("h2",{},"I'm h2 tag bruhh...:)")
            ])
        ]
    );

    // something like JSX exists HAHAHA

    console.log(parent);
    
    const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(parent);


/**  Part 1
// {} => gives attributes to the class 
// React.createElement is just a object, it is not h1 tag. It will return a object
        const heading = React.createElement(
            "h1",
            // This is the attribute
            {id: "heading", xyz:"abc"},
            // This is the children
            "Hello World By React"
        );

        // This is React element
        console.log(heading);

        //Everything will render inside this root
        const root = ReactDOM.createRoot(document.getElementById("root"));


        // we are passing react object to render. 
        // Here the object gets converted to HTML and is put into the DOM
        root.render(heading);

*/