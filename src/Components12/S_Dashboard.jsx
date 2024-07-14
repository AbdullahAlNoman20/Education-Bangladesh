import { Helmet } from "react-helmet-async";
import { NavLink, Outlet } from "react-router-dom";

const S_Dashboard = () => {
  return (
    <div>
      <Helmet>
        <title>Education Bangladesh | Admin Dashboard </title>
      </Helmet>

      <div className="flex flex-col lg:flex-row">
        {/* SideBar */}
        <div className="w-1/3 flex flex-col gap-3 p-5 border-r-2 border-yellow-200">
          <NavLink to="/s_dashboard">
            <button className="btn w-full">View All Users</button>
          </NavLink>
          <NavLink to="courses">
            <button className="btn w-full">View all study session</button>
          </NavLink>
          <NavLink to="materials">
            <button className="btn w-full">View all materials</button>
          </NavLink>
        </div>

        {/* outlet For Dynamic Content */}
        <div className="p-5">
          <h1 className="font-extrabold text-2xl mb-5">Admin Dashboard</h1>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default S_Dashboard;
