import React from "react";
import { useDeleteCar } from "./hooks/useDeleteCar";

const DeleteCarCompo = () => {
  const { deleteCar, isDeleting } = useDeleteCar();
  return (
    <div>
      <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
       onClick={deleteCar}disabled={isDeleting}
      >
     { isDeleting ? "Deleting..." : "Delete Car"}
      </button>
    </div>
  );
};

export default DeleteCarCompo;
