import React from "react"; 
import Nav from "./Components/Nav";
import Bio from "./Components/Bio"; 
//import Foot from "./Components/Foot"; 

export default function App() {
    return (
        <div className="background-image">
            <div className="grey">
                <div className="cyan-filter">
                    <div className="content">
                        <p className="name">AARON KWOK</p>
                        <hr />
                        <Nav />
                        <Bio />
                        
                    </div>
                </div> 
            </div>
        </div>
    )
}