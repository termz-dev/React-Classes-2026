import React from "react";
import { useCreateCars } from "./Hooks/useCreateCars";

const CreateCar = () => {
  const { formData, handleChange, handleSubmit, loading } = useCreateCars();

  return (
    <section className="min-h-screen bg-gray-50 px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Create Car</h1>
          <p className="mt-2 text-gray-600">
            Add a new car to your inventory
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl bg-white p-8 shadow-sm"
        >
          <div className="space-y-6">
            {/* Image */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Car Image URL
              </label>
              <input
                type="text"
                name="image"
                value={formData.image || ""}
                onChange={handleChange}
                placeholder="https://example.com/car.jpg"
                className="w-full text-black rounded-xl border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:outline-none"
                required
              />
            </div>

            {/* Brand & Model */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Brand
                </label>
                <input
                  type="text"
                  name="brand"
                  value={formData.brand || ""}
                  onChange={handleChange}
                  placeholder="Toyota"
                  className="w-full text-black rounded-xl border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Model
                </label>
                <input
                  type="text"
                  name="model"
                  value={formData.model || ""}
                  onChange={handleChange}
                  placeholder="Corolla"
                  className="w-full text-black rounded-xl border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:outline-none"
                  required
                />
              </div>
            </div>

            {/* Year & Color */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Year
                </label>
                <input
                  type="number"
                  name="year"
                  value={formData.year || ""}
                  onChange={handleChange}
                  placeholder="2021"
                  className="w-full text-black rounded-xl border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Color
                </label>
                <input
                  type="text"
                  name="color"
                  value={formData.color || ""}
                  onChange={handleChange}
                  placeholder="White"
                  className="w-full text-black rounded-xl border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:outline-none"
                  required
                />
              </div>
            </div>

            {/* Transmission & Price */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Transmission
                </label>
                <select
                  name="transmission"
                  value={formData.transmission || ""}
                  onChange={handleChange}
                  className="w-full text-black rounded-xl border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:outline-none"
                  required
                >
                  <option value="">Select transmission</option>
                  <option value="Automatic">Automatic</option>
                  <option value="Manual">Manual</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Price (₦)
                </label>
                <input
                  type="number"
                  name="price"
                  value={formData.price || ""}
                  onChange={handleChange}
                  placeholder="8500000"
                  className="w-full text-black rounded-xl border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:outline-none"
                  required
                />
              </div>
            </div>

            {/* Availability */}
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                name="isAvailable"
                checked={formData.isAvailable}
                onChange={handleChange}
                className="h-4 w-4 accent-indigo-600"
              />
              <label className="text-sm text-gray-700">
                Car is available
              </label>
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-4 pt-6">
              <button
                type="button"
                className="rounded-xl border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={loading}
                className="rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-indigo-400"
              >
                {loading ? "Creating..." : "Create Car"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CreateCar;
