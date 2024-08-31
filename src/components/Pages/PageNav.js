import React from "react";
import { NavLink as Link } from "react-router-dom";
import { NavLink, NavItem } from "reactstrap";
import {
  Group,
  Highlight,
  Sell,
  NotInterested,
  List,
} from "@mui/icons-material";

function PageNav() {
  const navList = [
    { text: "Users", icon: <Group />, link: "/users" },
    { text: "Feature", icon: <Highlight />, link: "/features" },
    { text: "Pricing", icon: <Sell />, link: "/pricing" },
    { text: "Disabled", icon: <NotInterested />, link: "/disabled" },
  ];

  return (
    <div>
      <div>
        <NavLink tag={Link} to="/">
          <h2>Admin</h2>
        </NavLink>
      </div>
      <div>
        <ul>
          {navList.map((nav, index) => (
            <li key={index}>
              <NavItem>
                <NavLink tag={Link} to={nav.link}>
                  <div>{nav.icon}</div>
                  <p>{nav.text}</p>
                </NavLink>
              </NavItem>
            </li>
          ))}
          <li>
            <div>
              <List />
            </div>
            <div>Options</div>
            <div>
              <p>Option 1</p>
              <p>Option 2</p>
              <p>Reset</p>
            </div>
          </li>
          <li>Simple Text</li>
        </ul>
      </div>
    </div>
  );
}

export default PageNav;
