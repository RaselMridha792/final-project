import { FaBook, FaHome, FaShoppingCart, FaUsers } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { PiForkKnifeThin } from "react-icons/pi";
import { TiThMenu } from "react-icons/ti";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <section className="flex">
        {/* sidebar  */}
        <div className="min-h-screen bg-yellow-500 w-64 p-5">
          <h1 className="text-3xl font-Cinzel font-bold pb-5 text-center">
            Bistro Boss Resturant
          </h1>
          <hr />
          <nav className="pt-5">
            <ul className="flex flex-col gap-4 font-Cinzel font-bold">
              <li>
                <NavLink
                  to="cart"
                  className="flex  items-center gap-2 text-xl"
                >
                  <FaHome />
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="cart"
                  className="flex  items-center gap-2 text-xl"
                >
                  <PiForkKnifeThin />
                  Add Items
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="cart"
                  className="flex  items-center gap-2 text-xl"
                >
                  <TiThMenu />
                  Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="cart"
                  className="flex  items-center gap-2 text-xl"
                >
                  <FaBook />
                  Manage Booking
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="cart"
                  className="flex  items-center gap-2 text-xl"
                >
                  <FaUsers />
                  All Users
                </NavLink>
              </li>
            </ul>
            <hr className="my-5" />
            <ul className="flex flex-col gap-4 font-Cinzel font-bold">
              <li>
                <NavLink
                  to="cart"
                  className="flex  items-center gap-2 text-xl"
                >
                  <FaHome />
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="cart"
                  className="flex  items-center gap-2 text-xl"
                >
                  <TiThMenu />
                  Menu
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="cart"
                  className="flex  items-center gap-2 text-xl"
                >
                  <FaShoppingCart />
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="cart"
                  className="flex  items-center gap-2 text-xl"
                >
                  <MdEmail />
                  Manage Booking
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
