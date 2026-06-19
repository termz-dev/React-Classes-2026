import React from 'react'
import { useUpdateBlog } from './useUpdateBlog'

const EditBlog = () => {
    const {blogData, setBlogData, handleSubmit} = useUpdateBlog();
  return (
    <div>
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md space-y-5">
  <h2 className="text-2xl font-semibold text-gray-800">Update Blog</h2>

  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      Title
    </label>
    <input
      type="text"
      name="title"
      value={blogData.title}
      onChange={(e) => setBlogData(prev => ({ ...prev, title: e.target.value }))}
      className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none"
    />
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      Slug
    </label>
    <input
      type="text"
      name="slug"
        value={blogData.slug}
      onChange={(e) => setBlogData(prev => ({ ...prev, slug: e.target.value }))}
      className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none"
    />
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      Excerpt
    </label>
    <textarea
      name="excerpt"
      rows="3"
      value={blogData.description}
      onChange={(e) => setBlogData(prev => ({ ...prev, description: e.target.value }))}
      className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none"
    >
      
    </textarea>
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      Content
    </label>
    <textarea
      name="content"
      rows="8"
        value={blogData.content}
        onChange={(e) => setBlogData(prev => ({ ...prev, content: e.target.value }))}
      className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none"
    >
      
    </textarea>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Author
      </label>
      <input
        type="text"
        name="author"
        value={blogData.author}
        onChange={(e) => setBlogData(prev => ({ ...prev, author: e.target.value }))}
        className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none"
      />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Category
      </label>
      <input
        type="text"
        name="category"
        value={blogData.category}
        onChange={(e) => setBlogData(prev => ({ ...prev, category: e.target.value }))}
        className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none"
      />
    </div>
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      Cover Image URL
    </label>
    <input
      type="url"
      name="coverImage"
        value={blogData.coverImage}
        onChange={(e) => setBlogData(prev => ({ ...prev, coverImage: e.target.value }))}
      className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none"
    />
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      Tags (comma separated)
    </label>
    <input
      type="text"
      name="tags"
        value={blogData.tags}
        onChange={(e) => setBlogData(prev => ({ ...prev, tags: e.target.value }))}
      className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none"
    />
  </div>

  <div className="flex items-center gap-2">
    <input
      type="checkbox"
      name="isPublished"
      defaultChecked
      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
    />
    <span className="text-sm text-gray-700">Published</span>
  </div>

  <button
    type="submit"
    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-md transition"
  >
    Update Blog
  </button>
</form>

    </div>
  )
}

export default EditBlog
