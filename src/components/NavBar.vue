<script setup>
import { useRouter } from "vue-router"
import { signOut } from "firebase/auth"
import { auth } from "../firebase/auth"

const router = useRouter()

async function logout() {
    await signOut(auth)
    router.push("/login")
}
</script>

<template>
    <nav class="navbar">
        <router-link to="/" class="logo"> Affinia </router-link>

        <div class="nav-links">
            <router-link to="/"> Home </router-link>
            <button @click="logout"> Logout </button>
        </div>
    </nav>
</template>

<style scoped>
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 32px;
    border-bottom: 1px solid #e5e7eb;
    background: white;
}

.logo {
    font-size: 22px;
    font-weight: bold;
}

.nav-links {
    display: flex;
    align-items: center;
    gap: 20px;
}

.nav-links a {
    text-decoration: none;
    color: #374151;
    font-weight: 500;
}

button {
    padding: 8px 14px;
    border: none;
    background: #2563eb;
    color: white;
    border-radius: 6px;
    cursor: pointer;
}

button:hover {
    background: #1d4ed8;
}
</style>