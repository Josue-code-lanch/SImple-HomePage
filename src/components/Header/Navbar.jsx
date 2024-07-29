import Dropdown from "../Icons/Dropdown";
import Logo from "../Icons/Logo";
import Switch from "./Switch";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  return (
    <header className="w-full">
      <nav className="navbar navbar-expand-lg navbar-light bg-light flex justify-between items-center w-full">
        <Logo />
        <div>
          <ul
            className={`w-full flex justify-between items-center gap-10 font-semibold ${
              isOpen
                ? "flex flex-col justify-center items-center"
                : "hidden md:flex justify-between items-center"
            }`}
          >
            <li className="nav-item text-[#223344]">
              <a href="#" className="dark:text-white">
                About us
              </a>
            </li>
            <li className="text-[#909193]">
              <a href="#">Product</a>
            </li>
            <li className="text-[#909193]">
              <a href="#">Resource</a>
            </li>
            <li className="text-[#909193]">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <Switch />
        <Dropdown handleClick={toggleDropdown} />
      </nav>
    </header>
  );
}
