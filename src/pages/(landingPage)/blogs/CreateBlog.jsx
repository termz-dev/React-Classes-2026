import { useCreateBlog } from "./useCreateBlog";

const CreateBlog = () => {

    const {loading, formData, handleChange, handleSubmit} = useCreateBlog()
   

  return (
    <section className="min-h-screen bg-gray-50 px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Create Blog</h1>
          <p className="mt-2 text-gray-600">
            Share insights, stories, and ideas with your audience
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl bg-white p-8 shadow-sm"
        >
          <div className="space-y-6">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Blog Title
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter blog title"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Excerpt
              </label>
              <textarea
                name="excerpt"
                value={formData.excerpt}
                onChange={handleChange}
                rows="3"
                placeholder="Short summary of the blog"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Content
              </label>
              <textarea
                name="content"
                value={formData.content}
                onChange={handleChange}
                rows="8"
                placeholder="Write your blog content here..."
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:outline-none"
                required
              />
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Category
                </label>
                <input
                  type="text"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  placeholder="e.g. Web Development"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Tags
                </label>
                <input
                  type="text"
                  name="tags"
                  value={formData.tags}
                  onChange={handleChange}
                  placeholder="mern, react, node"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Cover Image URL
              </label>
              <input
                type="text"
                name="coverImage"
                value={formData.coverImage}
                onChange={handleChange}
                placeholder="https://example.com/image.jpg"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:outline-none"
              />
            </div>

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                name="isPublished"
                checked={formData.isPublished}
                onChange={handleChange}
                className="h-4 w-4 accent-indigo-600"
              />
              <label className="text-sm text-gray-700">
                Publish immediately
              </label>
            </div>

            <div className="flex justify-end gap-4 pt-6">
              <button
                type="button"
                className="rounded-xl border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
              >
              {loading ? 'loading...' : "Create Blog"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CreateBlog;
