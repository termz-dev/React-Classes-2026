import React from 'react'
import { useDeleteBlog } from './Hooks/useDeleteBlog'

const DeleteBlog = () => {
    const {isDeleting, deleteBlog} = useDeleteBlog()
  return (
      <div>
      <button className="mt-8 w-[200px] rounded-xl bg-red-600 py-3 text-sm font-semibold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-gray-400"
           onClick={deleteBlog}
           disabled={isDeleting}
           >{isDeleting ? "Deleting..." : "Delete blog"}</button>
    </div>
  )
}

export default DeleteBlog
