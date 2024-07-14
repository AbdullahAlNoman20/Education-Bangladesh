import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateNote = () => {
  const [nots, setNots] = useState([]);
  const { id } = useParams();
  // console.log(id)
  useEffect(() => {
    fetch(`http://localhost:5000/nots/${id}`)
      .then((res) => res.json())
      .then((data) => setNots(data));
  }, [id]);

  // console.log(nots)

  const handleUpdate = (event) => {
    const form = event.target;
    const email = form.email.value;
    const title = form.title.value;
    const text = form.text.value;

    const updatedNotes = { email, title, text };
    console.log(updatedNotes);

    fetch(`http://localhost:5000/updateNots/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedNotes),
    })
      .then((req) => req.json())
      .then((data) => {
        console.log(data);

        //   if(data.modifiedCount>0){
        //       alert('Note Updated successfully')
        //       form.reset();
        //   }
      });
  };

  return (
    <div>
      <section className=" p-6 dark:text-gray-900">
        <form
          onSubmit={handleUpdate}
          noValidate=""
          action=""
          className="container flex flex-col mx-auto space-y-12"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-2xl">
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="username" className="text-sm">
                  Email
                </label>
                <input
                  defaultValue={nots.email}
                  name="email"
                  type="text"
                  placeholder="New Email"
                  className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="website" className="text-sm">
                  Title
                </label>
                <input
                  defaultValue={nots.title}
                  name="title"
                  type="text"
                  placeholder="New Title"
                  className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full">
                <label htmlFor="bio" className="text-sm">
                  Note
                </label>
                <textarea
                  defaultValue={nots.text}
                  name="text"
                  placeholder="Updated Text"
                  className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300"
                ></textarea>
              </div>
              <button type="submit" value="Update Nots" className="btn">
                Update
              </button>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default UpdateNote;
