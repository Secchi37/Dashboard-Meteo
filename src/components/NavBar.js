import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const links = [
    {
      id: 1,
      path: "/",
      text: "Home",
    },
    {
      id: 2,
      path: "/dashboard",
      text: "Dashboard",
    },
  ];

  return (
    <div>
      {links.map((link) => {
        return (
          <th key={link.id}>
          <NavLink to={link.path}>
          <ul>{link.text}</ul>
          </NavLink>            
          </th>
        );
      })}
    </div>
  );
}
