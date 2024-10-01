/* eslint-disable no-unused-vars */
// BlogSection.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import blogsData from '../../data/blog.json';
import CategoryList from './CategoryList';
import PageReveal from '../../componnets/common/loading/Loading';

const BlogSection = () => {
  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(false); // Loading state

  useEffect(() => {
    const savedPage = localStorage.getItem('currentPage');
    if (savedPage) {
      setCurrentPage(Number(savedPage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('currentPage', currentPage);
  }, [currentPage]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Filter blogs based on the selected category
  const filteredBlogs = selectedCategory
    ? blogsData.filter(blog => blog.tags.includes(selectedCategory))
    : blogsData;

  const currentBlogs = filteredBlogs.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);

  // Function to handle page change with loading and scroll
  const handlePageChange = (page) => {
    setLoading(true); // Start loading animation
    setCurrentPage(page);

    // After a small delay (for animation purposes)
    setTimeout(() => {
      gsap.to(window, { scrollTo: 0, duration: 0.5 }); // Scroll to top
      setLoading(false); // End loading animation
    }, 1500); // Adjust time for loading animation
  };

  // Function to handle category selection with loading and scroll
  const handleSelectCategory = (category) => {
    setLoading(true); // Start loading animation
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to the first page on category selection

    // After a small delay (for animation purposes)
    setTimeout(() => {
      gsap.to(window, { scrollTo: 0, duration: 0.5 }); // Scroll to top
      setLoading(false); // End loading animation
    }, 1500); // Adjust time for loading animation
  };

  return (
    <div className="blog-section">
      {loading ? (
       <PageReveal/>
      ) : (
        <div className={`blog-details-main ${loading ? 'hidden' : ''}`}>
        <div className="blog-container">
          <div className="blog-main-sub-sections">
            <div className="blog-container-new">
              <div className="blog-man">
                {currentBlogs.map((blog) => (
                  <div key={blog.id} className="blog-card">
                    <div className="blog-card-img">
                      <Link to={`/blog/${blog.slug}`}>
                        <img src={blog.image} alt={blog.title} />
                      </Link>
                    </div>
                    <div className="blog-content">
                      <Link to={`/blog/${blog.slug}`}>{blog.title}</Link>
                      <p>{blog.date}</p>
                      <div className="tags">
                        {blog.tags.map((tag, index) => (
                          <span key={index} className="tag">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pagination">
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index + 1}
                    onClick={() => handlePageChange(index + 1)}
                    className={`page-button ${currentPage === index + 1 ? 'active' : ''}`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>
            <div className="category-container">
              <CategoryList
                tags={blogsData.flatMap(blog => blog.tags)}
                onSelectCategory={handleSelectCategory}
              />
            </div>
          </div>
        </div>
      </div>
      )

     
}
    </div>
  );
};

export default BlogSection;
