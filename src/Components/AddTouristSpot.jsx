import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const AddTouristSpot = () => {
  const handleAddSpot = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const spotName = form.spotName.value;
    const photo = form.photo.value;
    const country = form.country.value;
    const location = form.location.value;
    const description = form.description.value;
    const cost = form.cost.value;
    const season = form.season.value;
    const time = form.time.value;
    const visitor = form.visitor.value;

    const newSpot = {
      name,
      email,
      spotName,
      photo,
      country,
      location,
      description,
      cost,
      season,
      time,
      visitor,
    };
    console.log(newSpot);

    // Send Data to the server

    fetch("https://mountrideserver.vercel.app/spot", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newSpot),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "success!",
            text: "Spot Added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div>
      <Helmet>
        <title>City In | Post Comment </title>
      </Helmet>
      <section className="p-6 text-black">
        <form
          onSubmit={handleAddSpot}
          noValidate=""
          action=""
          className="container flex flex-col mx-auto space-y-12 text-black"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-50 text-black">
            <div className="space-y-2 col-span-full lg:col-span-1 border-r-8"
            data-aos-duration="2000"
            data-aos="fade-right"
            >
              <p className="font-bold text-2xl">Post Comment</p>
              
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 text-black"
            data-aos-duration="2500"
            data-aos="fade-left"
            >
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-sm">
                  Your Name
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Abdullah Al Noman"
                  className="border p-2 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 border-gray-300"
                />
              </div>
              
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="zip" className="text-sm">
                  Your Comments
                </label>
                <input
                  name="visitor"
                  type="text"
                  required
                  placeholder="wonderful ....."
                  className="border p-2 w-full rounded-md focus:ring focus:ring-opacity-75  focus:ring-violet-600 border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-2 mt-4">
                <input
                  type="submit"
                  value="Post Comment"
                  className="btn btn-block btn-outline"
                />
              </div>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default AddTouristSpot;
