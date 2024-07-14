import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const MngNote = () => {
  const nots = useLoaderData();

  const [createNotes, setCreateNotes] = useState(nots);
  const [control, setControl] = useState(false);

  const handleDelete = (_id) => {
    console.log(_id);
    fetch(`http://localhost:5000/nots/${_id}`, {
      method: "DELETE",
    },[control])
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("Deleted Successfully");
          const remaining = createNotes.filter(
            (createNote) => createNote._id !== _id
          );
          setCreateNotes(remaining);
          setControl(!control)
        }
      });
  };

  return (
    <div>
      <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-gray-50 dark:text-gray-800">
        <h2 className="text-xl font-semibold">Your Note List: {nots.length}</h2>
        <ul className="flex flex-col divide-y dark:divide-gray-300">
          {nots.map((note) => (
            <li
              className="flex flex-col py-6 sm:flex-row sm:justify-between"
              key={note._id}
            >
              <div className="flex w-full space-x-2 sm:space-x-4">
                <div className="flex flex-col justify-between w-full pb-4">
                  <div className="flex justify-between w-full pb-2 space-x-2">
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                        {note.title}
                      </h3>
                      <p className="text-sm dark:text-gray-600">{note.text}</p>
                    </div>
                  </div>
                  <div className="flex text-sm divide-x gap-2">
                    <button
                      onClick={() => handleDelete(note._id)}
                      type="button"
                      className="btn flex items-center px-2 py-1 pl-0 space-x-1"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-4 h-4 fill-current"
                      >
                        <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                        <rect width="32" height="200" x="168" y="216"></rect>
                        <rect width="32" height="200" x="240" y="216"></rect>
                        <rect width="32" height="200" x="312" y="216"></rect>
                        <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                      </svg>
                      <span>Remove</span>
                    </button>
                    <Link to={`/a_dashboard/update/${note._id}`}>
                    <button className="btn">Update</button>
                    </Link>
                     
                   
                  </div>
                </div>
              </div>
            </li>
          ))}

          
        </ul>
      </div>
    </div>
  );
};

export default MngNote;


