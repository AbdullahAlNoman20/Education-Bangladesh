import { NavLink } from "react-router-dom";


const Error = () => {
    return (
        <div className="bg-black text-white">
            <section className="flex items-center h-full sm:p-16 ">
	<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
		
    <img className="border-2 rounded-badge max-w-screen-sm " src="https://i.ibb.co/MPzbN16/error.gif" alt="" />

		<p className="text-3xl font-bold ">Opps! Page Not Found</p>
		<NavLink to="/">
              <a
                rel="noopener noreferrer"
                href="#"
                className="btn px-8 py-3 font-semibold rounded dark:bg-gray-900 dark:text-gray-50"
              >
                Back to Home Page
              </a>
            </NavLink>
	</div>
</section>
        </div>
    );
};

export default Error;