const Navbar = () => {
  return (
    <header>
      <section
        id="navbar-section"
        className="fixed top-0 left-0 z-50 w-full shadow-sm bg-base-100 border-b border-gray-100"
      >
        <div className="px-4 navbar md:px-10 lg:px-20 max-w-7xl mx-auto">
          {/* লোগো সেকশন - Left */}
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex="0"
                role="button"
                className="btn btn-ghost lg:hidden p-0 mr-3"
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
                className="menu menu-sm dropdown-content bg-base-100 rounded-2xl mt-3 w-52 p-2 shadow-2xl border border-gray-100 "
              >
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>FAQ</a>
                </li>
                <li>
                  <a>Changelog</a>
                </li>
                <li>
                  <a>Blog</a>
                </li>
                <li>
                  <a>Download</a>
                </li>
                <li>
                  <a>Contact</a>
                </li>
              </ul>
            </div>
            <a className="text-3xl font-black text-slate-800 cursor-pointer md:text-2xl tracking-tighter">
              CS<span className="text-purple-600"> Ticket System</span>
            </a>
          </div>

          {/* মেনু এবং বাটন সেকশন - Right */}
          <div className="navbar-end gap-4">
            {/* Desktop Menu */}
            <div className="hidden lg:flex">
              <ul className="flex gap-1 px-1 text-[15px] font-bold text-slate-600">
                <li>
                  <a className="px-4 py-2 transition-all rounded-xl hover:bg-slate-50 hover:text-purple-600">
                    Home
                  </a>
                </li>
                <li>
                  <a className="px-4 py-2 transition-all rounded-xl hover:bg-slate-50 hover:text-purple-600">
                    FAQ
                  </a>
                </li>
                <li>
                  <a className="px-4 py-2 transition-all rounded-xl hover:bg-slate-50 hover:text-purple-600">
                    Changelog
                  </a>
                </li>
                <li>
                  <a className="px-4 py-2 transition-all rounded-xl hover:bg-slate-50 hover:text-purple-600">
                    Blog
                  </a>
                </li>
                <li>
                  <a className="px-4 py-2 transition-all rounded-xl hover:bg-slate-50 hover:text-purple-600">
                    Download
                  </a>
                </li>
                <li>
                  <a className="px-4 py-2 transition-all rounded-xl hover:bg-slate-50 hover:text-purple-600">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Action Button */}
            <button className="btn bg-purple-600 hover:bg-purple-700 text-white border-none rounded-xl px-6 shadow-lg shadow-purple-200 capitalize active:scale-95 transition-transform">
              New Ticket
            </button>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Navbar;
