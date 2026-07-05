import { collection, getDocs } from "firebase/firestore"

import { db } from "./firestore"

export async function loadProfiles() {

    const snapshot = await getDocs(collection(db, "profiles"))

    return snapshot.docs.map(
        doc => ({
            firebaseId:
                doc.id,

            ...doc.data()
        })
    )
}