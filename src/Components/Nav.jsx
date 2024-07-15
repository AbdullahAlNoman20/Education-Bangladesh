import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "./Providers/AuthProviders";
import ImageHoverPopup from "./ImageHoverPopup";
import { Typewriter } from "react-simple-typewriter";

// for Writing Style

const Nav = () => {


  const { user } = useContext(AuthContext);
  // console.log(user);



  return (
    <div className="lg:p-5 bg-yellow-50 ">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              className="text-white menu menu-sm dropdown-content mt-3 z-[10] p-2 rounded-box w-52"
            >
              <NavLink to="/">
              <li>
                <a>
                <i className="fa-solid fa-house"></i>Home
                </a>
              </li>
            </NavLink>
            <NavLink to="/About">
              <li>
                <a>
                <i className="fa-solid fa-address-card"></i>About
                </a>
              </li>
            </NavLink>
            <NavLink to="/Contact">
              <li>
                <a>
                <i className="fa-solid fa-phone-volume"></i>Contact 
                </a>
              </li>
            </NavLink>
            <NavLink to="/s_dashboard">
              <li>
                <a>
                Dashboard 
                </a>
              </li>
            </NavLink>
            
            </ul>
          </div>
          <a className="text-xl font-bold lg:text-2xl lg:font-bold">
            Edu<span className="text-red-700 mr-2">BD</span>
          </a>

          <span className="hidden lg:block" style={{ color: "black", fontWeight: "bold" }}>
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={["Education", "Knowledge", "Cost Free", "Study"]}
              loop={""}
              cursor
              cursorStyle="🔍"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul
            className="menu menu-horizontal px-1"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            
            <NavLink to="/">
              <li>
                <a>
                <i className="fa-solid fa-house"></i>Home
                </a>
              </li>
            </NavLink>
            <NavLink to="/AboutUs">
              <li>
                <a>
                <i className="fa-solid fa-address-card"></i>About
                </a>
              </li>
            </NavLink>
            <NavLink to="/Contact">
              <li>
                <a>
                <i className="fa-solid fa-phone-volume"></i>Contact 
                </a>
              </li>
            </NavLink>
            <NavLink to="/s_dashboard">
              <li>
                <a>
                A Dashboard 
                </a>
              </li>
            </NavLink>
            <NavLink to="/t_dashboard">
              <li>
                <a>
                T Dashboard 
                </a>
              </li>
            </NavLink>
            <NavLink to="/a_dashboard">
              <li>
                <a>
                S Dashboard 
                </a>
              </li>
            </NavLink>

          </ul>
        </div>

        <div className="navbar-end ">
          <div className=" ">
            {user?.email ? (
              <div className="relative flex-shrink-0 mr-5">
                <ImageHoverPopup></ImageHoverPopup>
                <span className="absolute bottom-0 right-0 w-4 h-4 dark:bg-green-400 border rounded-full dark:text-gray-800 dark:border-gray-50"></span>
                <title>Name</title>
              </div>
            ) : (
              <div className=""></div>
            )}
          </div>
          {user ? (
            <div className=""></div>
          ) : (
            <div className=" flex gap-5 ">
              <NavLink to="/login">
                <button className="btn btn-outline btn-warning hidden lg:block">
                  <i className="fa-solid fa-right-to-bracket"></i> Login
                </button>
              </NavLink>
              <NavLink to="/register">
                <button className="btn btn-outline btn-success ">
                  <i className="fa-solid fa-right-to-bracket"></i> Register
                </button>
              </NavLink>
            </div>
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Nav;
