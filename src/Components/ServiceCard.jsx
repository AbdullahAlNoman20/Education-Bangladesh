import "animate.css";
import { NavLink } from "react-router-dom";

const ServiceCard = ({ serviceCard }) => {
  const { id, countryName, spotName, img, description, cost, time } = serviceCard;

  return (
    <div>
      
        <div
          className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900 lg:h-auto"
          data-aos-duration="2000"
          data-aos="zoom-in"
        >
          <h2 className="font-bold text-xl mb-2">{countryName}</h2>
          <img
            src={img}
            alt=""
            className="object-cover object-center w-full rounded-md h-72 dark:bg-white"
          />
          <div className="mt-6 mb-2">
            <h2 className="text-xl font-semibold tracking-wide">{spotName}</h2>
          </div>
          <p className="dark:text-gray-800">{description}</p>
          <div className="flex flex-col justify-center mt-3">
            <p>Duration: {time}</p>
            <p>Cost: {cost}</p>
            <NavLink to={`/spotDetails/${id}`}>
            <button className="btn btn-outline btn-warning border-0 border-b-4 rounded-2xl font-bold p-5">Read More</button>
            </NavLink>
            
          </div>
          
        </div>
    </div>
  );
};

export default ServiceCard;
