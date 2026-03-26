import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo.gif";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = ({ name, about }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/", icon: <HomeIcon fontSize="small" /> },
    { label: "About", path: "/about" },
    { label: "Department", path: "/department" },
    { label: "Placement", path: "/placement" },
    { label: "Resources", path: "/resources" },
    { label: "Activities", path: "/activities" },
  ];

  return (
    <div className="w-full">
      {/* Top Navbar */}
      <div className="flex justify-between items-center px-4 md:px-7 h-20 md:h-24">

        {/* Logo */}
        <div className="h-14 w-14 md:h-20 md:w-20">
          <img src={logo} alt="Logo" className="w-full h-full object-contain" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex flex-1 justify-center items-center">
          <div className="bg-gradient-to-r from-purple-800 via-purple-600 to-purple-800 px-10 py-2 rounded-full">
            <ul className="flex gap-6 xl:gap-10 items-center">
              {navItems.map((item) => (
                <li
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className={`flex items-center gap-1 text-sm xl:text-lg px-3 py-1 rounded-lg cursor-pointer transition duration-300
                  ${
                    location.pathname === item.path
                      ? "bg-white text-purple-700"
                      : "text-white hover:bg-white hover:text-purple-500"
                  }`}
                >
                  {item.icon}
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Buttons (Desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <button className="text-purple-700 bg-white/90 px-3 py-1 border border-purple-700 rounded-lg text-sm">
            Admission 2026
          </button>
          <button className="text-purple-700 bg-white/90 px-3 py-1 border border-purple-700 rounded-lg text-sm">
            Fee Structure
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-md px-6 py-4 space-y-4">
          {navItems.map((item) => (
            <div
              key={item.path}
              onClick={() => {
                navigate(item.path);
                setMenuOpen(false);
              }}
              className={`cursor-pointer px-3 py-2 rounded-md transition
              ${
                location.pathname === item.path
                  ? "bg-purple-700 text-white"
                  : "text-gray-700 hover:bg-purple-100"
              }`}
            >
              {item.label}
            </div>
          ))}

          {/* Mobile Buttons */}
          <div className="flex flex-col gap-2 pt-3">
            <button className="text-purple-700 border border-purple-700 py-2 rounded-lg">
              Admission 2026
            </button>
            <button className="text-purple-700 border border-purple-700 py-2 rounded-lg">
              Fee Structure
            </button>
          </div>
        </div>
      )}

      {/* Heading */}
      <div className="px-4">
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-serif text-center text-purple-800 tracking-tight">
          {name}
        </h1>
        <p className="text-sm sm:text-base text-center py-2 text-gray-700">
          {about}
        </p>
      </div>
    </div>
  );
};

export default Navbar;