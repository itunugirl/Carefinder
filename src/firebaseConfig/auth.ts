// src/firebaseConfig/auth.ts
import { auth, googleProvider, facebookProvider, db } from './index'; // Make sure db is imported from the correct file
import { signInWithPopup } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { useRouter } from 'next/navigation'; // Import from 'next/navigation'

const handleSignIn = async (provider: 'google' | 'facebook', router: ReturnType<typeof useRouter>) => {
  try {
    const result = await signInWithPopup(auth, provider === 'google' ? googleProvider : facebookProvider);
    const user = result.user;

    // Get the user's role from Firestore
    const userDocRef = doc(db, 'users', user.uid);
    const userDoc = await getDoc(userDocRef);

    if (userDoc.exists()) {
      const userData = userDoc.data();
      const role = userData?.role;

      // Redirect based on user role
      if (role === 'admin') {
        router.push('/admin');
      } else {
        router.push('/search');
      }
    } else {
      console.error('No such user document!');
    }
  } catch (error) {
    console.error('Error during sign-in:', error);
  }
};

export { handleSignIn };
