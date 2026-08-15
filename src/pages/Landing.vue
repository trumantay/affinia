<script setup>
import { useRouter } from "vue-router"
import { useAffiniaStore } from "../stores/affiniaStore"

const router = useRouter()
const store = useAffiniaStore()

function goToProfile() {
    router.push("/profile")
}

function goToMatching() {
    router.push("/matching")
}

function goToMatches() {
    router.push("/matches")
}
</script>

<template>
    <div class="dashboard">

        <h1> Welcome back, {{ store.currentUser.name || "User" }} </h1>

        <p class="email"> Signed in as {{ store.firebaseUser?.email }} </p>

        <div class="summary-card">
            <h2> Current Profile </h2>

            <p><strong> Name: </strong> {{ store.currentUser.name }} </p>

            <p><strong> Location: </strong> {{ store.currentUser.location.area }} </p>

            <p><strong> Purpose: </strong> {{ store.currentPurpose }} </p>

            <p><strong> Available profiles: </strong> {{ store.allProfiles.length }} </p>
        </div>

        <h2> Quick Actions </h2>

        <div class="actions">

            <button @click="goToProfile"> Edit Profile </button>

            <button @click="goToMatching"> Configure Matching Setup </button>

        </div>

    </div>
</template>

<style scoped>
.dashboard {
    max-width: 900px;
    margin: 40px auto;
    padding: 0 20px;
}

.email {
    color: #6b7280;
    margin-bottom: 24px;
}

.summary-card {
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    padding: 20px;
    background: #fafafa;
    margin-bottom: 32px;
}

.summary-card p {
    margin: 10px 0;
}

.actions {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
}

button {
    padding: 12px 18px;
    border: none;
    background: #2563eb;
    color: white;
    border-radius: 8px;
    cursor: pointer;
    font-size: 15px;
}

button:hover {
    background: #1d4ed8;
}
</style>