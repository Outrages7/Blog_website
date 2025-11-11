import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { NavLink } from "react-router-dom";
import Spinner from "./Spinner";

const Blog = () => {
  const { posts, loading } = useContext(AppContext);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-gray-500 text-lg font-medium">No posts found</p>
        </div>
      ) : (
        posts.map((post) => (
          <article
            key={post.id}
            className="border border-gray-200 bg-white p-6 mb-6 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
          >
            {/* ✅ Clickable title */}
            <NavLink to={`/blog/${post.id}`}>
              <h2 className="text-2xl font-bold text-gray-800 mb-2 hover:text-blue-600">
                {post.title}
              </h2>
            </NavLink>

            {/* ✅ Clickable category */}
            <div className="text-sm text-gray-500 mb-3">
              By{" "}
              <span className="font-semibold text-gray-700">{post.author}</span>{" "}
              in{" "}
              <NavLink
                to={`/categories/${post.category.replaceAll(" ", "-")}`}
                className="italic text-blue-600 hover:underline"
              >
                {post.category}
              </NavLink>
            </div>

            <p className="text-xs text-gray-400 mb-3">
              Posted on <span>{post.date}</span>
            </p>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              {post.content}
            </p>

            {/* ✅ Clickable tags */}
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <NavLink
                  key={index}
                  to={`/tags/${tag.replaceAll(" ", "-")}`}
                  className="bg-blue-50 text-blue-700 text-sm font-medium px-3 py-1 rounded-full border border-blue-200 hover:bg-blue-100"
                >
                  #{tag}
                </NavLink>
              ))}
            </div>
          </article>
        ))
      )}
    </div>
  );
};

export default Blog;
