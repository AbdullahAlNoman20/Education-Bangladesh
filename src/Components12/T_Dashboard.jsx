import { NavLink, Outlet } from "react-router-dom";

const T_Dashboard = () => {
    return (
        <div>

<div className="flex flex-col lg:flex-row">
{/* SideBar */}
<div className="w-1/3 flex flex-col gap-3 p-5 border-r-2 border-yellow-200">
    
    <NavLink to="/t_dashboard"><button className="btn w-full">Create Study session</button></NavLink>
    <NavLink to="courses"><button className="btn w-full">View all study session</button></NavLink>
    <NavLink to="Upload_Materials"><button className="btn w-full">Upload Materials</button></NavLink>
    <NavLink to="materials"><button className="btn w-full">View all materials</button></NavLink>
    <NavLink to="notes"><button className="btn w-full">View all Notes</button></NavLink>

</div>



{/* outlet For Dynamic Content */}
<div className="p-5">   
    <Outlet></Outlet>
</div>

</div>



        </div>
    );
};

export default T_Dashboard;