import React from "react"; 
import Nav from "./Components/Nav";
import Bio from "./Components/Bio"; 
import Foot from "./Components/Foot"; 

export default function App() {
    return (
        <div className="backImg">
            <div className="grey">
                <div className="contentContainer">
                    <div className="content">
                        {/* <Nav /> */}
                        <Bio />
                        {/* <Foot /> */}
                    </div>
                    
                </div>
            </div>
        </div>
    )
}