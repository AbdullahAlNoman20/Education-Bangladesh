import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import SpotCard from "./SpotCard";

const About = () => {
  

  // Review : Which user Created

  const loadedSpots = useLoaderData();

  const [spots, setSpots] = useState(loadedSpots);

  return (
    <div className="p-8 bg-yellow-800 text-white">
      <Helmet>
        <title>City-In | Review </title>
      </Helmet>

      <h1 className="text-3xl text-center">
        Reviews
      </h1>

      {/* Reviews: Which User Post */}
     
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 m-5 lg:m-10">
        {spots.map((spot) => (
          <SpotCard
            key={spot._id}
            spot={spot}
            spots={spots}
            setSpots={setSpots}
          ></SpotCard>
        ))}
      </div>

    </div>
  );
};

export default About;
