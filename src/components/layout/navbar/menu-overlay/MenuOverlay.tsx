import React from "react";
import NavLink, { INavLink } from "../nav-link/NavLink";

const MenuOverlay = ({
  links,
  setNavbarOpen,
}: {
  links: INavLink[];
  setNavbarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <ul className="flex flex-col gap-y-20 py-4 items-center h-screen animate-opacity z-50">
      {links.map((link, index) => (
        <li key={index} onClick={() => setNavbarOpen(false)}>
          <NavLink path={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
