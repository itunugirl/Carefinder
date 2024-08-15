'use client'


import React, { useState, useEffect } from 'react';
import MarkdownEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import ReactMarkdown from 'react-markdown';
import { db } from '@firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '@firebaseConfig';

const AdminPage: React.FC = () => {
  const [markdown, setMarkdown] = useState<string>('');
  const [preview, setPreview] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const handleEditorChange = ({ text }: { text: string }) => {
    setMarkdown(text);
    setPreview(text);
  };

  const handleSave = async () => {
    if (!user) {
      setError('You must be logged in to save.');
      return;
    }

    setLoading(true);
    try {
      await addDoc(collection(db, 'hospitals'), {
        content: markdown,
        createdAt: new Date(),
        author: user.email, // Optional: store who created the document
      });
      setMarkdown('');
      setPreview('');
      setError(null);
    } catch (err) {
      setError('Failed to save the document.');
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return <p className="p-8">You must be logged in to view this page.</p>;
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Admin Page</h1>
      <MarkdownEditor
        value={markdown}
        style={{ height: '500px' }}
        renderHTML={(text) => <ReactMarkdown>{text}</ReactMarkdown>}
        onChange={handleEditorChange}
      />
      <button
        onClick={handleSave}
        className={`mt-4 ${loading ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-500'} text-white px-4 py-2 rounded`}
        disabled={loading}
      >
        {loading ? 'Saving...' : 'Save'}
      </button>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      <div className="mt-8">
        <h2 className="text-xl font-semibold">Preview</h2>
        <ReactMarkdown>{preview}</ReactMarkdown>
      </div>
    </div>
  );
};

export default AdminPage;
