import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import Blogs from '../Components/Blog';
import Footer from '../Components/Footer';

const TagPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const tag = location.pathname.split('/').at(-1).replaceAll('-', ' ');

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      <main className="flex-grow max-w-4xl mx-auto px-4 py-10">
        {/* ✅ Back + Title Section */}
        <div className="mb-6 flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="text-sm font-medium text-blue-600 border border-blue-300 rounded-lg px-4 py-2 hover:bg-blue-100 transition-all duration-200"
          >
            ← Back
          </button>

          <h2 className="text-xl font-semibold text-gray-800">
            Blogs Tagged{' '}
            <span className="text-blue-600 font-bold">#{tag}</span>
          </h2>
        </div>

        {/* ✅ Blog List */}
        <Blogs />
      </main>

      <Footer />
    </div>
  );
};

export default TagPage;
