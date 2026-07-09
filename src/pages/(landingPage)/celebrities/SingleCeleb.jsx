import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useGetSingleCeleb } from './hooks/useGetSingleCeleb'
import { useDeleteCeleb } from './hooks/useDeleteCeleb'
import { Link } from 'react-router-dom'


const SingleCeleb = () => {
    const {loading, error, singleCeleb} = useGetSingleCeleb();
    const {deleteCeleb} = useDeleteCeleb();
    const navigate = useNavigate();

    console.log({singleCeleb})

    if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-lg font-semibold animate-pulse text-gray-600">
          Loading celebrity details...
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

  if (!singleCeleb) {
    return <div><p>Celeb not found</p></div>
  }

  async function handleDelete(id) {

    // Step 1: Ask for confirmation
    const confirmed = window.confirm("Are you sure you want to delete this celebrity?");
    
    if (!confirmed) return;  // If user says no, do nothing
    
    // Step 2: Call delete
    const deleted = await deleteCeleb(id);
    
    // Step 3: If successful, refetch the list
    if (deleted) {
        navigate('/celebs')
    }
    
  }

  return (
   <div>
    
      {singleCeleb && (
        <div className="max-w-4xl mx-auto px-6 py-10">
            <Link to={`/celebs/${singleCeleb._id}/edit`} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
            Edit Celeb
            </Link>
           
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            {singleCeleb.name}
          </h2>
          <img
            src={singleCeleb.image}
            alt={singleCeleb.name}
            className="w-full h-96 object-cover rounded-2xl mb-6"
          />

          <p className="text-gray-700 text-lg">{singleCeleb.bio}</p>
          <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition" onClick={() => handleDelete(singleCeleb._id)}>
    Delete
</button>
           
        </div>
      )}

      
    </div>
  )
}

export default SingleCeleb
