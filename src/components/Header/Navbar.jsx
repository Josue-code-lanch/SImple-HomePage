import Logo from "../Icons/Logo";
import Switch from "./Switch";

export default function Navbar() {
  return (
    <header className="w-full">
      <nav className="navbar navbar-expand-lg navbar-light bg-light flex justify-between items-center w-full">
        <Logo />
        <div>
          <ul>
            <li className="nav-item">
              <a href="#">About us</a>
            </li>
            <li className="nav-item">
              <a href="#">Product</a>
            </li>
            <li className="nav-item">
              <a href="#">Resource</a>
            </li>
            <li className="nav-item">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <Switch />
      </nav>
    </header>
  );
}
