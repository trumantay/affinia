<script setup>

import { useAffiniaStore } from "../stores/affiniaStore"

import { saveProfile } from "../firebase/profileService"

const store = useAffiniaStore()

async function save() {

    if (
        !store.firebaseUser
    ) {
        return
    }

    await saveProfile(

        store.firebaseUser.uid,

        store.currentUser
    )

    alert(
        "Saved!"
    )
}

</script>

<template>

    <div>

        <h1> Profile </h1>

        <p> Name </p>

        <input v-model="store.currentUser.name" />

        <p> Location </p>
        <input v-model="store.currentUser.location.area" />

        <p> Introversion </p>
        <input type="range" min="0" max="10" v-model.number="store.currentUser.personality.introversion" />
        <p> {{ store.currentUser.personality.introversion }} </p>

        <p> Conscientiousness </p>
        <input type="range" min="0" max="10" v-model.number="store.currentUser.personality.conscientiousness" />
        <p> {{ store.currentUser.personality.conscientiousness }} </p>

        <p> Openness </p>
        <input type="range" min="0" max="10" v-model.number="store.currentUser.personality.openness" />
        <p> {{ store.currentUser.personality.openness }} </p>

        <button @click="save" > Save Profile </button>

    </div>

    <pre> {{ store.currentUser }} </pre>

</template>