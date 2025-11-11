import React from 'react';
import { NavLink } from 'react-router-dom';

const BlogDetails = ({ post }) => {
  return (
    <div className="border border-gray-200 bg-white rounded-2xl p-6 mb-8 shadow-sm hover:shadow-md transition-all duration-200">
      {/* ✅ Clickable Title */}
      <NavLink
        to={`/blog/${post.id}`}
        className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-200"
      >
        {post.title}
      </NavLink>

      {/* ✅ Author + Category */}
      <p className="text-sm text-gray-500 mt-2">
        <span className="font-medium text-gray-700">{post.author}</span> on{' '}
        <NavLink
          to={`/categories/${post.category.replaceAll(' ', '-')}`}
          className="text-blue-600 hover:underline"
        >
          {post.category}
        </NavLink>
      </p>

      {/* ✅ Date */}
      <p className="text-xs text-gray-400 mt-1">Posted on {post.date}</p>

      {/* ✅ Content */}
      <p className="text-base text-gray-700 leading-relaxed mt-4">
        {post.content}
      </p>

      {/* ✅ Tags */}
      <div className="flex flex-wrap gap-2 mt-4">
        {post.tags.map((tag, index) => (
          <NavLink
            key={index}
            to={`/tags/${tag.replaceAll(' ', '-')}`}
            className="text-sm text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full hover:bg-blue-100 transition-all duration-200"
          >
            #{tag}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;
