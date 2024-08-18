'use client';

import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider, facebookProvider } from '@firebaseConfig/index'; // Adjust paths as needed
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@firebaseConfig/index'; // Adjust paths as needed
import { useRouter } from 'next/navigation'; // Ensure this import is correct for your Next.js version

const useSignIn = () => {
  const router = useRouter();

  const handleSignIn = async (provider: 'google' | 'facebook') => {
    try {
      const result = await signInWithPopup(auth, provider === 'google' ? googleProvider : facebookProvider);
      const user = result.user;
      console.log('Signed in user:', user);

      // Get the user's role from Firestore
      const userDocRef = doc(db, 'users', user.uid);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        const userData = userDoc.data();
        console.log('User data:', userData);
        const role = userData?.role;

        // Redirect based on user role
        if (role === 'admin') {
          router.push('/admin');
        } else {
          router.push('/search');
        }
      } else {
        console.error('No such user document!');
        // Optionally, redirect to an error page or display a message
      }
    } catch (error) {
      console.error('Error during sign-in:', error);
      // Optionally, handle specific error cases or provide user feedback
    }
  };

  return { handleSignIn };
};

export default useSignIn;
