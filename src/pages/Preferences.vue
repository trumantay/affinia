<script setup>

import { useAffiniaStore } from "../stores/affiniaStore"

const store = useAffiniaStore()

</script>

<template>

    <div>

        <h1> Preferences </h1>

        <p> Location: {{ store.userWeights.location }} </p>
        <input type="range" min="0" max="5" v-model.number="store.userWeights.location" />
        
        <p> Interests: {{ store.userWeights.interests }} </p>
        <input type="range" min="0" max="5" v-model.number="store.userWeights.interests" />

        <p> Personality: {{ store.userWeights.personality }} </p>
        <input type="range" min="0" max="5" v-model.number="store.userWeights.personality" />

        <p> Goals: {{ store.userWeights.goals }} </p>
        <input type="range" min="0" max="5" v-model.number="store.userWeights.goals" />

        <pre> {{ store.userWeights }} </pre>

    </div>

</template>