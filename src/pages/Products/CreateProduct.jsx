import React from 'react'
import { useCreateProduct } from './hooks/useCreateProduct'
import { useNavigate } from 'react-router-dom'

const CreateProduct = () => {
  const { productData, handleChange, handleSubmit, loading } = useCreateProduct()
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="bg-white w-full max-w-xl rounded-2xl shadow-lg p-8">

        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <button
            onClick={() => navigate(-1)}
            className="p-2 rounded-lg hover:bg-gray-100 transition text-gray-500 hover:text-gray-800"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Create Product</h1>
            <p className="text-sm text-gray-500 mt-0.5">Fill in the details to add a new product.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Title */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">
              Product Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="title"
              value={productData.title}
              onChange={handleChange}
              placeholder="e.g. Wireless Headphones"
              required
              className="border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>

          {/* Description */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              name="description"
              value={productData.description}
              onChange={handleChange}
              placeholder="Write a short product description..."
              rows={4}
              required
              className="border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
            />
          </div>

          {/* Price & Category */}
          <div className="flex gap-4">
            <div className="flex flex-col gap-1 flex-1">
              <label className="text-sm font-medium text-gray-700">
                Price ($) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="price"
                value={productData.price}
                onChange={handleChange}
                placeholder="0.00"
                min="0"
                step="0.01"
                required
                className="border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>

            <div className="flex flex-col gap-1 flex-1">
              <label className="text-sm font-medium text-gray-700">
                Category <span className="text-red-500">*</span>
              </label>
              <select
                name="category"
                value={productData.category}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white"
              >
                <option value="" disabled>Select category</option>
                <option value="electronics">Electronics</option>
                <option value="clothing">Clothing</option>
                <option value="food">Food</option>
                <option value="furniture">Furniture</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
            {/* Rating & Rating Count */}
<div className="flex gap-4">
  <div className="flex flex-col gap-1 flex-1">
    <label className="text-sm font-medium text-gray-700">
      Rating <span className="text-red-500">*</span>
    </label>
    <input
      type="number"
      name="rate"
      value={productData.rating.rate}
      onChange={handleChange}
      placeholder="0.0"
      min="0"
      max="5"
      step="0.1"
      required
      className="border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
    />
    <p className="text-xs text-gray-400">Value between 0 – 5</p>
  </div>

  <div className="flex flex-col gap-1 flex-1">
    <label className="text-sm font-medium text-gray-700">
      Rating Count <span className="text-red-500">*</span>
    </label>
    <input
      type="number"
      name="count"
      value={productData.rating.count}
      onChange={handleChange}
      placeholder="0"
      min="0"
      step="1"
      required
      className="border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
    />
    <p className="text-xs text-gray-400">Total number of reviews</p>
  </div>
</div>

          {/* Image URL */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Image URL</label>
            <input
              type="url"
              name="image"
              value={productData.image}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
              className="border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>

          {/* Image Preview */}
          {productData.image && (
            <div className="rounded-xl overflow-hidden border border-gray-200 h-48 w-full bg-gray-50">
              <img
                src={productData.image}
                alt="Preview"
                className="w-full h-full object-cover"
                onError={(e) => (e.target.style.display = 'none')}
              />
            </div>
          )}

          {/* Divider */}
          <hr className="border-gray-100" />

          {/* Actions */}
          <div className="flex gap-3 pt-1">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="flex-1 border border-gray-300 hover:bg-gray-50 text-gray-700 text-sm font-semibold py-2.5 rounded-lg transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white text-sm font-semibold py-2.5 rounded-lg transition flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                  Creating...
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                  Create Product
                </>
              )}
            </button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default CreateProduct