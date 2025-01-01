import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navlinks = (
    <>
      <div className="gap-5 flex text-lg flex-col lg:flex-row text-black lg:text-white">
        <NavLink to="/">home</NavLink>
        <NavLink to="/menu">Menu</NavLink>
        <NavLink to="/our-shop">Our Shop</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/sign-up">Sign Up</NavLink>
        <NavLink to="/contact-us">Contact Us</NavLink>
      </div>
    </>
  );
  return (
    <>
      <div className="fixed z-10 w-full bg-opacity-50 bg-black text-white">
        <div className="navbar max-w-screen-2xl mx-auto font-Inter">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
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
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {navlinks}
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">BISTRO BOSS</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navlinks}</ul>
          </div>
          <div className="navbar-end">
            <a className="btn">Button</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
