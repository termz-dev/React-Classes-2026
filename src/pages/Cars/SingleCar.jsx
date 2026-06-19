import React from "react";
import { useGetSingleCar } from "./Hooks/useGetSingleCar";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import DeleteCar from "./DeleteCar";

const SingleCar = () => {
  const { car, loading } = useGetSingleCar();
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="text-center">
          <div className="mx-auto h-16 w-16 animate-spin rounded-full border-4 border-slate-300 border-t-slate-900"></div>
          <p className="mt-4 text-lg text-slate-600">Loading car details...</p>
        </div>
      </div>
    );
  }

  if (!car) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-gray-500">Car not found</p>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50 px-4 py-12">
      <div className="mx-auto max-w-5xl">
        {/* Back button */}
        <button
          onClick={() => navigate('/cars')}
          className="mb-6 text-sm font-medium text-indigo-600 hover:underline"
        >
          ← Back
        </button>

        <div className="grid gap-10 md:grid-cols-2">
          {/* Image */}
          <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
            <img
              src={car.image}
              alt={`${car.brand} ${car.model}`}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Details */}
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <h1 className="text-3xl font-bold text-gray-900">
                {car.brand} {car.model}
              </h1>

              <span
                className={`rounded-full px-3 py-1 text-xs font-medium ${
                  car.isAvailable
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {car.isAvailable ? "Available" : "Unavailable"}
              </span>
            </div>

            <div className="space-y-3 text-gray-700">
              <p>
                <span className="font-medium">Year:</span> {car.year}
              </p>
              <p>
                <span className="font-medium">Color:</span> {car.color}
              </p>
              <p>
                <span className="font-medium">Transmission:</span>{" "}
                {car.transmission}
              </p>
              <p className="text-xl font-semibold text-gray-900">
                ₦{Number(car.price).toLocaleString()}
              </p>
            </div>
                <button
              disabled={!car.isAvailable}
              className="mt-8 w-full rounded-xl bg-indigo-600 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-gray-400"
            >
              {car.isAvailable ? "Book This Car" : "Not Available"}
            </button>
            <div className="flex gap-3 justify-center">
              
            <Link to={`/cars/${car._id}/edit`}>
            <button className="mt-8 w-[200px] rounded-xl bg-indigo-600 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-gray-400"
           >Update car</button></Link>
            <span className="w-200px"><DeleteCar /></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleCar;
