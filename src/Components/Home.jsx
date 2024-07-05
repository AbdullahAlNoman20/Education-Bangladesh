import { Helmet } from "react-helmet-async";
import Estates from "./Estates";
// import Map from "../Components11/Map";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Education Bangladesh | Home </title>
      </Helmet>
      {/* Banner */}
      <div className="">
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: "url(https://i.ibb.co/9257p0q/2b-P4p-Jr4w-Vimq-CWj-Yim-XJe2cn-Cgn9-TYj-DCy-K2-UBWPEN.png)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="">
              <h1 className="mb-5 text-5xl font-bold">
                Empowering Minds, Shaping Futures
              </h1>
              <p className="mb-5">
                "Welcome to EduBD, your premier destination for quality
                education in Bangladesh. Discover a world of learning
                opportunities, resources, and expert guidance to help you excel
                in your academic journey. Join us today and unlock your
                potential!"
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>

      {/* <Map></Map> */}

      <Estates></Estates>
    </div>
  );
};

export default Home;
