import React from 'react';
import { useGetSingleBlog } from './Hooks/useGetSingleBlog';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag, Clock } from 'lucide-react';
import DeleteBlog from './DeleteBlog';

const SingleBlog = () => {
  const { blog, loading, error } = useGetSingleBlog();
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="text-center">
          <div className="mx-auto h-16 w-16 animate-spin rounded-full border-4 border-slate-300 border-t-slate-900"></div>
          <p className="mt-4 text-lg text-slate-600">Loading article...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-red-50 to-rose-100 px-4">
        <div className="max-w-md rounded-2xl bg-white p-8 text-center shadow-xl">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
            <svg className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h2 className="mb-2 text-2xl font-bold text-slate-900">Oops!</h2>
          <p className="mb-6 text-slate-600">{error}</p>
          <button
            onClick={() => navigate('/blogs')}
            className="rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Back to Blogs
          </button>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-amber-50 to-orange-100 px-4">
        <div className="max-w-md rounded-2xl bg-white p-8 text-center shadow-xl">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
            <svg className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="mb-2 text-2xl font-bold text-slate-900">No Blog Found</h2>
          <p className="mb-6 text-slate-600">The blog you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/blogs')}
            className="rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Back to Blogs
          </button>
        </div>
      </div>
    );
  }

  // Calculate reading time (rough estimate: 200 words per minute)
  const wordCount = blog.content?.split(' ').length || 0;
  const readingTime = Math.ceil(wordCount / 200);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Header with back button */}
      <div className="border-b border-slate-200 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto max-w-4xl px-4 py-6">
          <button
            onClick={() => navigate('/blogs')}
            className="group flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-slate-900"
          >
            <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-1" />
            Back to Blogs
          </button>
        </div>
      </div>

      {/* Cover Image */}
      {blog.coverImage && (
        <div className="relative h-96 overflow-hidden bg-slate-200">
          <img
            src={blog.coverImage}
            alt={blog.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
        </div>
      )}

      {/* Article Content */}
      <article className="mx-auto max-w-4xl px-4 py-12">
        {/* Category Badge */}
        {blog.category && (
          <div className="mb-6">
            <span className="inline-block rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-semibold text-indigo-700">
              {blog.category}
            </span>
          </div>
        )}

        {/* Title */}
        <h1 className="mb-6 text-5xl font-bold leading-tight text-slate-900 lg:text-6xl">
          {blog.title}
        </h1>

        {/* Excerpt */}
        {blog.excerpt && (
          <p className="mb-8 text-xl leading-relaxed text-slate-600">
            {blog.excerpt}
          </p>
        )}

        {/* Meta Information */}
        <div className="mb-10 flex flex-wrap items-center gap-6 border-y border-slate-200 py-6">
          <div className="flex items-center gap-2 text-slate-600">
            <User className="h-5 w-5" />
            <span className="font-medium">{blog.author}</span>
          </div>

          <div className="flex items-center gap-2 text-slate-600">
            <Calendar className="h-5 w-5" />
            <span>{new Date(blog.createdAt).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</span>
          </div>

          {readingTime > 0 && (
            <div className="flex items-center gap-2 text-slate-600">
              <Clock className="h-5 w-5" />
              <span>{readingTime} min read</span>
            </div>
          )}
        </div>

        {/* Main Content */}
        <div className="prose prose-lg prose-slate max-w-none">
          <div className="whitespace-pre-wrap text-lg leading-relaxed text-slate-700">
            {blog.content}
          </div>
        </div>

        {/* Tags */}
        {blog.tags && blog.tags.length > 0 && (
          <div className="mt-12 border-t border-slate-200 pt-8">
            <div className="flex items-center gap-3">
              <Tag className="h-5 w-5 text-slate-400" />
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="rounded-lg bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:bg-slate-200"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="mt-12 flex gap-4">
          <button
            onClick={() => navigate('/blogs')}
            className="rounded-xl border-2 border-slate-900 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-900 hover:text-white"
          >
            View All Blogs
          </button>
          <button
            onClick={() => navigate(`/blogs/${blog._id}/edit`)}
            className="rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
          >
            Edit Blog
          </button>
        </div>
        <DeleteBlog/>
      </article>
    </div>
  );
};

export default SingleBlog;