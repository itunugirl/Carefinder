'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile, sendEmailVerification, signInWithPopup } from 'firebase/auth';
import { auth, db, googleProvider, facebookProvider } from '@firebaseConfig';
import { doc, setDoc } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import { FirebaseError } from 'firebase/app';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';

const SignUpPage: React.FC = () => {
  const [surname, setSurname] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false); 
  const router = useRouter();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }
    
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    
    const phoneRegex = /^[0-9]*$/;
    if (phoneNumber && !phoneRegex.test(phoneNumber)) {
      setError("Phone number can only contain numbers.");
      return;
    }

    setLoading(true); 
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, {
        displayName: `${firstName} ${surname}`,
        photoURL: gender 
      });

      await setDoc(doc(db, "users", userCredential.user.uid), {
        firstName,
        surname,
        phoneNumber,
        gender,
      });

      await sendEmailVerification(userCredential.user); 

      router.push("/login"); 
    } catch (error) {
      console.error("Sign up error:", error); 
      if (error instanceof FirebaseError) {
        switch (error.code) {
          case 'auth/email-already-in-use':
            setError("This email address is already in use. Please use a different email.");
            break;
          case 'auth/invalid-email':
            setError("Invalid email address.");
            break;
          case 'auth/weak-password':
            setError("Password should be at least 6 characters.");
            break;
          default:
            setError("Failed to sign up. Please try again.");
        }
      } else {
        setError("Failed to sign up. Please try again.");
      }
    } finally {
      setLoading(false); 
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      router.push("/search");
    } catch (error) {
      setError("Failed to sign in with Google.");
    }
  };

  const handleFacebookSignIn = async () => {
    try {
      await signInWithPopup(auth, facebookProvider);
      router.push("/search");
    } catch (error) {
      setError("Failed to sign in with Facebook.");
    }
  };

  const togglePasswordVisibility = () => setPasswordVisible(prev => !prev);

  return (
    <div className="flex min-h-screen bg-blue-gradient md:bg-gray-100">
      <div className="relative flex-1 hidden md:block">
        <div className="relative w-full h-full">
          <Image 
            src="/assets/images/Sign-up.png" 
            alt="Sign Up Image"
            fill
            style={{ objectFit: 'contain' }}
            className="absolute inset-0"
          />
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-4 md:p-8">
        <form onSubmit={handleSignUp} className="space-y-6 w-full max-w-md md:max-w-4xl bg-white p-6 md:p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">Create an Account</h1>
          <input
            type="text"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            placeholder="Surname"
            className="w-full p-4 border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
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
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Phone Number (optional)"
            className="w-full p-4 border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="relative">
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="appearance-none w-full p-4 border border-gray-300 rounded-md text-gray-600 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" className="text-gray-600">Select Gender</option>
              <option value="Male" className="text-gray-600">Male</option>
              <option value="Female" className="text-gray-600">Female</option>
              <option value="Other" className="text-gray-600">Other</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>
          <div className="relative">
            <input
              type={passwordVisible ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full p-4 border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
              aria-label={passwordVisible ? "Hide password" : "Show password"}
            >
              {passwordVisible ? "Hide" : "Show"}
            </button>
          </div>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            className="w-full p-4 border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-4 px-6 text-white bg-blue-600 rounded-md text-lg font-semibold ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"}`}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
          <div className="text-center text-gray-600">
            <p>Already have an account? <a href="/login" className="text-blue-500 hover:underline">Log in</a></p>
          </div>
          <div className="flex justify-center space-x-4 mt-4">
            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="flex items-center justify-center p-2 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
            >
              <FontAwesomeIcon icon={faGoogle} className="text-blue-500 w-6 h-6" />
            </button>
            <button
              type="button"
              onClick={handleFacebookSignIn}
              className="flex items-center justify-center p-2 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
            >
              <FontAwesomeIcon icon={faFacebook} className="text-blue-700 w-6 h-6" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
