import React from "react";
import { useEditBlog } from "./Hooks/useEditBlog";

const EditBlog = () => {
  const { blogData, setBlogData, handleSubmit } = useEditBlog();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-3xl bg-white rounded-2xl border border-gray-100 shadow-sm">
        {/* Header */}
        <div className="border-b border-gray-100 px-6 py-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Edit Blog Post
          </h2>
          <p className="text-sm text-gray-500">
            Update your blog content
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Title
            </label>
            <input
              type="text"
              value={blogData.title}
              onChange={(e) =>
                setBlogData({ ...blogData, title: e.target.value })
              }
              className="input"
              placeholder="Enter blog title"
            />
          </div>

          {/* Excerpt */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Excerpt
            </label>
            <textarea
              rows="3"
              value={blogData.excerpt}
              onChange={(e) =>
                setBlogData({ ...blogData, excerpt: e.target.value })
              }
              className="textarea"
              placeholder="Short summary of the blog post"
            />
          </div>

          {/* Content */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Content
            </label>
            <textarea
              rows="6"
              value={blogData.content}
              onChange={(e) =>
                setBlogData({ ...blogData, content: e.target.value })
              }
              className="textarea"
              placeholder="Write your blog content here..."
            />
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Category
              </label>
              <input
                type="text"
                value={blogData.category}
                onChange={(e) =>
                  setBlogData({ ...blogData, category: e.target.value })
                }
                className="input"
                placeholder="e.g. Technology"
              />
            </div>

            {/* Tags */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Tags
              </label>
              <input
                type="text"
                value={blogData.tags}
                onChange={(e) =>
                  setBlogData({ ...blogData, tags: e.target.value })
                }
                className="input"
                placeholder="react, javascript, ui"
              />
            </div>
          </div>

          {/* Cover Image */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Cover Image URL
            </label>
            <input
              type="text"
              value={blogData.coverImage}
              onChange={(e) =>
                setBlogData({ ...blogData, coverImage: e.target.value })
              }
              className="input"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="mt-6 w-full rounded-xl bg-indigo-600 py-3 text-sm font-medium text-white
            hover:bg-indigo-700 transition focus:ring-4 focus:ring-indigo-200"
          >
            Update Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditBlog;
