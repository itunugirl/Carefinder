"use client";

import { useState } from 'react';
import Head from 'next/head';
import ShareButton from '@components/shareButtons';
import { exportToCSV } from '@utils/exportCSV';

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

const SearchPage: React.FC = () => {
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
    setMessage(null);

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
        setFilteredResults(searchResults);
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
    setMessage(null);
    setSelectedType('');
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
    setFilteredResults(results);
  };

  const formatAddressForMap = (address: string) => {
    return encodeURIComponent(address);
  };

  const shareUrl = (hospital: Hospital) => {
    const hospitalUrl = `https://www.example.com/hospitals/${hospital.id}`;
    return {
      whatsapp: `https://api.whatsapp.com/send?text=Check out this hospital: ${hospitalUrl}`,
      instagram: `https://www.instagram.com/share?url=${encodeURIComponent(hospitalUrl)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(hospitalUrl)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(hospitalUrl)}`,
      email: `mailto:?subject=Hospital Information&body=Check out this hospital: ${hospitalUrl}`,
    };
  };

  const handleExport = () => {
    const csvData = filteredResults.map((hospital) => ({
      Name: hospital.name,
      Address: hospital.address,
      Phone: hospital.phone_number,
      State: hospital.state.name,
      Type: hospital.type.name,
    }));

    exportToCSV(csvData, {
      headers: ['Name', 'Address', 'Phone', 'State', 'Type'],
      filename: 'hospitals.csv',
    });
  };

  return (
    <>
      <Head>
        <title>Search Hospitals</title>
        <meta name="description" content="Find hospitals near you with MedEase." />
      </Head>
      <main className="min-h-screen flex flex-col items-center p-6 bg-gradient-light-blue">
        <section className="bg-white rounded-lg shadow-lg max-w-3xl w-full p-8 mb-12">
          <h1 className="text-4xl font-bold text-blue-800 mb-4 text-center">Find Your Nearest Hospitals</h1>
          <p className="text-lg text-gray-700 mb-6 text-center">Enter the name or location to find hospitals near you.</p>
          <div className="relative mb-6">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by hospital name or location"
              className="border border-blue-400 p-4 rounded-full shadow-sm w-full text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Search hospitals by name or location"
            />
          </div>
          <div className="flex justify-center space-x-4 mb-4">
            <button
              onClick={handleSearch}
              className="bg-blue-600 text-white py-2 px-6 rounded-full shadow-lg hover:bg-blue-700 transition"
              disabled={loading}
              aria-label="Search for hospitals"
            >
              {loading ? 'Searching...' : 'Search'}
            </button>
            <button
              onClick={handleClear}
              className="bg-gray-600 text-white py-2 px-6 rounded-full shadow-lg hover:bg-gray-700 transition"
              aria-label="Clear search results"
            >
              Clear
            </button>
            <button
              onClick={handleExport}
              className="bg-green-600 text-white py-2 px-6 rounded-full shadow-lg hover:bg-green-700 transition"
              aria-label="Export search results as CSV"
            >
              Export CSV
            </button>
          </div>
          {message && <p className="text-red-500 text-center mt-4">{message}</p>}
        </section>
        {results.length > 0 && (
          <section className="w-full">
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
                aria-label="Filter by hospital type"
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
                  className="bg-blue-600 text-white py-2 px-4 rounded-full shadow-lg hover:bg-blue-700 transition text-lg"
                  aria-label="Clear filter"
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
                  <div key={hospital.id} className="bg-white border border-gray-300 rounded-lg p-6 shadow-md hover:shadow-xl transition">
                    <h3 className="text-xl font-semibold mb-2">
                      <a href={`https://www.example.com/hospitals/${hospital.id}`} className="text-blue-700 hover:underline" aria-label={`View details for ${hospital.name}`}>
                        {hospital.name}
                      </a>
                    </h3>
                    <p className="text-gray-600 mb-2">{hospital.address}</p>
                    <p className="text-gray-600 mb-2">{hospital.phone_number}</p>
                    <p className="text-gray-600 mb-2">{hospital.state.name}</p>
                    <p className="text-gray-600 mb-4">{hospital.type.name}</p>
                    <div className="flex justify-center space-x-2">
                    {Object.entries(shareUrl(hospital)).map(([platform, url]) => (
                        <ShareButton
                          key={platform}
                          platform={platform}
                          url={url}
                          color={
                            platform === 'whatsapp'
                              ? 'text-green-500'
                              : platform === 'instagram'
                              ? 'text-pink-500'
                              : platform === 'twitter'
                              ? 'text-blue-400'
                              : platform === 'facebook'
                              ? 'text-blue-600'
                              : 'text-gray-600'
                          }
                          aria-label={`Share ${hospital.name} on ${platform}`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              !loading && <p className="text-center text-gray-600">No hospitals found.</p>
            )}
          </section>
        )}
      </main>
    </>
  );
};

export default SearchPage;
