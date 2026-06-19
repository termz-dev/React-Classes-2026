import React from 'react'
import { useUpdateProducts } from './hooks/useUpdateProducts';

const UpdateProducts = () => {
  const { productData, loading, setProductData, handleSubmit } = useUpdateProducts();

  const handleChange = (e) => {
    setProductData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="bg-white w-full max-w-xl rounded-2xl shadow-lg p-8">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Update Product</h1>
          <p className="text-sm text-gray-500 mt-1">Edit the details below and save your changes.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Product Name */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Product Name</label>
            <input
              type="text"
              name="title"
              value={productData.title}
              onChange={handleChange}
              placeholder="Enter product name"
              required
              className="border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>

          {/* Description */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Description</label>
            <textarea
              name="description"
              value={productData.description}
              onChange={handleChange}
              placeholder="Enter product description"
              rows={4}
              required
              className="border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
            />
          </div>

          {/* Price & Category — side by side */}
          <div className="flex gap-4">
            <div className="flex flex-col gap-1 flex-1">
              <label className="text-sm font-medium text-gray-700">Price ($)</label>
              <input
                type="number"
                name="price"
                value={productData.price}
                onChange={handleChange}
                placeholder="0.00"
                min="0"
                step="0.01"
                required
                className="border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>

            <div className="flex flex-col gap-1 flex-1">
              <label className="text-sm font-medium text-gray-700">Category</label>
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

          {/* Image URL */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Image URL</label>
            <input
              type="url"
              name="image"
              value={productData.image}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
              className="border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>

          {/* Image Preview */}
          {productData.image && (
            <div className="rounded-lg overflow-hidden border border-gray-200 h-48 w-full">
              <img
                src={productData.image}
                alt="Product preview"
                className="w-full h-full object-cover"
                onError={(e) => (e.target.style.display = 'none')}
              />
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white font-semibold py-2.5 rounded-lg transition text-sm flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                </svg>
                Updating...
              </>
            ) : 'Save Changes'}
          </button>

        </form>
      </div>
    </div>
  );
};

export default UpdateProducts;