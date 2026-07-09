import { useGetAllCelebs } from './hooks/useGetAllCelebs'
// import { useDeleteCeleb } from './hooks/useDeleteCeleb';
import { Link } from 'react-router-dom';

const Celebs = () => {

  const {loading, error, setSearchQuery, searchQuery, celebs} = useGetAllCelebs();
  // const {deleteCeleb} = useDeleteCeleb();

 if(loading && celebs.length === 0) {  // 👈 only show loading on INITIAL load
    return(
      <div>
        <p>Loading.....</p>
      </div>
    )
}

if (error) {
    return (
      <div>
        <p className='text-red-600'>Error: {error}</p>
      </div>
    )
}

// async function handleDelete(id) {
  

//     // Step 1: Ask for confirmation
//     const confirmed = window.confirm("Are you sure you want to delete this celebrity?");
    
//     if (!confirmed) return;  // If user says no, do nothing
    
//     // Step 2: Call delete
//     const deleted = await deleteCeleb(id);
    
//     // Step 3: If successful, refetch the list
//     if (deleted) {
//         allCelebs();
//     }
// }

return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className='text-3xl sm:text-4xl font-bold text-gray-800 mb-8'>Celebrities</h1>
      <Link to="/create-celeb" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition font-semibold">Create Celeb</Link>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search celebrities..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {loading && <p className="text-gray-400 text-sm mt-2">Searching...</p>}  {/* 👈 subtle loading indicator */}
      </div>

      {celebs.length === 0 ? (
        <p className="text-gray-500">No celebrities found.</p>
      ) : (
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {celebs.map((celeb) => (
           <Link to={`/celebs/${celeb._id}`}> 
            <div
              key={celeb._id}
              className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
            >
              
              <img
                src={celeb.image}
                alt={celeb.name}
                className='w-32 h-32 object-cover rounded-full mb-4'
              />
          
              <h2 className="text-lg font-semibold text-gray-900">{celeb.name}</h2>
              <p className="text-sm text-gray-500 mb-3">{celeb.profession}</p>
            </div>
             </Link>
          ))}
        </div>
       
      )}
    </div>
  )
}

export default Celebs
