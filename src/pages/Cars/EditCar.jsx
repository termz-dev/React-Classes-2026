import React from "react";
import { useUpdateCars } from "./Hooks/useUpdateCars";

const EditCar = () => {
  const { carData, setCarData, handleSubmit } = useUpdateCars();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl rounded-2xl bg-white shadow-sm border border-gray-100">
        <div className="border-b border-gray-100 px-6 py-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Edit Car Details
          </h2>
          <p className="text-sm text-gray-500">
            Update the information for this car
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {/* Image */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Image URL
            </label>
            <input
              type="text"
              value={carData.image}
              onChange={(e) =>
                setCarData({ ...carData, image: e.target.value })
              }
              className="w-full text-black rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none"
              placeholder="https://example.com/car.jpg"
            />
          </div>

          {/* Grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Brand
              </label>
              <input
                type="text"
                value={carData.brand}
                onChange={(e) =>
                  setCarData({ ...carData, brand: e.target.value })
                }
                className="w-full text-black rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Model
              </label>
              <input
                type="text"
                value={carData.model}
                onChange={(e) =>
                  setCarData({ ...carData, model: e.target.value })
                }
                className="w-full text-black rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Year
              </label>
              <input
                type="number"
                value={carData.year}
                onChange={(e) =>
                  setCarData({ ...carData, year: e.target.value })
                }
                className="w-full text-black rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Price
              </label>
              <input
                type="number"
                value={carData.price}
                onChange={(e) =>
                  setCarData({ ...carData, price: e.target.value })
                }
                className="w-full text-black rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Color
            </label>
            <input
              type="text"
              value={carData.color}
              onChange={(e) =>
                setCarData({ ...carData, color: e.target.value })
              }
              className="w-full text-black rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Transmission
            </label>
            <input
              type="text"
              value={carData.transmission}
              onChange={(e) =>
                setCarData({ ...carData, transmission: e.target.value })
              }
              className="w-full text-black rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none"
            />
          </div>

          <button
            type="submit"
            className="mt-6 w-full rounded-xl bg-indigo-600 py-3 text-sm font-medium text-white hover:bg-indigo-700 transition focus:ring-4 focus:ring-indigo-200"
          >
            Update Car
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditCar;
