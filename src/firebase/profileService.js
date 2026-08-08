import { doc, setDoc, getDoc } from "firebase/firestore"

import { db } from "./firestore"

export async function saveProfile(userId, profile) {

    await setDoc(

        doc(
            db,
            "profiles",
            userId
        ),

        profile
    )
}

export async function loadProfile(userId) {

    const snapshot = await getDoc(doc(db, "profiles", userId))

    if (snapshot.exists()) {

        return {

            firebaseId: snapshot.id,

            ...snapshot.data()
        }
    }

    return null
}
