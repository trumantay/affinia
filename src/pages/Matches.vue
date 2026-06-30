<script setup>

import { useAffiniaStore } from "../stores/affiniaStore"

const store = useAffiniaStore()

</script>

<template>

    <div>

        <h1> Matches </h1>

        <h2> For {{ store.currentUser.name }} </h2>

        <div v-for="match in store.matches" :key="match.profile.id">

            <h3> {{ match.profile.name }} </h3>

            <p> Compatibility: {{ match.compatibility }}% </p>

            <h4> Why? </h4>

            <ul>

                <li

                    v-for="
                        reason
                        in
                        match.explanation
                    "

                    :key="reason"

                >

                    {{ reason }}

                </li>

            </ul>

            <pre> {{ match.breakdown }} </pre>

            <hr>

        </div>

    </div>

</template>