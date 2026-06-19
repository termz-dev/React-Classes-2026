import { useGetUserProducts } from "../hooks/useGetUserProducts"

export default function UsersProducts() {
    const { userProducts, loading, error } = useGetUserProducts();

    return (
        <div className="p-6 min-h-screen bg-gray-50">
            <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">User's Products</h1>
            {loading && (
                <div className="flex justify-center items-center h-32">
                    <span className="text-lg text-gray-500">Loading...</span>
                </div>
            )}
            {error && (
                <div className="flex justify-center items-center h-32">
                    <span className="text-red-500 font-semibold">{error.message || 'Error loading products.'}</span>
                </div>
            )}
            {!loading && !error && userProducts && userProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {userProducts.map((product) => (
                        <div
                            key={product._id}
                            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-5 flex flex-col"
                        >
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-48 object-cover rounded-md mb-4 border"
                            />
                            <h2 className="text-xl font-semibold mb-2 text-gray-800">{product.title}</h2>
                            <p className="text-gray-600 mb-2">{product.description}</p>
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-indigo-600 font-bold text-lg">${product.price}</span>
                                <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm font-medium">
                                    {product.rating?.rate} ★ ({product.rating?.count})
                                </span>
                            </div>
                            <div className="flex items-center justify-between text-sm text-gray-500 mb-1">
                                <span className="capitalize">{product.category}</span>
                                <span>By: {product.user?.firstName} {product.user?.lastName}</span>
                            </div>
                            <span className="text-xs text-gray-400 mt-auto mb-2">Created: {new Date(product.createdAt).toLocaleDateString()}</span>
                            <div className="flex gap-3 mt-2">
                                <button
                                    className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded transition-colors duration-200 font-semibold shadow-sm"
                                    // onClick={() => handleDelete(product._id)}
                                >
                                    Delete
                                </button>
                                <button
                                    className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded transition-colors duration-200 font-semibold shadow-sm"
                                    // onClick={() => handleUpdate(product._id)}
                                >
                                    Update
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                !loading && !error && (
                    <div className="flex justify-center items-center h-32">
                        <span className="text-gray-500">No products found.</span>
                    </div>
                )
            )}
        </div>
    );
}