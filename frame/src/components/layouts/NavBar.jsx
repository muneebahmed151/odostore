import { NavLink, useLocation, useNavigate } from "react-router-dom";
import React from "react";
import { auth } from "../config/firebase.jsx";
import { signOut } from "firebase/auth";

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = auth.currentUser;

  // Hide Navbar on Signup or Signin page
  if (location.pathname === "/signup" || location.pathname === "/signin") {
    return null;
  }

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/signin");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <nav className="bg-blue-200 text-blue-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-3xl font-extrabold tracking-wide text-blue-900">
              ODO
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {[
                { path: "/", label: "Home" },
                { path: "/my-list", label: "My List" },
                { path: "/deal", label: "Deals" },
                { path: "/categories", label: "Categories" },
                { path: "/about", label: "About" },
                { path: "/contact", label: "Contact" },
                // Only show these if user is not logged in
                ...(!user ? [
                  { path: "/signup", label: "Sign Up" },
                  { path: "/signin", label: "Sign In" },
                ] : []),
                // Show Listing page only if user is logged in
                ...(user ? [
                  { path: "/listing", label: "My Listings" },
                ] : []),
              ].map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-semibold transition-colors duration-300 ${
                      isActive
                        ? "bg-blue-600 text-gray-50 shadow-md"
                        : "text-blue-700 hover:bg-blue-100 hover:text-blue-900"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}

              {/* Show user profile/signout if logged in */}
              {user && (
                <div className="flex items-center space-x-4">
                  <span className="text-blue-700 text-sm font-medium">
                    Hi, {user.email?.split('@')[0]}
                  </span>
                  <button
                    onClick={handleSignOut}
                    className="px-3 py-2 rounded-md text-sm font-semibold text-blue-700 hover:bg-blue-100 hover:text-blue-900"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button (optional) */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              aria-controls="mobile-menu"
              aria-expanded="false"
              className="inline-flex items-center justify-center p-2 rounded-md text-blue-700 hover:text-blue-900 hover:bg-blue-200 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {/* icon here if needed */}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;