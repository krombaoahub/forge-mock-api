import { db } from "@/firebase";
import type { SaveUserProfileProps } from "@/interfaces";
import { doc, setDoc } from "firebase/firestore";

export async function saveUserProfile(uid: string, userData: SaveUserProfileProps) {
    const userRef = doc(db, "users", uid);
    await setDoc(userRef, {
        displayName: userData.name,
        email: userData.email,
        phoneNumber: userData.phoneNumber || null,
        photoURL: userData.photoURL || null
    }, { merge: true });
}
