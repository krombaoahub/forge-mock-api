// src/components/Profile.tsx
import React from 'react';
import { useAuth } from '../context/AuthContext';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

const Profile: React.FC = () => {
  // Use the custom useAuth hook to get the current user
  const { currentUser } = useAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  return (
    <div>
      {/* Check if currentUser exists before rendering */}
      {currentUser ? (
        <>
          <h2>Welcome, {currentUser.email}!</h2>
          <button onClick={handleLogout}>Log Out</button>
        </>
      ) : (
        <p>You are not logged in.</p>
      )}
    </div>
  );
};

export default Profile;
