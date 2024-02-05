'use client'

import React, { useState } from 'react';

const FriendsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      
      {/* Search bar */}
      <div className="my-4 flex items-center">
        <input
          type="text"
          placeholder="Search friends..."
          value={searchTerm}
          onChange={handleSearch}
          className="p-2 border border-gray-300 rounded-md"
        />
      </div>
    </div>
  );
};

export default FriendsPage;
