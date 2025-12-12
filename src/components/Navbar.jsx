import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="text-3xl w-full bg-sky-300 py-4 px-16 border-b shadow-md fixed">
            <ul className="flex justify-end items-end gap-4 font-bold">
                <li><NavLink to="/" end> Home </NavLink></li>
                <li><NavLink to="/owner" end> Owner </NavLink></li>
            </ul>
        </nav>
    )   
}