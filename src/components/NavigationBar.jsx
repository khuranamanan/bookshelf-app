import { NavLink } from "react-router-dom";
import { HomeIcon, SearchIcon } from "../assets/icons";

function NavigationBar() {
  function handleClassNames({ isActive }) {
    return `flex gap-2 justify-center rounded-lg hover:bg-blue-400 px-3 py-2 ${
      isActive ? "font-bold" : ""
    }`;
  }

  return (
    <div className="flex gap-10 justify-center shadow-md bg-blue-500 text-white p-4">
      <NavLink to="/" className={handleClassNames}>
        <HomeIcon />
        Home
      </NavLink>
      <NavLink to="/search" className={handleClassNames}>
        <SearchIcon />
        Search
      </NavLink>
    </div>
  );
}

export default NavigationBar;
