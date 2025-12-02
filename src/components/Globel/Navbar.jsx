import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if (
      (event?.key === "Enter" || event === "searchButton") &&
      searchQuery?.length > 0
    ) {
      navigate(`SearchBar/${searchQuery}`);
      setSearchQuery("");
    }
  };

  return (
    <nav className="relative bg-orange-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* mobile hamburger */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              aria-controls="mobile-menu"
              aria-expanded="false"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-orange-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500"
            >
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              {/* open icon */}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                data-slot="icon"
                aria-hidden="true"
                className="size-6"
              >
                <path
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* left side logo + links */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img src="public/logo.png" alt="Your Company" className="h-10 w-auto" />
            </div>

            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4 items-center">
                <Link
                  to="/"
                  aria-current="page"
                  className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                >
                  Home
                </Link>
                <Link
                  to="/team"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                >
                  Team
                </Link>
                <Link
                  to="/food"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                >
                  Food
                </Link>
                <Link
                  to="/contact"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                >
                  Contact
                </Link>

                {/* search */}
                <input
                  type="text"
                  placeholder="Enter your fb dish"
                  className="h-8 w-64 br-5 border-orange-700 p-2 text-yellow-900"
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyUp={searchQueryHandler}
                  value={searchQuery}
                />
                <button
                  className="px-4 py-2 border-[1px] border-gray-400 bg-gray-100 rounded-r-full"
                  onClick={() => searchQueryHandler("searchButton")}
                >
                  <CiSearch size={"16px"} />
                </button>
              </div>
            </div>
          </div>

          {/* right side bell + avatar */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Link to="/notificationBell">
              {" "}
              <button
                type="button"
                className="relative rounded-full p-1 text-gray-400 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View notifications</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  data-slot="icon"
                  aria-hidden="true"
                  className="size-6"
                >
                  <path
                    d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </Link>
            {/* avatar dropdown */}
            <div className="relative ml-3">
              <Link to="/information">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                  className="size-8 rounded-full bg-gray-800 outline -outline-offset-1 outline-white/10"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* mobile menu */}
      <div id="mobile-menu" className="block sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          <Link
            to="/"
            aria-current="page"
            className="block rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
          >
            Home
          </Link>
          <Link
            to="/team"
            className="block rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
          >
            Team
          </Link>
          <Link
            to="/food"
            className="block rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
          >
            Food
          </Link>
          <Link
            to="/contact"
            className="block rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
