import React from "react";
import "./Navbar.css";
import { useLocation, Link } from "react-router-dom";

const Navbar = () => {
  let currentPath = useLocation().pathname;
  const navbar = [
    {
      h4: "Calender",
      path: "/",
    },
    {
      h4: "Avatar",
      path: "/avatar",
    },
    {
      h4: "Flag",
      path: "/flag",
    },
    {
      h4: "Navigation",
      path: "/navigation",
    },
    {
      h4: "GranttChart",
      path: "/grantt-chart",
    },
    {
      h4: "Video",
      path: "/video",
    },
    {
      h4: "Carousel",
      path: "/carousel",
    },
    {
      h4: "Animation",
      path: "/animation",
    },
    {
      h4: "Loading",
      path: "/loading-animation",
    },
  ];
  return (
    <div className="navbar">
      <div className="navbar__container">
        {navbar.map((item, index) => (
          <div
            key={index}
            className={`navbar-link ${
              item.path === currentPath ? "active" : ""
            }`}
          >
            <Link to={`${item.path}`}>
              <h4>{item.h4}</h4>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
