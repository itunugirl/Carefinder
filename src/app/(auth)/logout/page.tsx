// src/app/logout/page.tsx
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { signOut } from 'firebase/auth';
import { auth } from '@firebaseConfig/index'; // Adjust the import based on your actual path

const LogoutPage: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const handleLogout = async () => {
      try {
        await signOut(auth);
        router.push('/login'); // Redirect to login page after logout
      } catch (error) {
        console.error('Sign out error:', error);
        // Handle the error, maybe show a message to the user
      }
    };

    handleLogout();
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <p className="text-lg text-gray-700">Logging out...</p>
    </div>
  );
};

export default LogoutPage;
