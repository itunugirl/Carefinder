"use client";

import { useState } from 'react';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider, facebookProvider } from '@firebaseConfig';
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import Image from 'next/image';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/search'); // Redirect to search page after successful login
    } catch (error) {
      if (error instanceof Error) {
        setError("Failed to log in. Please check your email and password.");
      } else {
        setError("Failed to log in. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      router.push('/search'); // Redirect to search page after successful login
    } catch (error) {
      setError("Failed to sign in with Google.");
    }
  };

  const handleFacebookSignIn = async () => {
    try {
      await signInWithPopup(auth, facebookProvider);
      router.push('/search'); // Redirect to search page after successful login
    } catch (error) {
      setError("Failed to sign in with Facebook.");
    }
  };

  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Login to your MedEase account." />
      </Head>
      <div className="flex min-h-screen bg-gray-100">
        <div className="w-1/2 relative">
          <Image
            src="/assets/images/Login.png"
            alt="Login Image"
            layout="fill"
            objectFit="contain"
            className="absolute inset-0"
          />
        </div>
        <div className="w-1/2 flex items-center justify-center p-8">
          <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
            <h1 className="text-4xl font-semibold text-gray-800 mb-6">Login</h1>
            <form onSubmit={handleLogin} className="space-y-6">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              {error && <p className="text-red-500 mb-4">{error}</p>}
              <button
                type="submit"
                className="bg-blue-600 text-white py-3 px-6 rounded-lg w-full hover:bg-blue-700 transition duration-300"
                disabled={loading}
              >
                {loading ? 'Logging in...' : 'Login'}
              </button>
            </form>
            <div className="mt-6 space-y-4">
              <button
                onClick={handleGoogleSignIn}
                className="flex items-center justify-center bg-red-500 text-white py-3 px-6 rounded-lg w-full hover:bg-red-600 transition duration-300"
              >
                <Image src="/assets/images/google-logo.bmp" alt="Google" width={24} height={24} className="mr-2" />
                Sign In with Google
              </button>
              <button
                onClick={handleFacebookSignIn}
                className="flex items-center justify-center bg-blue-700 text-white py-3 px-6 rounded-lg w-full hover:bg-blue-800 transition duration-300"
              >
                <Image src="/assets/images/facebook-logo.png" alt="Facebook" width={24} height={24} className="mr-2" />
                Sign In with Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
