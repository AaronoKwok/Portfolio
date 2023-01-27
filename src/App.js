import React from "react"; 
import Nav from "./Components/Nav";
import Bio from "./Components/Bio"; 
import Projects from "./Components/Projects"

export default function App() {    

    return (
        <div className="background-image">
            <div className="grey">
                <div className="cyan-filter">
                    <div className="content">
                        <Nav />
                        <Bio />
                        <Projects />
                    </div>
                </div> 
            </div>
        </div>
    )
}