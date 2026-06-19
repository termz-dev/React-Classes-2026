import React from "react";
import { useGetAllProducts } from "./hooks/useGetAllProducts";
import { Link, useNavigate } from "react-router-dom";

const Products = () => {
  const { products, loading } = useGetAllProducts();
  const navigate = useNavigate();
  if (loading) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-2 border-stone-800 border-t-transparent rounded-full animate-spin" />
          <p className="text-sm text-stone-400 tracking-widest uppercase">
            Loading products
          </p>
        </div>
      </div>
    );
  }

  if (!products.length) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center">
        <p className="text-stone-400 text-sm tracking-widest uppercase">
          No products found
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10 border-b border-stone-200 pb-6">
          <h1 className="text-3xl font-semibold text-stone-800 tracking-tight">
            Products
          </h1>
          <p className="text-stone-400 text-sm mt-1">{products.length} items</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl overflow-hidden border border-stone-100 hover:border-stone-300 hover:shadow-md transition-all duration-200 group cursor-pointer"
            >
              {/* Product Image */}
              <div className="aspect-square bg-stone-100 overflow-hidden">
                {product.image ? (
                  <Link to={`/products/${product._id}`}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full text-slate-800 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  </Link>
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-stone-300">
                    <svg
                      className="w-10 h-10"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h2 className="text-stone-800 font-medium text-sm leading-snug line-clamp-2">
                  {product.title}
                </h2>

                {product.category && (
                  <span className="inline-block mt-2 text-xs text-stone-400 bg-stone-100 rounded-full px-2 py-0.5 capitalize">
                    {product.category}
                  </span>
                )}

                <div className="mt-3 flex items-center justify-between">
                  {product.price !== undefined && (
                    <span className="text-stone-900 font-semibold text-sm">
                      ${Number(product.price).toFixed(2)}
                    </span>
                  )}
                  <button className="text-xs bg-stone-800 text-white px-3 py-1.5 rounded-lg hover:bg-stone-700 transition-colors">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
