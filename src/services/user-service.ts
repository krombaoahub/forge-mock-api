import { db } from "@/firebase";
import type { SaveUserProfileProps } from "@/interfaces";
import { timestamp } from "@/libs/utils";
import { doc, setDoc } from "firebase/firestore";

export async function saveUserProfile(uid: string, userData: SaveUserProfileProps) {
    const userRef = doc(db, "users", uid);
    
    return await setDoc(userRef, {
        displayName: userData.name,
        email: userData.email,
        phoneNumber: userData.phoneNumber || null,
        photoURL: userData.photoURL || null,
        ...timestamp
    }, { merge: true });
}
