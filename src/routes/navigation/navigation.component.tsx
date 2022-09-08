import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import DropDownButton from "../../components/drop-down/drop-down.component";
import Tailwind from "../tailwind/tailwind.component";
import "./navigation.styles.css";

const Navigation = () => {
  return (
    <Fragment>
      <nav className="nav-container flex bg-purple-400 ">
        <Link
          className="nav-link henchman font-medium text-4xl px-3 py-1 m-2 rounded-sm text-white hover:text-black"
          to="/"
        >
          Henchman.
        </Link>
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
/*
<Link
          className="nav-link bg-white px-3 py-2 m-2 rounded-sm hover:bg-slate-600"
          to="/tailwind"
        >
          Tailwind
        </Link>
*/
