import React from "react";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const currentPath = router.pathname;

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Following", path: "/following" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  return (
    <nav className="nav-bar mt-3">
      <ul className="flex">
        {navItems.map((item) => (
          <li
            key={item.path}
            className={`m-2 page-link ${
              currentPath === item.path ? "border-b-2 border-gray-500" : ""
            }`}
            onClick={() => router.push(item.path)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
