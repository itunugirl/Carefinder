// src/app/(auth)/login/page.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '@firebaseConfig/index';
import { doc, getDoc } from 'firebase/firestore';
import { FirebaseError } from 'firebase/app';
import useSignIn from '@hooks/useSignIn';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter(); // Use Next.js router
  const { handleSignIn } = useSignIn(); // Use custom hook

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!email || !password) {
      setError("Email and password are required.");
      setLoading(false);
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (!user.emailVerified) {
        setError("Please verify your email before logging in.");
        setLoading(false);
        return;
      }

      // Fetch user role from Firestore
      const userDoc = doc(db, 'users', user.uid);
      const docSnap = await getDoc(userDoc);

      if (docSnap.exists()) {
        const userData = docSnap.data();
        const userRole = userData.role || 'user';

        if (userRole === 'admin') {
          router.push('/admin');
        } else {
          router.push('/search');
        }
      } else {
        setError("User role not found.");
        setLoading(false);
      }
      
    } catch (error) {
      if (error instanceof FirebaseError) {
        switch (error.code) {
          case 'auth/wrong-password':
            setError("Incorrect password. Please try again.");
            break;
          case 'auth/user-not-found':
            setError("No user found with this email. Please check your email address.");
            break;
          case 'auth/too-many-requests':
            setError("Too many requests. Please try again later.");
            break;
          default:
            setError("Failed to log in. Please check your credentials and try again.");
        }
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-blue-gradient md:bg-gray-100">
      <div className="relative flex-1 hidden md:block">
        <div className="relative w-full h-full">
          <Image 
            src="https://i.postimg.cc/RZRkyPJH/login.png" 
            alt="Login Image"
            fill
            style={{ objectFit: 'contain' }}
            className="absolute inset-0"
          />
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center p-4 md:p-8">
        <form onSubmit={handleLogin} className="space-y-6 w-full max-w-md md:max-w-4xl bg-white p-6 md:p-8 rounded-lg shadow-lg" aria-live="assertive">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">Sign in to MedEase</h1>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full p-4 border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            aria-describedby="email-error"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full p-4 border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            aria-describedby="password-error"
          />
          {error && <p id="login-error" className="text-red-500 mb-4">{error}</p>}
          <button
            type="submit"
            className={`w-full bg-blue-600 text-white py-4 px-6 rounded-md hover:bg-blue-700 transition duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Login'}
          </button>
          <div className="mt-6 space-y-4">
            <button
              onClick={() => handleSignIn('google')}
              aria-label="Log in with Google"
              className="flex items-center justify-center bg-red-600 text-white py-4 px-6 rounded-md w-full hover:bg-red-700 transition duration-300"
              disabled={loading}
            >
              <FontAwesomeIcon icon={faGoogle} className="mr-2" />
              Log in with Google
            </button>
            <button
              onClick={() => handleSignIn('facebook')}
              aria-label="Log in with Facebook"
              className="flex items-center justify-center bg-blue-600 text-white py-4 px-6 rounded-md w-full hover:bg-blue-700 transition duration-300"
              disabled={loading}
            >
              <FontAwesomeIcon icon={faFacebook} className="mr-2" />
              Log in with Facebook
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
