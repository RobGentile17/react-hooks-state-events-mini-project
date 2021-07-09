import React from "react";

function CategoryFilter({ category, selectedCategory, setSelectedCategory }) {
  const listOfCategories= category.map(category => {

  const handleCategoryClick = () => {
    setSelectedCategory(category)
  }
    return (
    <button
    className={category === selectedCategory ? "selected" : ""}
    key={category}
    onClick={handleCategoryClick}
    >
      
      {category}
    </button>
  )})
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {listOfCategories}
    </div>
  );
}

export default CategoryFilter;