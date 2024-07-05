import { NavLink } from "react-router-dom"

const Rooms = () => {
    return (
        <div>
            Rooms: Display All Available Rooms And They can go Details Page.
            Shorting For price Range. Also Show All Comments and Can post new Comments.

            {/* Click For Review Section */}
    <div className="flex justify-center m-10">
      <NavLink to="/Review">
      <button className="btn btn-wide btn-accent text-white font-bold ">Click For View Reviews</button>
      </NavLink>
      
    </div>
        </div>
    );
};

export default Rooms;