import React from 'react'
import { useGetSingleProduct } from './hooks/useGetSingleProduct';
import { useNavigate } from 'react-router-dom';

const SingleProduct = () => {
  const { product, loading } = useGetSingleProduct();
  const navigate = useNavigate();

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex flex-col items-center gap-3">
        <svg className="animate-spin h-10 w-10 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
        </svg>
        <p className="text-gray-500 text-sm font-medium">Loading product...</p>
      </div>
    </div>
  );

  if (!product) return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <p className="text-5xl mb-4">📦</p>
        <h2 className="text-xl font-bold text-gray-800">Product not found</h2>
        <p className="text-gray-500 text-sm mt-1">This product may have been removed or doesn't exist.</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-6 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition"
        >
          Go Back
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="max-w-4xl mx-auto">

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-800 mb-6 transition"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row">

          {/* Product Image */}
          <div className="md:w-1/2 h-72 md:h-auto bg-gray-100 flex items-center justify-center">
            {product.image ? (
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="text-gray-300 flex flex-col items-center gap-2">
                <svg className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 19.5h16.5M12 9.75a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" />
                </svg>
                <span className="text-sm">No image available</span>
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="md:w-1/2 p-8 flex flex-col justify-between">
            <div>
              {/* Category Badge */}
              {product.category && (
                <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide mb-4">
                  {product.category}
                </span>
              )}

              {/* Name */}
              <h1 className="text-2xl font-bold text-gray-800 mb-3">
                {product.name}
              </h1>

              {/* Price */}
              <p className="text-3xl font-extrabold text-blue-600 mb-5">
                ${Number(product.price).toFixed(2)}
              </p>

              {/* Divider */}
              <hr className="border-gray-100 mb-5" />

              {/* Description */}
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Description</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {product.description || 'No description provided.'}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mt-8">

              <button
                onClick={() => navigate('/products')}
                className="flex-1 border border-gray-300 hover:bg-gray-50 text-gray-700 text-sm font-semibold py-2.5 rounded-lg transition"
              >
                All Products
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SingleProduct;