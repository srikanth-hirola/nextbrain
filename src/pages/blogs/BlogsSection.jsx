/* eslint-disable no-unused-vars */
// BlogSection.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import blogsData from '../../data/blog.json';
import CategoryList from './CategoryList';

const BlogSection = () => {
  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);

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

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to the first page on category selection
  };

  return (
    <div className="blog-section">
   <div className="blog-details-main">
   <div className=" blog-container" >
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
        
        <div className="category-container" >
          <CategoryList tags={blogsData.flatMap(blog => blog.tags)} onSelectCategory={handleSelectCategory} />
        </div>
      </div>
      </div>
   </div>
    </div>
  );
};

export default BlogSection;
