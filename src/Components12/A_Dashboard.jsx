import { Helmet } from "react-helmet-async";
import { NavLink, Outlet } from "react-router-dom";

const A_Dashboard = () => {
    return (
        <div>
             <Helmet>
        <title>Education Bangladesh | Student Dashboard </title>
      </Helmet>

<div className="flex flex-col lg:flex-row">
{/* SideBar */}
<div className="w-1/3 flex flex-col gap-3 p-5 border-r-2 border-yellow-200">
    
    <NavLink to="BookedSession"><button className="btn w-full">View Booked Session</button></NavLink>
    <NavLink to="CreateNote"><button className="btn w-full">Create Note</button></NavLink>
    <NavLink to="mngNote"><button className="btn w-full">Manage Personal Note</button></NavLink>
    <NavLink to="materials"><button className="btn w-full">View all study materials</button></NavLink>

</div>



{/* outlet For Dynamic Content */}
<div className="p-5">   
<h1 className="font-extrabold text-2xl mb-5">Student Dashboard</h1> 
    <Outlet></Outlet>
</div>

</div>



        </div>
    );
};

export default A_Dashboard;