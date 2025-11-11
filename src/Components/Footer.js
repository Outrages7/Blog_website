import React, { useContext } from 'react';
import { AppContext } from '../Context/AppContext';

const Footer = () => {
  const { page, handlePageChange, totalPages } = useContext(AppContext);

  return (
    <div className="fixed bottom-0 inset-x-0 bg-white py-3 border-t border-gray-200 shadow-sm">
      <div className="flex items-center justify-between w-11/12 max-w-2xl mx-auto">
        {/* ✅ Navigation Buttons */}
        <div className="flex gap-x-3">
          {page > 1 && (
            <button
              onClick={() => handlePageChange(page - 1)}
              className="text-sm font-medium text-blue-600 border border-blue-300 rounded-lg px-4 py-2 hover:bg-blue-100 transition-all duration-200"
            >
              ← Previous
            </button>
          )}

          {page < totalPages && (
            <button
              onClick={() => handlePageChange(page + 1)}
              className="text-sm font-medium text-blue-600 border border-blue-300 rounded-lg px-4 py-2 hover:bg-blue-100 transition-all duration-200"
            >
              Next →
            </button>
          )}
        </div>

        {/* ✅ Page Indicator */}
        <p className="text-sm font-semibold text-gray-700">
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  );
};

export default Footer;
