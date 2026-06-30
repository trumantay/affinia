<script setup>

import { useAffiniaStore } from "../stores/affiniaStore"

const store = useAffiniaStore()

</script>

<template>

    <div>

        <h1> Filters </h1>

        <p> <input type="checkbox" v-model="store.filters.sameLocation" /> Same location </p>

        <p> <input type="checkbox" v-model="store.filters.sharedInterests" /> Shared interests </p>

        <p> <input type="checkbox" v-model="store.filters.sharedGoals" /> Shared goals </p>

        <p> Minimum compatibility: {{ store.filters.minimumCompatibility }} </p>
        <input type="range" min="0" max="100" v-model.number="store.filters.minimumCompatibility" />

        <pre> {{ store.filters }} </pre>

    </div>

</template>