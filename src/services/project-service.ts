import { PROJECTS } from "@/contants/collections";
import { faker } from "@faker-js/faker";
import { db } from "@/firebase";
import { timestamp } from "@/libs/utils";
import { addDoc, collection, deleteDoc, doc, getDocs, orderBy, query, where, type DocumentData } from "firebase/firestore";

export async function createProject(uuid: string, name: string) {
    const projectRef = collection(db, PROJECTS);
    for (let index = 0; index < 99; index++) {
        await addDoc(projectRef, {
            name: faker.company.name(),
            ownerId: uuid,
            ...timestamp
        });
    }
    return await addDoc(projectRef, {
        name: name,
        ownerId: uuid,
        ...timestamp
    });

}

export async function getProjectByUserId(uuid: string): Promise<DocumentData[]> {
    const projectRef = collection(db, PROJECTS);
    const q = query(
        projectRef,
        where("ownerId", "==", uuid)
    );

    const querySnap = await getDocs(q);

    if (!querySnap.empty) {
        return querySnap.docs.map(e => {
            return {
                uid: e.id,
                ...e.data()
            }
        })
    } else {
        console.log("No such document!");
        return [];
    }
}

export async function deleteProject(uuid: string): Promise<boolean> {
    if (!uuid) return false;

    const projectRef = doc(db, PROJECTS, uuid);
    try {
        // Delete the document
        await deleteDoc(projectRef);
        console.log("Document successfully deleted!");
        return true
    } catch (error) {
        console.error("Error removing document: ", error);
        return false
    }
}
