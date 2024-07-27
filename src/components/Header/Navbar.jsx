import Logo from "../Icons/Logo";
import Switch from "./Switch";

export default function Navbar() {
  return (
    <header className="w-full">
      <nav className="navbar navbar-expand-lg navbar-light bg-light flex justify-between items-center w-full">
        <Logo />
        <div>
          <ul className="w-full flex justify-between items-center gap-10 font-semibold">
            <li className="nav-item text-[#223344]">
              <a href="#">About us</a>
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
      </nav>
    </header>
  );
}
