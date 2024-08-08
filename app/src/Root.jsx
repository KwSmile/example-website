import { Outlet } from "react-router-dom";
import Navigation from "./AppParts/Navigation/Navigation";

export default function Root() {

    return (
        <div>
            <div id="sidebar">
                <Navigation />
            </div>
            <div id="detail">

                <Outlet />
            </div>
        </div>
    )
}