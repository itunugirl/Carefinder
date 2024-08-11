"use client";

import { useState } from 'react';
import Head from 'next/head';

interface Hospital {
  id: number;
  name: string;
  address: string;
  phone_number: string;
  state: {
    id: number;
    name: string;
  };
  type: {
    id: number;
    name: string;
  };
}

interface ApiResponse {
  status: string;
  data: Hospital[];
}

const SharePage: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Hospital[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string>('');
  const [filteredResults, setFilteredResults] = useState<Hospital[]>([]);

  const handleSearch = async () => {
    if (query.trim() === '') {
      setMessage('Please enter a hospital name or location to search.');
      return;
    }

    setLoading(true);
    setError(null);
    setMessage(null); // Clear any previous messages

    try {
      const response = await fetch(`https://api.reliancehmo.com/v3/providers`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data: ApiResponse = await response.json();
      if (data.status === 'success') {
        const searchResults = data.data.filter((hospital) =>
          hospital.address.toLowerCase().includes(query.toLowerCase()) || 
          hospital.name.toLowerCase().includes(query.toLowerCase())
        );
        setResults(searchResults);
        setFilteredResults(searchResults); // Set filtered results to initial search results
      } else {
        setError('No results found. Please try again later.');
      }
    } catch (error) {
      setError('Failed to fetch data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setQuery('');
    setResults([]);
    setFilteredResults([]);
    setMessage(null); // Clear any messages
    setSelectedType(''); // Clear selected type
  };

  const handleFilter = (type: string) => {
    setSelectedType(type);
    if (type) {
      const filtered = results.filter(
        (hospital) => hospital.type.name.toLowerCase() === type.toLowerCase()
      );
      setFilteredResults(filtered);
    } else {
      setFilteredResults(results);
    }
  };

  const handleClearFilter = () => {
    setSelectedType('');
    setFilteredResults(results); // Reset to the unfiltered results
  };

  const formatAddressForMap = (address: string) => {
    return encodeURIComponent(address);
  };

  const formatShareText = (hospital: Hospital) => {
    return `Check out this hospital: ${hospital.name}. Address: ${hospital.address}. Phone: ${hospital.phone_number}.`;
  };

  return (
    <>
      <Head>
        <title>Share Hospitals</title>
        <meta name="description" content="Share hospital details with MedEase." />
      </Head>
      <main
        className="min-h-screen flex flex-col items-center p-6"
        style={{
          background: 'linear-gradient(to right, #B5E2F0, #0EA9E7)',
        }}
      >
        <section className="bg-white bg-opacity-90 rounded-lg shadow-xl max-w-3xl w-full p-8 mb-12">
          <h1 className="text-4xl font-extrabold text-blue-800 mb-4 text-center">Share Hospital Details</h1>
          <p className="text-lg text-gray-700 mb-6 text-center">Search for hospitals and share their details.</p>
          <div className="relative mb-6">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by hospital name or location"
              className="border border-blue-400 p-4 rounded-full shadow-sm w-full text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex justify-center space-x-4 mb-4">
            <button
              onClick={handleSearch}
              className="bg-blue-600 text-white py-2 px-6 rounded-full shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
              disabled={loading}
            >
              {loading ? 'Searching...' : 'Search'}
            </button>
            <button
              onClick={handleClear}
              className="bg-gray-600 text-white py-2 px-6 rounded-full shadow-lg hover:bg-gray-700 transition-transform transform hover:scale-105"
            >
              Clear
            </button>
          </div>
          {message && <p className="text-red-500 text-center mt-4">{message}</p>}
        </section>
        {results.length > 0 && (
          <section className="w-full relative">
            <h2 className="text-3xl font-semibold text-blue-800 mb-6 text-center">Search Results</h2>
            <div className="mb-6 flex justify-end items-center space-x-4">
              <select
                value={selectedType}
                onChange={(e) => {
                  const value = e.target.value;
                  if (value === 'clear') {
                    handleClearFilter();
                  } else {
                    handleFilter(value);
                  }
                }}
                className="bg-blue-600 text-white border border-blue-500 p-2 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
              >
                <option value="">Filter by Type</option>
                <option value="hospital">Hospital</option>
                <option value="dental">Dental</option>
                <option value="optical clinic">Optical Clinic</option>
                <option value="spa">Spa</option>
                <option value="gym">Gym</option>
                <option value="clear">Clear Filter</option>
              </select>
              {selectedType && selectedType !== 'clear' && (
                <button
                  onClick={handleClearFilter}
                  className="bg-blue-600 text-white py-2 px-4 rounded-full shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105 text-lg"
                >
                  Clear Filter
                </button>
              )}
            </div>
            {loading && !filteredResults.length && !error && !message && <p className="text-center text-blue-600">Loading results...</p>}
            {error && <p className="text-center text-red-500">{error}</p>}
            {filteredResults.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
                {filteredResults.map((hospital) => (
                  <div key={hospital.id} className="bg-white border border-gray-300 rounded-lg p-6 shadow-md hover:shadow-xl transition-transform transform hover:scale-105">
                    <h3 className="text-xl font-semibold mb-2">
                      <a href={`/hospitals/${hospital.id}`} className="text-blue-600 hover:underline">
                        {hospital.name}
                      </a>
                    </h3>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${formatAddressForMap(hospital.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      {hospital.address}
                    </a>
                    <p className="text-gray-700 mb-2">{hospital.phone_number}</p>
                    <p className="text-gray-600 mb-2">State: {hospital.state.name}</p>
                    <p className="text-gray-600">Type: {hospital.type.name}</p>
                    <div className="mt-4 flex flex-col space-y-4">
                      <a
                        href={`mailto:?subject=Hospital Information&body=${encodeURIComponent(formatShareText(hospital))}`}
                        className="bg-blue-600 text-white py-2 px-4 rounded-full shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105 text-lg text-center"
                      >
                        Share via Email
                      </a>
                      <a
                        href={`https://wa.me/?text=${encodeURIComponent(formatShareText(hospital))}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-600 text-white py-2 px-4 rounded-full shadow-lg hover:bg-green-700 transition-transform transform hover:scale-105 text-lg text-center"
                      >
                        Share on WhatsApp
                      </a>
                      <a
                        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(formatShareText(hospital))}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-400 text-white py-2 px-4 rounded-full shadow-lg hover:bg-blue-500 transition-transform transform hover:scale-105 text-lg text-center"
                      >
                        Share on Twitter
                      </a>
                      <a
                        href={`sms:?body=${encodeURIComponent(formatShareText(hospital))}`}
                        className="bg-gray-700 text-white py-2 px-4 rounded-full shadow-lg hover:bg-gray-800 transition-transform transform hover:scale-105 text-lg text-center"
                      >
                        Share via Text
                      </a>
                      <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-purple-600 text-white py-2 px-4 rounded-full shadow-lg hover:bg-purple-700 transition-transform transform hover:scale-105 text-lg text-center"
                      >
                        Share on Instagram
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-600">No results found.</p>
            )}
          </section>
        )}
      </main>
    </>
  );
};

export default SharePage;
