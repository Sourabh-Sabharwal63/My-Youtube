import React from "react";
import userLogo from "./user.png";
import { useDispatch } from "react-redux";
import { changeIsMenuOpen } from "./utility/Redux/appSlice";
import { Link } from "react-router-dom";
const Header = () => {
  const dispatch = useDispatch();
  const handleHamBtn = () => {
    dispatch(changeIsMenuOpen());
  };

  return (
    <div className="grid grid-flow-col shadow-md ">
      <div className="flex col-span-1 ">
        <img
          className="h-8 mt-4 mx-4"
          src="https://imgs.search.brave.com/il24SBBjSDCEoQvGuUu57AB5GPAAUIzgS4ug4Ho_wMA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9iL2IyL0hh/bWJ1cmdlcl9pY29u/LnN2Zy81MTJweC1I/YW1idXJnZXJfaWNv/bi5zdmcucG5n"
          alt="Ham_Btn"
          onClick={handleHamBtn}
        />
        
        <Link to="/">
          <img
            className="w-32 mx-4"
            src="https://imgs.search.brave.com/2p8keuXCFRbEu665h9cEXCYMFQ41b3sktQQhJvFJpIo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0Lzhn/emNyNlJwR1N0dlpG/QTJxUnQ0djYtMzIw/LTgwLmpwZw"
            alt="Youtube_Logo"
          /></Link>
        
      </div>
      <div className="mt-4 text-center col-span-10">
        <input
          className="border-2 border-blue-400 w-1/2   rounded-l-full p-3"
          type="text"
          placeholder="Search"
        />
        <button className=" border-2 rounded-r-full p-3 bg-slate-200 border-blue-400 ">
          Search
        </button>
      </div>
      <div className="mt-4 col-span-1">
        <img className="h-8" src={userLogo} alt="userLogo" />
      </div>
    </div>
  );
};

export default Header;
