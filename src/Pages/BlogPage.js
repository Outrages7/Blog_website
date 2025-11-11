import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';
import { baseUrl } from '../baseUrl';
import Header from '../Components/Header';
import Spinner from '../Components/Spinner';
import BlogDetails from './BlogDetails';
import Footer from '../Components/Footer';

const BlogPage = () => {
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const { setLoading, loading } = useContext(AppContext);
  const blogId = location.pathname.split('/').at(-1);

  async function fetchRelatedBlogs() {
    setLoading(true);
    const url = `${baseUrl}?blogId=${blogId}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setBlog(data.blog);
      setRelatedBlogs(data.relatedBlogs || []);
    } catch (error) {
      console.log('Error in BlogPage.js', error);
      setBlog(null);
      setRelatedBlogs([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      <main className="flex-grow max-w-4xl mx-auto px-4 py-10">
        <div className="mb-6">
          <button
            onClick={() => navigate(-1)}
            className="text-sm font-medium text-blue-600 border border-blue-300 rounded-lg px-4 py-2 hover:bg-blue-100 transition-all duration-200"
          >
            ← Back
          </button>
        </div>

        {loading ? (
          <Spinner />
        ) : blog ? (
          <div>
            <BlogDetails post={blog} />

            <h2 className="text-xl font-semibold text-gray-800 mb-4 mt-10 border-b border-gray-200 pb-2">
              Related Blogs
            </h2>

            {relatedBlogs.length > 0 ? (
              <div className="space-y-6">
                {relatedBlogs.map((post) => (
                  <BlogDetails key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center mt-4">
                No related blogs found.
              </p>
            )}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg font-medium">No Blogs Found</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default BlogPage;
