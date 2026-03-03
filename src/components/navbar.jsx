const navbar = () => {
  return (
    <div>
      <section
        id="navbar-section"
        className="fixed top-0 left-0 z-50 w-full shadow-md bg-base-100"
      >
        <div className="px-4 navbar md:px-10 lg:px-20">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex="0"
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex="0"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow-2xl border border-green-700 "
              >
                <li>
                  <a className="active:bg-green-500 hover:text-black">Home</a>
                </li>
                <li>
                  <a className="active:bg-green-500 hover:text-black">FAQ</a>
                </li>
                <li>
                  <a className="active:bg-green-500 hover:text-black">
                    Changelog
                  </a>
                </li>
                <li>
                  <a className="active:bg-green-500 hover:text-black">Blog</a>
                </li>
                <li>
                  <a className="active:bg-green-500 hover:text-black">
                    Download
                  </a>
                </li>
                <li>
                  <a className="active:bg-green-500 hover:text-black">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <a className="text-xl font-extrabold text-black pl-5 cursor-pointer md:text-3xl">
              CS-Ticket System
            </a>
          </div>

          {/* Navbar Center - Desktop Menu */}
          <div className="hidden navbar-center lg:flex pl-36">
            <ul className="gap-2 px-1 text-[16px] font-semibold menu menu-horizontal">
              <li>
                <a className="transition-all duration-300 rounded-lg hover:bg-green-500 hover:text-white active:scale-95">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="products.html"
                  className="transition-all duration-300 rounded-lg hover:bg-green-500 hover:text-white active:scale-95"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="aboutUs.html"
                  className="transition-all duration-300 rounded-lg hover:bg-green-500 hover:text-white active:scale-95"
                >
                  Changelog
                </a>
              </li>
              <li>
                <a
                  href="contact.html"
                  className="transition-all duration-300 rounded-lg hover:bg-green-500 hover:text-white active:scale-95"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="contact.html"
                  className="transition-all duration-300 rounded-lg hover:bg-green-500 hover:text-white active:scale-95"
                >
                  Download
                </a>
              </li>
              <li>
                <a
                  href="contact.html"
                  className="transition-all duration-300 rounded-lg hover:bg-green-500 hover:text-white active:scale-95"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Navbar End - Action Button */}
          <div className="navbar-end">
            <button className="px-6 text-white border-none btn bg-purple-600 hover:bg-purple-700 active:scale-95 shadow-lg">
              New Ticket
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default navbar;
