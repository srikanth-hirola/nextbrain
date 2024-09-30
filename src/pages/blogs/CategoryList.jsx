// CategoryList.js
import React from 'react';

const CategoryList = ({ tags, onSelectCategory }) => {
  const uniqueTags = [...new Set(tags)]; // Get unique tags

  return (
    <div className="category-list">
      <h3>Categories</h3>
      <ul>
        {uniqueTags.map((tag, index) => (
          <li key={index} onClick={() => onSelectCategory(tag)} className="category-item">
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
