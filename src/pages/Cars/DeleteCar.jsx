import React from 'react'
import { useDeleteCar } from './Hooks/useDeleteCar';

const DeleteCar = () => {
    const {deleteCar, isDeleting} = useDeleteCar();
  return (
    <div>
      <button className="mt-8 w-[200px] rounded-xl bg-red-600 py-3 text-sm font-semibold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-gray-400"
           onClick={deleteCar}
           disabled={isDeleting}
           >{isDeleting ? "Deleting..." : "Delete car"}</button>
    </div>
  )
}

export default DeleteCar
