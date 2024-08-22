import { Outlet } from "react-router-dom";
import Navigation from "./AppParts/Navigation/Navigation";
import "./Main.scss";

export default function Root() {

    return (
        <div className="mainLayout">
            <div id="sidebar" className="sidebar">
                <Navigation />
            </div>
            <div id="detail" className="content">

                <Outlet />
            </div>
        </div>
    )
}