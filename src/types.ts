import type { DocumentData } from "firebase/firestore"

export type AuthResultType = {
    success: boolean,
    message: string,
    data: any
}

export type ProjectResultType = DocumentData[]