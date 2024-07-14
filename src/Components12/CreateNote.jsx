const CreateNote = () => {
  const handleAddNotes = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const title = form.title.value;
    const text = form.text.value;

    const notes = {email, title,text};
    console.log(notes);

    fetch("http://localhost:5000/notes", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(notes),
    })
      .then((req) => req.json())
      .then((data) => {
        console.log(data);

		if(data.insertedId){
			alert('Note Added successfully')
			form.reset();
		}


      });
  };

  return (
    <div>
      <section className="p-6  dark:text-gray-900">
        <form
          onSubmit={handleAddNotes}
          noValidate=""
          action=""
          className="container flex flex-col mx-auto space-y-12"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-2xl">
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="username" className="text-sm">
                  Your Email
                </label>
                <input
                  name="email"
                  type="text"
                  placeholder="Email"
                  className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="website" className="text-sm">
                  Note Title
                </label>
                <input
                  name="title"
                  type="text"
                  placeholder="Title"
                  className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full">
                <label htmlFor="bio" className="text-sm">
                  Note
                </label>
                <textarea
                  name="text"
                  placeholder="Make Note Everyday"
                  className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300"
                ></textarea>
              </div>
              <button type="submit" className="btn">Add</button>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default CreateNote;
