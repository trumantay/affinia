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

listenToAuth(user => { store.firebaseUser = user })

app.mount("#app")
