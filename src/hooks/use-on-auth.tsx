import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import type { UserImplProps } from '@/interfaces/firebaseAuth';

interface useOnAuthStateChangedProps {
    setCurrentUser: (e: UserImplProps | null) => void
    setAuthLoading: (e: boolean) => void
}

export function useOnAuthStateChanged({ setCurrentUser, setAuthLoading }: useOnAuthStateChangedProps) {
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {

            if (user) {
                // Fetch additional data from Firestore using the user's UID
                const userDocRef = doc(db, 'users', user.uid);
                const userDocSnap = await getDoc(userDocRef);

                if (userDocSnap.exists()) {
                    // Combine auth info with firestore info
                    const userDataFromFirestore = userDocSnap.data();
                    const fullUserProfile = {
                        ...user, // Basic auth details
                        ...userDataFromFirestore, // Additional details like phoneNumber
                    };
                    setCurrentUser(fullUserProfile);
                    console.log("Full User Profile:", fullUserProfile);
                } else {
                    // Document does not exist, just use auth data
                    setCurrentUser(user);
                    console.log("User Profile:", user);
                }
            } else {
                setCurrentUser(null);
            }
            setAuthLoading(false);
        });
        return unsubscribe; // Cleanup subscription on unmount
    }, []);
}