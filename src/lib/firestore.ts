// src/lib/firestore.ts
import { db } from '@/firebaseConfig'; // Ensure the correct import path
import { doc, getDoc } from 'firebase/firestore';

export const getUserRole = async (userId: string): Promise<string> => {
  try {
    const userDoc = doc(db, 'users', userId); // Adjust collection name as needed
    const docSnap = await getDoc(userDoc);

    if (docSnap.exists()) {
      const data = docSnap.data();
      return data.role || 'user'; // Default to 'user' if role is not found
    } else {
      throw new Error('No such document!');
    }
  } catch (error) {
    console.error('Error getting user role:', error);
    return 'user'; // Default to 'user' in case of error
  }
};
