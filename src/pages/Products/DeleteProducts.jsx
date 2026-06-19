import React, { useEffect } from 'react'
import { useDeleteProduct } from './hooks/useDeleteproduct';

const DeleteProduct = () => {
    const {deleteProduct, isDeleting} = useDeleteProduct();
  return (
    <div>
      <button className="mt-8 w-[200px] rounded-xl bg-red-600 py-3 text-sm font-semibold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-gray-400"
           onClick={deleteProduct}
           disabled={isDeleting}
           >{isDeleting ? "Deleting..." : "Delete product"}</button>
    </div>
  )
}


export default DeleteProduct
