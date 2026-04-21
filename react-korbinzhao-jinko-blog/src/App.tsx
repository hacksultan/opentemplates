import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PostCard from './components/PostCard';
import Sidebar from './components/Sidebar';
import Pagination from './components/Pagination';
import Footer from './components/Footer';
import { posts } from './data/mockData';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const totalPages = Math.ceil(posts.length / postsPerPage);

  // Calculate posts for current page
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = posts.slice(startIndex, startIndex + postsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Blog Posts */}
          <div className="lg:col-span-2">
            {/* Featured Post (first post) */}
            {currentPage === 1 && currentPosts.length > 0 && (
              <div className="mb-12">
                <PostCard post={currentPosts[0]} featured={true} />
              </div>
            )}

            {/* Regular Posts Grid */}
            <div className="grid gap-8 mb-12">
              {(currentPage === 1 ? currentPosts.slice(1) : currentPosts).map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>

            {/* Pagination */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Sidebar />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;