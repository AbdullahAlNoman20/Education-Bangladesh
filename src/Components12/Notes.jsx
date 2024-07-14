import { useLoaderData } from "react-router-dom";

const Notes = () => {

  const nots = useLoaderData() 
  
    return (
        <div>
            <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-gray-50 dark:text-gray-800">
        <h2 className="text-xl font-semibold">Students Note List</h2>
        <h2 className="text-sm font-semibold">Total Notes: {nots.length}</h2>
        <ul className="flex flex-col divide-y dark:divide-gray-300">
          
          {
            nots.map(note => <li className="flex flex-col py-6 sm:flex-row sm:justify-between"
            
              key={note._id}

            >
              <div className="flex w-full space-x-2 sm:space-x-4">
                <div className="flex flex-col justify-between w-full pb-4">
                  <div className="flex justify-between w-full pb-2 space-x-2">
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                        {note.title}
                      </h3>
                      <p className="text-sm dark:text-gray-600">Student Gmail: {note.email}</p>
                      <p className="text-sm dark:text-gray-600">{note.text}</p>
                    </div>
                  </div>
                </div>
              </div>
            </li> )
          }



        </ul>
      </div>
        </div>
    );
};

export default Notes;