import Logo from "../Icons/Logo";
import Switch from "./Switch";

export default function Navbar() {
  return (
    <header className="w-full">
      <nav className="navbar navbar-expand-lg navbar-light bg-light flex justify-between items-center w-full">
        <Logo />
        <div>
          <ul className="w-full flex justify-between items-center gap-10 color-[#909193] font-semibold">
            <li className="nav-item">
              <a href="#" className="">
                About us
              </a>
            </li>
            <li className="color-[#]">
              <a href="#">Product</a>
            </li>
            <li className="color-[#]">
              <a href="#">Resource</a>
            </li>
            <li className="color-[#]">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <Switch />
      </nav>
    </header>
  );
}
