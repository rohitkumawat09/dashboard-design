import React, { useEffect, useState } from "react";
import Logo from "./assets/logo.svg";
import { IoIosSearch } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase";

const pages = [
  { name: "Dashboard", path: "/Dashboard" },
  { name: "Contact", path: "/Dashboard/contact" },
  { name: "Assets", path: "/Dashboard/assets" },
  { name: "Resoursec", path: "/Dashboard/resoursec" },
  { name: "Setting", path: "/Dashboard/setting" },
  { name: "Support", path: "/Dashboard/support" },
  { name: "Archive", path: "/Dashboard/archive" },
  { name: "Jobcard", path: "/Dashboard/jobcard" },
  { name: "Technicians", path: "/Dashboard/Technicians" },
  { name: "ToInvoice", path: "/Dashboard/ToInvoice" },
  { name: "Clients", path: "/Dashboard/clients" },
  { name: "Users", path: "/Dashboard/users" },
  { name: "Support Ticket", path: "/Dashboard/supportTicket" },
  { name: "Google", path: "/Dashboard/Google" },
  { name: "DashboardWorking", path: "/Dashboard/DashboardWorking" },
  { name: "DashboardOpen", path: "/Dashboard/DashboardOpen" },
  { name: "DashboardOnsiteTechnincSecond", path: "/Dashboard/DashboardOnsiteTechnincSecond" },
  { name: "DashboardonsitePageFirst", path: "/Dashboard/DashboardonsitePageFirst" },
  { name: "JobCardNext", path: "/Dashboard/JobCardNext" },
  { name: "SiteOverview", path: "/Dashboard/SiteOverview" },
  { name: "StrelingInfotech", path: "/Dashboard/StrelingInfotech" },
  { name: "Clientstest", path: "/Dashboard/Clientstest" },
  { name: "JobClientAdd", path: "/Dashboard/JobClientAdd" },
  { name: "AssetDetails1", path: "/Dashboard/AssetDetails1" },
  { name: "AssetsCPUComponent", path: "/Dashboard/AssetsCPUComponent" },
  { name: "SupportTicketNext", path: "/Dashboard/SupportTicketNext" }
];

const Header = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPages, setFilteredPages] = useState([]);
  const [user, setUser] = useState(null);

  // 🔐 Get Firebase current user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
    });
    return () => unsubscribe();
  }, []);

  // 🔓 Logout function
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  // 🔍 Search filter
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value.trim() === "") {
      setFilteredPages([]);
    } else {
      const filtered = pages.filter((page) =>
        page.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredPages(filtered);
    }
  };

  // 🔁 Select from search list
  const handleSelectPage = (path) => {
    navigate(path);
    setSearchTerm("");
    setFilteredPages([]);
  };

  return (
    <div className="bg-[#272d34] text-white w-full fixed top-0 left-0 z-10 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-4">
        
        {/* Logo */}
        <div className="w-24">
          <img src={Logo} alt="Logo" className="w-full h-auto" />
        </div>

        {/* Search box (desktop) */}
        <div className="relative flex-1 max-w-md w-full hidden sm:block">
          <IoIosSearch className="text-white text-xl absolute top-2.5 left-3" />
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="bg-[#2a3f50] w-full py-2 px-10 rounded-md outline-none"
          />
          {filteredPages.length > 0 && (
            <ul className="absolute top-full left-0 w-full bg-white text-black rounded-md mt-1 max-h-60 overflow-y-auto shadow-lg z-20">
              {filteredPages.map((page) => (
                <li
                  key={page.path}
                  onClick={() => handleSelectPage(page.path)}
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                >
                  {page.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* User info + logout */}
        <div className="hidden md:flex items-center gap-4 text-sm">
          <h3>
            Welcome back, <strong  className="text-yellow-400">{user?.email || "User"}!</strong>
          </h3>
          <div
            onClick={handleLogout}
            className="flex items-center gap-1 cursor-pointer hover:text-red-400"
          >
            <span>Logout</span>
            <MdLogout className="text-xl" />
          </div>
        </div>

        {/* Mobile menu placeholder */}
        <div className="md:hidden text-black p-2 rounded-lg text-2xl bg-white">
          <button aria-label="menu">&#8801;</button>
        </div>
      </div>

      {/* Search box (mobile) */}
      <div className="sm:hidden mt-3 relative">
        <IoIosSearch className="text-white text-xl absolute top-2.5 left-3" />
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="bg-[#2a3f50] w-full py-2 px-10 rounded-md outline-none"
        />
        {filteredPages.length > 0 && (
          <ul className="absolute top-full left-0 w-full bg-white text-black rounded-md mt-1 max-h-60 overflow-y-auto shadow-lg z-20">
            {filteredPages.map((page) => (
              <li
                key={page.path}
                onClick={() => handleSelectPage(page.path)}
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
              >
                {page.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Header;
