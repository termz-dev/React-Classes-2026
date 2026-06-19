import React from "react";
import { useGetAllCars } from "./hooks/useGetAllCars";
import { Link } from "react-router-dom";

const Cars = () => {
  const { allCars, inpVal, loading, error, handleSearchChange, handleSearchClick } =
    useGetAllCars();
  // const [searchParams, setSearchParams] = useSearchParams();

  // const search = searchParams.get("search") || "";

  // const handleSearchChange = (e) => {
  //   const value = e.target.value;

  //   if (value) {
  //     setSearchParams({ search: value });
  //   } else {
  //     setSearchParams({});
  //   }
  // };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-lg font-semibold animate-pulse text-gray-600">
          Loading cars...
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

  // if (!allCars || allCars.length === 0) {
  //   return (
  //     <div className="flex items-center justify-center min-h-[60vh]">
  //       <p className="text-gray-500 text-lg">No cars available.</p>
  //     </div>
  //   );
  // }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Available Cars</h2>
        <div>
          <input
            type="text"
            placeholder="Search for car"
            value={inpVal}
            onChange={handleSearchChange}
            className="py-2 px-3 border rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button onClick={handleSearchClick} className="ml-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
            Search
          </button>
        </div>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {

          !allCars || allCars.length === 0 ? (
             <div className="flex items-center justify-center min-h-[60vh]">
       <p className="text-gray-500 text-lg">No cars available.</p>
     </div>
          ) : (

            allCars.map((car) => (
              <div
                key={car._id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden group"
              >
                <Link
                  to={`/cars/${car._id}`}
                  className="h-56 w-full overflow-hidden"
                >
                  <img
                    src={car.image}
                    alt={car.title}
                    className="w-[300px] h-[200px] object-cover group-hover:scale-105 transition"
                  />
                </Link>
    
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {car.title}
                  </h3>
    
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {car.description}
                  </p>
    
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-indigo-600">
                      ${Number(car.price).toLocaleString()}
                    </span>
    
                    <span className="text-xs bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full">
                      {car.category}
                    </span>
                  </div>
                </div>
              </div>
    
    
            ))
          )
        }
      </div>
    </div>
  );
};

export default Cars;
