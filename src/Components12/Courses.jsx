const Courses = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-5">
     
      {/* Single Course 1 */}
      <div className="">
        <div className="max-w-md p-4 sm:flex sm:space-x-6 border-2 border-yellow-200 rounded-2xl dark:text-gray-800">
          <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
            <img
              src="https://i.ibb.co/XWZcRSC/d4.png"
              alt=""
              className="object-cover object-center w-full h-full rounded dark:bg-gray-500"
            />
          </div>
          <div className="flex flex-col space-y-4">
            <div>
              <h2 className="text-2xl font-semibold">Course Name</h2>
              <span className="text-sm dark:text-gray-600">Teacher Name</span>
            </div>
            <div className="space-y-1">
              <span className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  aria-label="Email address"
                  className="w-4 h-4"
                >
                  <path
                    fill="currentColor"
                    d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"
                  ></path>
                </svg>
                <span className="dark:text-gray-600">
                  leroy.jenkins@company.com
                </span>
              </span>
              <span className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  aria-label="Phonenumber"
                  className="w-4 h-4"
                >
                  <path
                    fill="currentColor"
                    d="M449.366,89.648l-.685-.428L362.088,46.559,268.625,171.176l43,57.337a88.529,88.529,0,0,1-83.115,83.114l-57.336-43L46.558,362.088l42.306,85.869.356.725.429.684a25.085,25.085,0,0,0,21.393,11.857h22.344A327.836,327.836,0,0,0,461.222,133.386V111.041A25.084,25.084,0,0,0,449.366,89.648Zm-20.144,43.738c0,163.125-132.712,295.837-295.836,295.837h-18.08L87,371.76l84.18-63.135,46.867,35.149h5.333a120.535,120.535,0,0,0,120.4-120.4v-5.333l-35.149-46.866L371.759,87l57.463,28.311Z"
                  ></path>
                </svg>
                <span className="dark:text-gray-600">+25 381 77 983</span>
              </span>
              <span className="flex items-center space-x-2">
                <button className="btn">Reject</button>
                {/* The button to open modal */}
                <label htmlFor="my_modal_6" className="btn">
                  Approve
                </label>

                {/* Put this part before </body> tag */}
                <input
                  type="checkbox"
                  id="my_modal_6"
                  className="modal-toggle"
                />
                <div className="modal" role="dialog">
                  <div className="modal-box">
                    <h3 className="text-lg font-bold">
                      You are giving the Clarification to launch this session.
                      Please set the session Registration Amount
                    </h3>
                    <p className="py-4">
                      The Course is free or Paid ?{" "}
                      <div className="form-control">
                        <label className="label cursor-pointer">
                          <span className="label-text">Free</span>
                          <input
                            type="radio"
                            name="radio-10"
                            className="radio checked:bg-red-500"
                            defaultChecked
                          />
                        </label>
                      </div>
                      <div className="form-control">
                        <label className="label cursor-pointer">
                          <span className="label-text">Paid</span>
                          <input
                            type="radio"
                            name="radio-10"
                            className="radio checked:bg-blue-500"
                            defaultChecked
                          />
                        </label>
                      </div>
                    </p>
                    <p>
                      Set Amount:
                      <input
                        type="text"
                        placeholder="Input Amount"
                        className="ml-2 input input-bordered input-sm w-full max-w-xs"
                      />
                    </p>
                    <div className="modal-action">
                      <label htmlFor="my_modal_6" className="btn">
                        Done
                      </label>
                    </div>
                  </div>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Single Course 2 */}
      <div className="">
        <div className="max-w-md p-4 sm:flex sm:space-x-6 border-2 border-yellow-200 rounded-2xl dark:text-gray-800">
          <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
            <img
              src="https://i.ibb.co/XWZcRSC/d4.png"
              alt=""
              className="object-cover object-center w-full h-full rounded dark:bg-gray-500"
            />
          </div>
          <div className="flex flex-col space-y-4">
            <div>
              <h2 className="text-2xl font-semibold">Course Name</h2>
              <span className="text-sm dark:text-gray-600">Teacher Name</span>
            </div>
            <div className="space-y-1">
              <span className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  aria-label="Email address"
                  className="w-4 h-4"
                >
                  <path
                    fill="currentColor"
                    d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"
                  ></path>
                </svg>
                <span className="dark:text-gray-600">
                  leroy.jenkins@company.com
                </span>
              </span>
              <span className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  aria-label="Phonenumber"
                  className="w-4 h-4"
                >
                  <path
                    fill="currentColor"
                    d="M449.366,89.648l-.685-.428L362.088,46.559,268.625,171.176l43,57.337a88.529,88.529,0,0,1-83.115,83.114l-57.336-43L46.558,362.088l42.306,85.869.356.725.429.684a25.085,25.085,0,0,0,21.393,11.857h22.344A327.836,327.836,0,0,0,461.222,133.386V111.041A25.084,25.084,0,0,0,449.366,89.648Zm-20.144,43.738c0,163.125-132.712,295.837-295.836,295.837h-18.08L87,371.76l84.18-63.135,46.867,35.149h5.333a120.535,120.535,0,0,0,120.4-120.4v-5.333l-35.149-46.866L371.759,87l57.463,28.311Z"
                  ></path>
                </svg>
                <span className="dark:text-gray-600">+25 381 77 983</span>
              </span>
              <span className="flex items-center space-x-2">
                <button className="btn">Update</button>
                <button className="btn">Delete</button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
