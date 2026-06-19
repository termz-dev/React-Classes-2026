import React from "react";
import { useUpdateCar } from "./hooks/useUpdateCar";

const EditCar = () => {
  const { carData, setCarData, handleSubmit } = useUpdateCar();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-2xl bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Edit Car
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              placeholder="Enter car title"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
            value={carData.title}
              onChange={(e) =>
                setCarData({ ...carData, title: e.target.value })
              }
            />
          </div>

          {/* Category */}
          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Category
            </label>
            <input
              type="text"
              id="category"
              placeholder="SUV, Sedan, Electric..."
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
              value={carData.category}
              onChange={(e) =>
                setCarData({ ...carData, category: e.target.value })
              }
            />
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              rows="4"
              placeholder="Write a short description..."
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition resize-none"
              value={carData.description}
              onChange={(e) =>
                setCarData({ ...carData, description: e.target.value })
              }
            ></textarea>
          </div>

          {/* Price */}
          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              placeholder="Enter price"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
              value={carData.price}
              onChange={(e) =>
                setCarData({ ...carData, price: e.target.value })
              }
            />
          </div>

          {/* Image URL */}
          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Image URL
            </label>
            <input
              type="text"
              id="image"
              placeholder="https://example.com/car.jpg"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
              value={carData.image}
              onChange={(e) =>
                setCarData({ ...carData, image: e.target.value })
              }
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button

              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition duration-300 shadow-md hover:shadow-lg"
            >
              Update Car
            </button>

                <button

              type="submit"
              className="w-full bg-red-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition duration-300 shadow-md hover:shadow-lg"
            >
              Edit Car
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCar;
