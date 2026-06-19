import React from "react";
import { useGetSIngleCar } from "./hooks/useGetSIngleCar";
import { Link } from "react-router-dom";
import DeleteCarCompo from "./DeleteCarCompo";

const SingleCar = () => {
  const { singleCar, loading, error } = useGetSIngleCar();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-lg font-semibold animate-pulse text-gray-600">
          Loading car details...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="bg-red-100 text-red-600 px-6 py-4 rounded-lg shadow">
          Error: {error}
        </div>
      </div>
    );
  }
  return (
    <div>
      {singleCar && (
        <div className="max-w-4xl mx-auto px-6 py-10">

           <Link to={'/cars/' + singleCar._id + '/edit'}>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
              Edit Car
            </button>
           </Link>

           
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            {singleCar.title}
          </h2>
          <img
            src={singleCar.image}
            alt={singleCar.title}
            className="w-full h-96 object-cover rounded-2xl mb-6"
          />

          <p className="text-gray-700 text-lg">{singleCar.description}</p>
          <DeleteCarCompo/>
           
        </div>
      )}

      
    </div>
  );
};

export default SingleCar;
