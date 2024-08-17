'use client';

import React, { useState, useEffect } from 'react';
import { db } from '@firebaseConfig';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { useAuth } from '@contexts/AuthContext';
import { User } from 'firebase/auth';

interface UserData {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
}

const UsersPage: React.FC = () => {
  const { isAuthenticated, userRole } = useAuth();
  const [users, setUsers] = useState<UserData[]>([]);
  const [newUser, setNewUser] = useState<{ name: string; email: string; role: 'user' | 'admin' }>({ name: '', email: '', role: 'user' });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'users'));
        const usersList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as UserData));
        setUsers(usersList);
      } catch (err) {
        console.error('Error fetching users:', err);
        setError('Failed to load users.');
      }
    };

    fetchUsers();
  }, []);

  const handleAddUser = async () => {
    try {
      await addDoc(collection(db, 'users'), newUser);
      setNewUser({ name: '', email: '', role: 'user' });
      setError(null);
    } catch (err) {
      console.error('Error adding user:', err);
      setError('Failed to add user.');
    }
  };

  const handleDeleteUser = async (id: string) => {
    try {
      await deleteDoc(doc(db, 'users', id));
      setUsers(users.filter(user => user.id !== id));
    } catch (err) {
      console.error('Error deleting user:', err);
      setError('Failed to delete user.');
    }
  };

  if (!isAuthenticated || userRole !== 'admin') {
    return <p className="p-8">You do not have access to this page.</p>;
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">User Management</h1>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Add New User</h2>
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Name"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            className="border rounded p-2"
          />
          <input
            type="email"
            placeholder="Email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            className="border rounded p-2"
          />
          <select
            value={newUser.role}
            onChange={(e) => setNewUser({ ...newUser, role: e.target.value as 'user' | 'admin' })}
            className="border rounded p-2"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          <button
            onClick={handleAddUser}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add User
          </button>
        </div>
      </div>

      <h2 className="text-xl font-semibold mb-4">User List</h2>
      <div className="space-y-4">
        {users.map(user => (
          <div key={user.id} className="bg-white shadow-md rounded-lg p-4 flex justify-between items-center">
            <div>
              <p className="font-bold">{user.name}</p>
              <p className="text-gray-600">{user.email}</p>
              <p className="text-gray-400">{user.role}</p>
            </div>
            <button
              onClick={() => handleDeleteUser(user.id)}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
