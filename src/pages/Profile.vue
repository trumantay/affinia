<script setup>

import { ref } from "vue"
import { useRouter } from "vue-router"
import { useAffiniaStore } from "../stores/affiniaStore"
import { saveProfile } from "../firebase/profileService"

const router = useRouter()
const saveMessage = ref("")
const store = useAffiniaStore()

const availableInterests = [

    "AI",

    "Gaming",

    "Startups",

    "Finance",

    "Fitness",

    "Research"
]

const availableGoals = [

    "academic_success",

    "entrepreneurship",

    "friendship",

    "networking"
]

async function saveCurrentProfile() {

    if (!store.firebaseUser) {
        return
    }

    await saveProfile(store.firebaseUser.uid, store.currentUser)

    saveMessage.value = "Profile saved successfully"

    setTimeout(() => {

        saveMessage.value = ""

        router.push("/")

    }, 1200)
}

function goBack() {
    router.push("/")
}

function goNext() {
    router.push("/matching")
}

</script>

<template>

    <div>

        <h1> Profile </h1>

        <p> Name </p>

        <input v-model="store.currentUser.name" />

        <h2> Contact </h2>
        <p> Telegram </p>
        <input v-model="store.currentUser.telegram" placeholder="@username" />
        <p> LinkedIn </p>
        <input v-model="store.currentUser.linkedin" placeholder="https://linkedin.com/in/..." />

        <p> Location </p>
        <input v-model="store.currentUser.location.area" />

        <h2> Interests </h2>
        <div v-for="interest in availableInterests" :key="interest" >
            <input type="checkbox" :value="interest" v-model="store.currentUser.interests" > {{ interest }}
        </div>

        <h2> Goals </h2>
        <div v-for="goal in availableGoals" :key="goal" >
            <input type="checkbox" :value="goal" v-model="store.currentUser.goals" > {{ goal }}
        </div>

        <p> Introversion </p>
        <input type="range" min="0" max="10" v-model.number="store.currentUser.personality.introversion" />
        <p> {{ store.currentUser.personality.introversion }} </p>

        <p> Conscientiousness </p>
        <input type="range" min="0" max="10" v-model.number="store.currentUser.personality.conscientiousness" />
        <p> {{ store.currentUser.personality.conscientiousness }} </p>

        <p> Openness </p>
        <input type="range" min="0" max="10" v-model.number="store.currentUser.personality.openness" />
        <p> {{ store.currentUser.personality.openness }} </p>

        <p v-if="saveMessage" class="save-message"> {{ saveMessage }} </p>
        <div class="workflow-actions">

            <button class="secondary" @click="goBack"> Previous </button>

            <div class="right-actions">

                <button class="secondary" @click="saveCurrentProfile"> Save Profile </button>

                <button @click="goNext"> Next </button>

            </div>

        </div>

    </div>

    <pre> {{ store.currentUser }} </pre>

</template>

<style scoped>
.save-message {
    margin-top: 20px;
    color: #047857;
    font-weight: 600;
}

.workflow-actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 32px;
}

.right-actions {
    display: flex;
    gap: 12px;
}

.secondary {
    background: #6b7280;
}
</style>