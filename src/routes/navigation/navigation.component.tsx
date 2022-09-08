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
          className="nav-link bg-white px-3 py-2 m-2 rounded-sm hover:bg-slate-600 "
          to="/"
        >
          Home
        </Link>
        <Link
          className="nav-link bg-white px-3 py-2 m-2 rounded-sm hover:bg-slate-600"
          to="/tailwind"
        >
          Tailwind
        </Link>
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
