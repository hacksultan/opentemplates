import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ 
  currentPage, 
  totalPages, 
  onPageChange 
}) => {
  const renderPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    // Adjust start page if we're near the end
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    for (let page = startPage; page <= endPage; page++) {
      pages.push(
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`relative inline-flex items-center px-4 py-2 text-sm font-medium transition-colors duration-200 ${
            page === currentPage
              ? 'bg-primary-600 text-white shadow-sm'
              : 'text-gray-700 bg-white hover:bg-gray-50 hover:text-primary-600'
          } border border-gray-300 rounded-lg`}
        >
          {page}
        </button>
      );
    }
    
    return pages;
  };

  if (totalPages <= 1) {
    return null;
  }

  return (
    <nav className="flex items-center justify-center space-x-2 py-12" aria-label="Pagination">
      {/* Previous Page */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`relative inline-flex items-center px-4 py-2 text-sm font-medium border border-gray-300 rounded-lg transition-colors duration-200 ${
          currentPage === 1
            ? 'text-gray-400 bg-gray-100 cursor-not-allowed'
            : 'text-gray-700 bg-white hover:bg-gray-50 hover:text-primary-600'
        }`}
      >
        <ChevronLeft className="h-4 w-4 mr-1" />
        Previous
      </button>

      {/* Page Numbers */}
      <div className="flex space-x-1">
        {renderPageNumbers()}
      </div>

      {/* Next Page / Older Posts */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`relative inline-flex items-center px-4 py-2 text-sm font-medium border border-gray-300 rounded-lg transition-colors duration-200 ${
          currentPage === totalPages
            ? 'text-gray-400 bg-gray-100 cursor-not-allowed'
            : 'text-gray-700 bg-white hover:bg-gray-50 hover:text-primary-600'
        }`}
      >
        Older Posts
        <ChevronRight className="h-4 w-4 ml-1" />
      </button>
    </nav>
  );
};

export default Pagination;
