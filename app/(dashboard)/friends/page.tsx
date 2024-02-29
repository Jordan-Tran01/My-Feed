
import { prisma } from '@/utils/db';
import React, { useState } from 'react';

const getUsers = async () => {
  try {
    const users = await prisma.user.findMany();
    return users;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw new Error('Failed to fetch users');
  }
}

const FriendsPage = async () => {
  const users = await getUsers()
  console.log(users)

  return (
    <div>
      
      {/* Search bar */}
      <div className="my-4 flex items-center">
        <input
          type="text"
          placeholder="Search friends..."
          className="p-2 border border-gray-300 rounded-md"
        />
      </div>
    </div>
  );
};

export default FriendsPage;
