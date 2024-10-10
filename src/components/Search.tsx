import React from 'react';

const Search: React.FC = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Search</h2>
      <input
        type="text"
        placeholder="Search..."
        className="w-full border rounded p-2"
      />
    </div>
  );
};

export default Search;