import React, { useState } from "react";
import logo from "../../imgs/logo.png";
import Search from "./Search";

const Banner = () => {
  const [showSearch, setShowSearch] = useState(false);

  const handleClick = () => {
    setShowSearch(true);
  };
  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span id="get-part" onClick={handleClick}>
            A place to get{" "}
          </span>
          {showSearch && <Search />}
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
