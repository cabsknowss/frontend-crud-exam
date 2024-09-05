import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Group,
  Highlight,
  Sell,
  NotInterested,
  Settings,
  Menu,
  Close,
} from "@mui/icons-material";

function PageNav() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const muiNavStyle = {
    width: "30px",
    Height: "30px",
  };

  const navList = [
    { text: "Users", icon: <Group style={muiNavStyle} />, link: "/users" },
    {
      text: "Feature",
      icon: <Highlight style={muiNavStyle} />,
      link: "/features",
    },
    { text: "Pricing", icon: <Sell style={muiNavStyle} />, link: "/pricing" },
    {
      text: "Disabled",
      icon: <NotInterested style={muiNavStyle} />,
      link: "/disabled",
    },
    { text: "Option", icon: <Settings style={muiNavStyle} />, link: "/option" },
  ];

  return (
    <div className="page-nav">
      <div className="page-nav__nameplate">
        <Link to="/frontend-crud-exam" style={{textDecoration: "none"}}>
          <h2
            className={` page-nav__title ${
              location.pathname === "/" && "active nohover"
            }`}
            onClick={() => setMenuOpen(false)}
            
          >
            ADMIN
          </h2>
        </Link>
        <div onClick={() => setMenuOpen(true)} className="page-nav__menu-open">
          <Menu />
        </div>
      </div>

      <ul className={`page-nav__ul ${menuOpen && "page-nav__open"}`}>
        <div className="page-nav__menu-close-cont">
          <div
            className="page-nav__menu-close"
            onClick={() => setMenuOpen(false)}
          >
            <Close />
          </div>
        </div>
        {navList.map((nav, index) => (
            <li key={index}>
              <Link to={nav.link} style={{textDecoration: "none"}}>
                <div
                  onClick={() => setMenuOpen(false)}
                  className={`page-nav__list ${
                    location.pathname === nav.link && "active nohover"
                  }`}
                >
                  <div>{nav.icon}</div>
                  <p className="page-nav__list-text">{nav.text}</p>
                </div>
                </Link>
            </li>
        ))}
      </ul>
    </div>
  );
}

export default PageNav;
