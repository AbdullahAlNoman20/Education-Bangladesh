import { Helmet } from "react-helmet-async";

const AboutUs = () => {
  return (
    <div>
      <Helmet>
        <title>Education Bangladesh | About </title>
      </Helmet>
      <section className="">
        <div className="container max-w-5xl px-4 py-12 mx-auto">
          <div className="grid gap-4 mx-4 sm:grid-cols-12">
            <div className="col-span-12 sm:col-span-3">
              <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-yellow-600">
                <h3 className="text-3xl font-semibold">Experience EduBD</h3>
                <span className="text-sm font-bold tracking-wider uppercase dark:text-gray-600">
                Empowering Education for All
                </span>
              </div>
            </div>
            <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
              <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-300">
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-yellow-600">
                  <h3 className="text-xl font-semibold tracking-wide">
                    Our Mission
                  </h3>
                  <time className="text-xs tracking-wide uppercase dark:text-gray-600">
                    Dec 2024
                  </time>
                  <p className="mt-3">
                    At EduBD, our mission is to provide accessible, high-quality
                    education to learners of all backgrounds. We strive to
                    create an inclusive learning environment that fosters
                    growth, creativity, and academic excellence, empowering
                    students to achieve their full potential.
                  </p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-yellow-600">
                  <h3 className="text-xl font-semibold tracking-wide">
                    Our Vision
                  </h3>
                  <time className="text-xs tracking-wide uppercase dark:text-gray-600">
                    Jul 2024
                  </time>
                  <p className="mt-3">
                    We envision a future where education transcends boundaries,
                    connecting students with world-class resources and expert
                    guidance. Our goal is to be the leading educational platform
                    in Bangladesh, shaping the leaders and innovators of
                    tomorrow through transformative learning experiences.
                  </p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-yellow-600">
                  <h3 className="text-xl font-semibold tracking-wide">
                    Our Values
                  </h3>
                  <time className="text-xs tracking-wide uppercase dark:text-gray-600">
                    Jan 2024
                  </time>
                  <p className="mt-3">
                    EduBD is built on a foundation of integrity, innovation, and
                    inclusivity. We are committed to upholding the highest
                    standards of education, embracing cutting-edge technology,
                    and ensuring that every learner has the opportunity to
                    succeed, regardless of their circumstances.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
