import { onAuthStateChanged } from "firebase/auth"

import { auth } from "./auth"

export function listenToAuth(callback) {

    onAuthStateChanged(auth, user => {
        callback(user)
    })
}