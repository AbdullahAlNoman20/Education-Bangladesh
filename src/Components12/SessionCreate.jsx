const SessionCreate = () => {
  const handleAddCourse = (event) => {
    event.preventDefault();
    const form = event.target;
    const courseName = form.courseName.value;
    const tutorName = form.tutorName.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const description = form.description.value;
    const registrationStart = form.registrationStart.value;
    const registrationEnd = form.registrationEnd.value;
    const ClassStart = form.ClassStart.value;
    const ClassEnd = form.ClassEnd.value;
    const SessionDuration = form.SessionDuration.value;

    const course = {
      courseName,
      tutorName,
      email,
      photo,
      description,
      registrationStart,
      registrationEnd,
      ClassStart,
      ClassEnd,
      SessionDuration,
    };
    console.log(course);

    fetch("http://localhost:5000/courses", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(course),
    })
      .then((req) => req.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <section className="p-6  dark:text-gray-900">
        <form
          onSubmit={handleAddCourse}
          noValidate=""
          action=""
          className="container flex flex-col mx-auto space-y-12"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-2xl">
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-sm">
                  Session Title
                </label>
                <input
                  name="courseName"
                  type="text"
                  placeholder="Title"
                  className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="lastname" className="text-sm">
                  Tutor name
                </label>
                <input
                  name="tutorName"
                  type="text"
                  placeholder="Tutor Name"
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
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="email" className="text-sm">
                  Session Cover Photo
                </label>
                <input
                  name="photo"
                  type="text"
                  placeholder="Photo URL"
                  className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full">
                <label htmlFor="address" className="text-sm">
                  Session Description
                </label>
                <input
                  name="description"
                  type="text"
                  placeholder=""
                  className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="city" className="text-sm">
                  Registration Start
                </label>
                <input
                  name="registrationStart"
                  type="text"
                  placeholder=""
                  className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="state" className="text-sm">
                  Registration End
                </label>
                <input
                  name="registrationEnd"
                  type="text"
                  placeholder=""
                  className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="zip" className="text-sm">
                  Class Start
                </label>
                <input
                  name="ClassStart"
                  type="text"
                  placeholder=""
                  className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="zip" className="text-sm">
                  Class End
                </label>
                <input
                  name="ClassEnd"
                  type="text"
                  placeholder=""
                  className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="zip" className="text-sm">
                  Session Duration
                </label>
                <input
                  name="SessionDuration"
                  type="text"
                  placeholder=""
                  className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
            </div>
          </fieldset>
          <button
            type="submit"
            value="Add Course"
            className="btn btn-outline btn-warning border-0 border-b-4 rounded-3xl"
          >
            Create Session Now
          </button>
        </form>
      </section>
    </div>
  );
};

export default SessionCreate;
