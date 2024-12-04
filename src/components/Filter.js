import React from 'react';


function Filter({ onCategoryChange }) {
  const categories = ['All', 'Dairy', 'Produce', 'Dessert'];


  return (
    <select onChange={(e) => onCategoryChange(e.target.value)}>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
}


export default Filter;




