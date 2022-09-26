import React from "react";

function CategoryFilter({
  categories,
  selectedCategoryFilter,
  setSelectedCategoryFilter,
}) {
  const categoryButtons = categories.map((category) => {
    const className = category === selectedCategoryFilter ? "selected" : null;

    return (
      <button
        onClick={() => setSelectedCategoryFilter(category)}
        key={category}
        className={className}
      >
        {" "}
        {category}{" "}
      </button>
    );
  });

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
