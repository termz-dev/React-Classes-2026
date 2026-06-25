import { useGetAllCelebs } from './hooks/useGetAllCelebs'

const Celebs = () => {

  const {loading, error, setSearchQuery, searchQuery, celebs} = useGetAllCelebs();

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

return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className='text-3xl sm:text-4xl font-bold text-gray-800 mb-8'>Celebrities</h1>
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
              {celeb.bio && <p className="text-sm text-gray-600">{celeb.bio}</p>}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Celebs
