const UploadMaterials = () => {
  const handleAddMaterials = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const sessionID = form.sessionID.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const link1 = form.link1.value;
    const link2 = form.link2.value;
    const link3 = form.link3.value;

    const materials = { title, sessionID, email, photo, link1, link2, link3 };
    console.log(materials);

    fetch("http://localhost:5000/materials", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(materials),
    })
      .then((req) => req.json())
      .then((data) => {
        console.log(data);
        if(data.insertedId){
          alert('Materials Uploaded successfully')
          form.reset();
        }
      });
  };
  return (
    <div>
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
                <span className="dark:text-gray-600">
                  Course Status : Active
                </span>
                <span className="">
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                  <button
                    className="btn"
                    onClick={() =>
                      document.getElementById("my_modal_5").showModal()
                    }
                  >
                    Upload Materials
                  </button>
                  <dialog
                    id="my_modal_5"
                    className="modal modal-bottom sm:modal-middle"
                  >
                    <div className="modal-box">
                      <p className="py-4">
                        <section className="p-6 dark:text-gray-900">
                          <form
                            onSubmit={handleAddMaterials}
                            noValidate=""
                            action=""
                            className="container flex flex-col mx-auto space-y-12"
                          >
                            <h1 className="font-bold">
                              You Are Uploading Study session materials
                            </h1>
                            <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-2xl ">
                              <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                                <div className="col-span-full sm:col-span-3">
                                  <label
                                    htmlFor="firstname"
                                    className="text-sm"
                                  >
                                    Title
                                  </label>
                                  <input
                                    name="title"
                                    type="text"
                                    placeholder="Title"
                                    className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300"
                                  />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                  <label htmlFor="lastname" className="text-sm">
                                    Study Session ID
                                  </label>
                                  <input
                                    name="sessionID"
                                    type="text"
                                    placeholder="Session ID"
                                    className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300"
                                  />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                  <label htmlFor="email" className="text-sm">
                                    Email
                                  </label>
                                  <input
                                    name="email"
                                    type="email"
                                    placeholder="Email"
                                    className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300"
                                  />
                                </div>
                                <div className="col-span-full">
                                  <label htmlFor="address" className="text-sm">
                                    Image Upload
                                  </label>
                                  <input
                                    name="photo"
                                    type="text"
                                    placeholder=""
                                    className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300"
                                  />
                                </div>
                                <div className="col-span-full sm:col-span-2">
                                  <label htmlFor="city" className="text-sm">
                                    Link-1
                                  </label>
                                  <input
                                    name="link1"
                                    type="text"
                                    placeholder=""
                                    className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300"
                                  />
                                </div>
                                <div className="col-span-full sm:col-span-2">
                                  <label htmlFor="state" className="text-sm">
                                    Link-2
                                  </label>
                                  <input
                                    name="link2"
                                    type="text"
                                    placeholder=""
                                    className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300"
                                  />
                                </div>
                                <div className="col-span-full sm:col-span-2">
                                  <label htmlFor="zip" className="text-sm">
                                    Link-3
                                  </label>
                                  <input
                                    name="link3"
                                    type="text"
                                    placeholder=""
                                    className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300"
                                  />
                                </div>
                              </div>
                            </fieldset>
                            <button
                              type="submit"
                              value="Add Materials"
                              className="btn"
                            >
                              Upload
                            </button>
                          </form>
                        </section>
                      </p>
                      <div className="modal-action">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn">Done</button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadMaterials;
