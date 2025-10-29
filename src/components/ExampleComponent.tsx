// src/components/ExampleComponent.jsx
import type React from 'react';
import { useAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

const ExampleComponent: React.FC = () => {

  const { currentUser } = useAuth() || {};

  console.log(currentUser)
  const handleAddData = async () => {
    if (currentUser) {
      try {
        await addDoc(collection(db, 'users'), {
          uid: currentUser.uid,
          name: 'Jane Doe',
          email: currentUser.email,
        });
        alert('Data added to Firestore!');
      } catch (e) {
        console.error('Error adding document: ', e);
      }
    }
  };

  return (
    <div>
      {currentUser ? (
        <>
          <p>Logged in as: {currentUser.email}</p>
          <button onClick={handleAddData}>Add user data to Firestore</button>
        </>
      ) : (
        <p>You are not logged in.</p>
      )}
      <button onClick={handleAddData}>Add user data to Firestore</button>
    </div>
  );
};

export default ExampleComponent;