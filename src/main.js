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

    await store.loadProfiles()

    // console.log(store.allProfiles)

    console.log(JSON.stringify(store.allProfiles, null, 2))
})

app.mount("#app")
