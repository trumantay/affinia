<script setup>

import { useAffiniaStore } from "../stores/affiniaStore"

const store = useAffiniaStore()

</script>

<template>

    <div>

        <h1> Purpose </h1>

        <select v-model="store.currentPurpose">

            <option value="study"> Study </option>

            <option value="friend"> Friend </option>

            <option value="cofounder"> Co-Founder </option>

            <option value="dating"> Dating </option>

            <option value="hobby"> Hobby </option>

        </select>

        <p> Current: {{ store.currentPurpose }} </p>

    </div>

</template>