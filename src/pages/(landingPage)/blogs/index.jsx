import { useNavigate } from "react-router-dom";
import { useGetAllBlogs } from "./useGetAllBlogs";
import { Link } from "react-router-dom";

const Blogs = () => {
  const { blogs, loading, handleSearchChange, searchVal } = useGetAllBlogs();
  const navigate = useNavigate();

  console.log(blogs);

  // if (loading) {
  //   return (
  //     <p className="mt-3 text-center text-gray-600">
  //       loading...
  //     </p>
  //   );
  // }

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-10 flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Latest Blogs</h1>
          <p className="mt-3 text-gray-600">
            Insights, stories, and practical lessons
          </p>
        </div>

        <button
          onClick={() => navigate("/create-blog")}
          className="rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
        >
          Create Blog
        </button>
        <div>
          <input
            type="text"
            placeholder="Search for blog"
            value={searchVal}
            onChange={handleSearchChange}
            className="py-2 px-3 border rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>
      {blogs.length === 0 && (
        <p className="text-center text-gray-500">No blogs available</p>
      )}

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {loading ? (
          <p className="mt-3 text-center text-gray-600">loading...</p>
        ) : (
          blogs.map((blog) => (
            <article
              key={blog._id}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-lg"
            >
              {blog.coverImage && (
                <div className="overflow-hidden">
                  <img
                    src={blog.coverImage}
                    alt={blog.title}
                    className="h-52 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}

              <div className="p-6">
                <span className="mb-2 inline-block text-xs font-medium uppercase tracking-wide text-indigo-600">
                  {blog.category}
                </span>

                <h2 className="mb-3 text-xl font-semibold text-gray-900 line-clamp-2">
                  {blog.title}
                </h2>

                <p className="mb-4 text-gray-600 line-clamp-3">
                  {blog.excerpt}
                </p>
                <Link
                  to={`/blogs/${blog._id}`}
                  className="text-indigo-600 border py-1 px-2 mb-[10px] rounded hover:underline"
                >
                  Read more
                </Link>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>By {blog.author}</span>
                  <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {blog.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))
        )}
      </div>
    </section>
  );
};

export default Blogs;
