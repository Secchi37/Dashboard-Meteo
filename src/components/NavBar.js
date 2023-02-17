import React from "react";

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
        return <th key={link.id}><ul>{link.text}</ul></th>;
      })}
    </div>
  );
}
