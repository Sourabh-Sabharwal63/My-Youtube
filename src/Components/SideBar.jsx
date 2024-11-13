import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const SideBar = () => {
  const Flag = useSelector((store) => store?.AppSlice?.isMenuOpen);
  if (Flag)
    return (
      <div className="col-span-1 shadow-lg px-4 py-4">
        <div className="">
          <ul className="font-semibold text-base py-2">
            <Link to="/"><li>Home</li></Link>
            
            <li>Shorts</li>
            <li>Subscriptions</li>
          </ul>
          <hr />
        </div>
        <div className="">
          <h1 className="font-semibold text-xl py-2">You</h1>
          <ul>
            <li>History</li>
            <li>Playlists</li>
            <li>Your videos</li>
            <li>Watch Later</li>
            <li>Liked videos</li>
          </ul>
          <hr />
        </div>

        <div className="">
          <h1 className="font-semibold text-xl py-2">Subscriptions</h1>
          <ul>
            <li>ScoopCast</li>
            <li>ComicVerse</li>
            <li>DesiNerd</li>
            <li>SuperSuper</li>
            <li>Movies talk</li>
            <li>YOGI BOLTA HA</li>
            <li>Marvel India</li>
            <li>Netflix India</li>
            <li>DC</li>
            <li>HBO</li>
            <li>UFC</li>
            <li>Mr Bean</li>
            <li>WB Kids</li>
            <li>SONY</li>
            <li>The Screen Patti</li>
          </ul>
          <hr />
        </div>
      </div>
    );
};

export default SideBar;
