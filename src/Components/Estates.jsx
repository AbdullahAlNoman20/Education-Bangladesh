import "animate.css";

import Service from "./Service";
// import UserReview from "../Components11/UserReview";

import Map from "../Components11/Map";
import Tutors from "../Components12/Tutors";

const Estates = () => {
  return (
    <div className=" lg:p-5 pb-5">
      <div className="flex justify-center items-center flex-col p-14">
        <h1 className="font-bold text-4xl animate__animated animate__bounce mb-5">
          | Explore Our Courses |
        </h1>
        <p className="font-bold">Study Session for 2024.</p>
        <p className="text-justify">
          Dive into our diverse range of courses designed to cater to every
          learner's needs. From foundational subjects to advanced
          specializations, our expert-led curriculum ensures you gain the
          knowledge and skills necessary for success. Start your learning
          journey with EduBD and achieve your educational goals.
        </p>
      </div>
      <div className="">
        <Service></Service>
      </div>

      {/* Extra Section 1 */}
      <div className="mt-5">
        <div
          className="p-6 py-12 bg-yellow-700 dark:text-gray-50 rounded-xl"
          data-aos-duration="2000"
          data-aos="fade-left"
        >
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <h2 className="text-center text-6xl tracking-tighter font-bold">
                Up to
                <br className="sm:hidden" /> 30% Off.
              </h2>
              <div className="space-x-2 text-center py-2 lg:py-0">
                <span>
                  Register Now for 1 Course Get 1 Course Free! Use code:
                </span>
                <span className="font-bold text-lg">edu-bd-24</span>
              </div>
              <a
                href="#"
                rel="noreferrer noopener"
                className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block dark:bg-gray-900 dark:text-gray-50 dark:border-gray-600"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>

{/* Tutors */}
      <section>
          <Tutors></Tutors>
      </section>

      {/* Countries Section */}
      {/* <Countries></Countries> */}

      {/* Extra Section 2 */}
      <div className="mt-10 grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800">
        <div className="flex flex-col justify-between">
          <div
            className="space-y-2"
            data-aos-duration="1000"
            data-aos="fade-right"
          >
            <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
              Get in Touch with EduBD
            </h2>
            <div className="dark:text-gray-600 text-justify">
              We'd love to hear from you! Whether you have questions, feedback,
              or need assistance, our team is here to help. Reach out to us
              through our contact form, email, or phone, and we’ll get back to
              you as soon as possible. Let's connect and make your educational
              experience even better with EduBD.
            </div>
          </div>
          <img
            src="https://i.ibb.co/9257p0q/2b-P4p-Jr4w-Vimq-CWj-Yim-XJe2cn-Cgn9-TYj-DCy-K2-UBWPEN.png"
            alt=""
            className="p-6 h-52 md:h-64"
            data-aos-duration="2000"
            data-aos="fade-right"
          />
        </div>
        <form noValidate="" className="space-y-6">
          <div data-aos-duration="1000" data-aos="fade-left">
            <label htmlFor="name" className="text-sm">
              Full name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Abdullah Al Noman"
              className="border w-full p-3 rounded dark:bg-gray-100"
            />
          </div>
          <div data-aos-duration="2000" data-aos="fade-left">
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="xyz@gmail.com"
              className="border w-full p-3 rounded dark:bg-gray-100"
            />
          </div>
          <div data-aos-duration="2500" data-aos="fade-left">
            <label htmlFor="message" className="text-sm">
              Message
            </label>
            <textarea
              id="message"
              rows="3"
              placeholder="Say Something"
              className="border w-full p-3 rounded dark:bg-gray-100"
            ></textarea>
          </div>
          <button
            data-aos-duration="2000"
            data-aos="fade-left"
            type="submit"
            className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-yellow-800 dark:text-gray-50"
          >
            Send Message
          </button>
        </form>
      </div>
      <div className="my-10">
        {/* Click For Review Section */}
        {/* <div className="flex justify-center">
          <NavLink to="/Review">
            <button className="btn btn-wide btn-accent text-white font-bold ">
              Click For View Reviews
            </button>
          </NavLink>
        </div> */}


<div className="">
  <Map></Map>
</div>



      </div>
    </div>
  );
};

export default Estates;
