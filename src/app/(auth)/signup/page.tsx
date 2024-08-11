'use client';

import Image from 'next/image';
import { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile, signInWithPopup } from 'firebase/auth';
import { auth, db, googleProvider, facebookProvider } from '@/firebaseConfig';
import { doc, setDoc } from 'firebase/firestore';
import { useRouter } from 'next/navigation';

const SignUpPage: React.FC = () => {
  const [surname, setSurname] = useState("");
  const [firstName, setFirstName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, {
        displayName: `${firstName} ${surname}`,
        photoURL: gender // Example; adjust as needed
      });

      // Store additional user data in Firestore
      await setDoc(doc(db, "users", userCredential.user.uid), {
        firstName,
        surname,
        phoneNumber,
        gender,
      });

      router.push("/search"); // Redirect after successful sign up
    } catch (error) {
      if (error instanceof Error) {
        if (error.code === 'auth/email-already-in-use') {
          setError("This email address is already in use. Please use a different email.");
        } else {
          setError("Failed to sign up. Please try again.");
        }
      } else {
        setError("Failed to sign up. Please try again.");
      }
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      router.push("/search"); // Redirect after successful sign in
    } catch (error) {
      setError("Failed to sign in with Google.");
    }
  };

  const handleFacebookSignIn = async () => {
    try {
      await signInWithPopup(auth, facebookProvider);
      router.push("/search"); // Redirect after successful sign in
    } catch (error) {
      setError("Failed to sign in with Facebook.");
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-1/2 relative">
        <Image
          src="/assets/images/Sign-up.png"
          alt="Sign Up Image"
          layout="fill"
          objectFit="contain"
          className="absolute inset-0"
        />
      </div>
      <div className="w-1/2 flex items-center justify-center p-8">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
          <h1 className="text-4xl font-semibold text-gray-800 mb-6">Create an Account</h1>
          <form onSubmit={handleSignUp} className="space-y-6">
            <input
              type="text"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              placeholder="Surname"
              className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
              className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Phone Number (optional)"
              className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
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
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <button
              type="submit"
              className="bg-blue-600 text-white py-3 px-6 rounded-lg w-full hover:bg-blue-700 transition duration-300"
            >
              Sign Up
            </button>
          </form>
          <div className="mt-6 space-y-4">
            <button
              onClick={handleGoogleSignIn}
              className="flex items-center justify-center bg-red-500 text-white py-3 px-6 rounded-lg w-full hover:bg-red-600 transition duration-300"
            >
              <Image src="/assets/images/google-logo.bmp" alt="Google" width={24} height={24} className="mr-2" />
              Sign Up with Google
            </button>
            <button
              onClick={handleFacebookSignIn}
              className="flex items-center justify-center bg-blue-700 text-white py-3 px-6 rounded-lg w-full hover:bg-blue-800 transition duration-300"
            >
              <Image src="/assets/images/facebook-logo.png" alt="Facebook" width={24} height={24} className="mr-2" />
              Sign Up with Facebook
            </button>
            <p className="text-center mt-4">
              Already have an account?{" "}
              <a href="/login" className="text-blue-600 hover:underline">Login here</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
