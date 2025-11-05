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
        const unsubscribe = onAuthStateChanged(auth, async (user: any) => {

            if (user) {
                const userDocRef = doc(db, 'users', user.uid);
                const userDocSnap = await getDoc(userDocRef);

                if (userDocSnap.exists()) {

                    const userDataFromFirestore = userDocSnap.data();

                    const fullUserProfile = {
                        ...user.reloadUserInfo,
                        ...userDataFromFirestore,
                    };
                    console.log('Full user profile from Firestore:', fullUserProfile);
                    setCurrentUser(fullUserProfile);
                } else {
                    console.log('User profile from Firestore:', user);
                    setCurrentUser(user);
                }
            } else {
                setCurrentUser(null);
            }
            setAuthLoading(false);
        });
        return unsubscribe;
    }, []);
}