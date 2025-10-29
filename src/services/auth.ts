import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import type { LoginFormProps, RegisterFormProps } from "../interfaces";
import { auth } from "@/firebase";
import { saveUserProfile } from "./user-service";
import type { AuthResultType } from "@/types";

export const registerAccount = async (data: RegisterFormProps): Promise<AuthResultType> => {
    const { email, password, name } = data

    let result: AuthResultType = { success: true, message: '', data: {} }

    try {
        await createUserWithEmailAndPassword(auth, email, password)
            .then(async (credential) => await saveUserProfile(credential.user.uid, { email, name }))

        result.data = { email, name }

    } catch (err: any) {

        let errMessage = err.customData._tokenResponse.error.message

        switch (err.code) {
            case 'auth/email-already-in-use':
                errMessage = 'Email is already exists.'
                break;

            default:
                break;
        }

        result.success = false
        result.message = errMessage
    }

    return result
};
export const loginAccount = async ({ email, password }: LoginFormProps): Promise<AuthResultType> => {

    let result: AuthResultType = { success: true, message: '', data: {} }

    try {
        await signInWithEmailAndPassword(auth, email, password)
            .then(async (credential) => {
                // Signed in
                const user = credential.user;
                console.log(user);
            })

    } catch (err: any) {
        console.log(JSON.stringify(err))
        let errMessage = err.message
        result.success = false
        result.message = errMessage
    }

    return result
};