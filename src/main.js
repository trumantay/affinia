import { createApp } from "vue"
import { createPinia } from "pinia"
import App from "./App.vue"
import router from "./router"
import { useAffiniaStore } from "./stores/affiniaStore"
import { listenToAuth } from "./firebase/authState"

const app = createApp(App)

const pinia = createPinia()

app.use(pinia)

app.use(router)

const store = useAffiniaStore()

listenToAuth(async user => {
    store.firebaseUser = user

    if (user) {
        await store.loadCurrentUser()
        await store.loadProfiles()

        console.log("Current user:", JSON.stringify(store.currentUser, null, 2))
        console.log("All profiles:", JSON.stringify(store.allProfiles, null, 2))
    }
})

app.mount("#app")
