import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="text-3xl w-full bg-amber-200 p-4 border-b shadow-md fixed">
      <ul className="flex justify-end items-end gap-4">
        <li>
          <NavLink to="/" end>
            {" "}
            Home{" "}
          </NavLink>
        </li>
        <li>
          <NavLink to="/owner" end>
            {" "}
            owner{" "}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
