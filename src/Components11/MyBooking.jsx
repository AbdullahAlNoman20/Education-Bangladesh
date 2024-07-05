import { NavLink } from "react-router-dom";

const MyBooking = () => {
    return (
        <div>
            My Booking: Show All Booking Rooms, it can delete,Edit and Show a toast. Also Can Post new Comments.
        {/* Click For Review Section */}
    <div className="flex justify-center m-10">
      <NavLink to="/Review">
      <button className="btn btn-wide btn-accent text-white font-bold ">Click For View Reviews</button>
      </NavLink>
      
    </div>
        </div>
    );
};

export default MyBooking;