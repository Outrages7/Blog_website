import React, { useContext } from 'react';
import { AppContext } from '../Context/AppContext';

const Footer = () => {
  const { page, handlePageChange, totalPages } = useContext(AppContext);


  return (
    <div className="fixed bottom-0 inset-x-0 bg-white py-3 border-t border-gray-300 shadow-md">
      <div className="flex items-center justify-between w-11/12 max-w-2xl mx-auto">
        <div className="flex gap-x-3">
          {page > 1 && (
            <button
              onClick={() =>  handlePageChange(page - 1)}
              className="border border-gray-400 hover:bg-gray-100 py-1 px-4 rounded-md transition"
            >
              Previous
            </button>
          )}

          {page < totalPages && (
            <button
              onClick={() =>  handlePageChange(page + 1)}
              className="border border-gray-400 hover:bg-gray-100 py-1 px-4 rounded-md transition"
            >
              Next
            </button>
          )}
        </div>

        <p className="text-sm font-semibold text-gray-600">
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  );
};

export default Footer;
