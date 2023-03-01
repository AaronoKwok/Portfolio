import React from "react";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import { useWidth } from "../utils/hooks"

export default function Nav() {

    const layout = (useWidth() <= 850) ? <MobileNav /> : <DesktopNav />

    return (
        <div>
            <p className="name">AARON KWOK</p>
            {layout}
        </div>
    )
}    