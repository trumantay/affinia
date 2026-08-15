<script setup>
import { useRoute } from "vue-router"
import { useAffiniaStore } from "./stores/affiniaStore"
import NavBar from "./components/NavBar.vue"

const route = useRoute()
const store = useAffiniaStore()
</script>

<template>
    <div>
        <NavBar v-if="store.firebaseUser && route.path !== '/login'" />

        <router-view />
    </div>
</template>