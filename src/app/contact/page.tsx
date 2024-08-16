'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { db } from '@firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

const ContactPage: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Basic validation
    if (!name || !email || !message) {
      setError("All fields are required.");
      setLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    try {
      // Submit form data to Firestore
      await addDoc(collection(db, 'contacts'), {
        name,
        email,
        phoneNumber,
        message,
        timestamp: new Date(),
      });

      // Clear form fields on success
      setName("");
      setEmail("");
      setPhoneNumber("");
      setMessage("");
      setError(null);
    } catch (error) {
      setError("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-blue-gradient md:bg-gray-100">
      {/* Image Container (Hidden on small devices) */}
      <div className="relative flex-1 hidden md:block">
        <div className="relative w-full h-full">
          <Image
            src="https://i.postimg.cc/mZ50Gzrm/contact-me-2.png"
            alt="Contact Image"
            fill
            style={{ objectFit: 'contain' }}
            className="absolute inset-0"
          />
        </div>
      </div>

      {/* Form Container */}
      <div className="flex-1 flex items-center justify-center p-4 md:p-8">
        <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md md:max-w-4xl bg-white p-6 md:p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">Contact Us</h1>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="w-full p-4 border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className="w-full p-4 border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Phone Number (optional)"
            className="w-full p-4 border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"
            cols={30}
            rows={6}
            className="w-full p-4 border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
          {error && <p className="text-red-500 mt-2">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-4 px-6 text-white bg-blue-600 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
