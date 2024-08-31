import React from "react";
import { NavLink as Link, useLocation } from "react-router-dom";
import { NavLink, NavItem } from "reactstrap";
import {
  Group,
  Highlight,
  Sell,
  NotInterested,
  List,
  Settings,
} from "@mui/icons-material";

function PageNav() {
  const location = useLocation();

  const navList = [
    { text: "Users", icon: <Group />, link: "/users" },
    { text: "Feature", icon: <Highlight />, link: "/features" },
    { text: "Pricing", icon: <Sell />, link: "/pricing" },
    { text: "Disabled", icon: <NotInterested />, link: "/disabled" },
    { text: "Option", icon: <Settings />, link: "/option" },
  ];

  return (
    <div className="page-nav">
      <div className="align-self-center">
        <NavLink tag={Link} to="/">
          <h2 className="ff-mono fw-bold fs-secondary-heading text-neutral-200">
            ADMIN
          </h2>
        </NavLink>
      </div>
      <div>
        <ul className="page-nav__ul">
          {navList.map((nav, index) => (
            <li key={index}>
              <NavItem>
                <NavLink tag={Link} to={nav.link}>
                  <div
                    className={`page-nav__list ${
                      location.pathname.includes(nav.link) && "active nohover"
                    }`}
                  >
                    <div>{nav.icon}</div>
                    <p>{nav.text}</p>
                  </div>
                </NavLink>
              </NavItem>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PageNav;
