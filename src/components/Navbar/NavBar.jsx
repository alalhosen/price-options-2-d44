import { useState } from "react";
import Link from "../Link/Link";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "/profile", name: "Profile" },
  ];

  return (
    <nav className="text-black bg-yellow-200 p-6">
      <div className="md:hidden" onClick={() => setOpen(!open)}>
        {open === true ? (
          <IoMdClose></IoMdClose>
        ) : (
          <IoMenu className="text-2xl"></IoMenu>
        )}
      </div>

      <ul
        className={`md:flex duration-2000 absolute 
        ${open ? 'top-12' : '-top-60'}
        bg-yellow-500 px-6 shadow-lg`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
