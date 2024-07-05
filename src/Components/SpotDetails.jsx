import { Helmet } from "react-helmet-async";
import { NavLink, useLoaderData, useParams } from "react-router-dom";

const SpotDetails = () => {

    const infos = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id)
  const info = infos.find((info) => info.id === idInt);
  console.log(info);




    return (
        <div>
      <Helmet>
        <title>Education Bangladesh | Course Details Page</title>
      </Helmet>
      <section>
        <div className=" text-black">
          <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 ">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl ">
              {info.countryName}
            </h1>
            <h1 className="text-2xl font-bold leading-none sm:text-3xl xl:max-w-3xl ">
              {info.spotName}
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl ">
              {info.description}
            </p>
            <div className="flex flex-wrap justify-center">
              <button
                type="button"
                className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-yellow-600 dark:text-white"
              >
                Start Now 
              </button>
              <NavLink to="/">
                <button
                  type="button"
                  className="px-8 py-3 m-2 text-lg border rounded dark:border-yellow-600 dark:text-black"
                >
                  Back To Home
                </button>
              </NavLink>
            </div>
          </div>
        </div>
        <img
          src={info.img}
          alt=""
          className="w-5/6 mx-auto mb-12 -mt-20 dark:bg-white rounded-lg shadow-md lg:-mt-40"
        />
      </section>
    </div>
    );
};

export default SpotDetails;