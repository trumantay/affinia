<script setup>

import { useAffiniaStore } from "../stores/affiniaStore"

const store = useAffiniaStore()

</script>

<template>

    <div>

        <h1> Affinia </h1>

        <p> Logged in user: {{ store.firebaseUser ? store.firebaseUser.email : "Not logged in" }} </p>

        <router-link to="/login"> Login </router-link>
        
        <br>

        <router-link to="/profile"> Profile </router-link>

        <br>

        <router-link to="/purpose"> Purpose </router-link>

        <br>

        <router-link to="/preferences"> Preferences </router-link>

        <br>

        <router-link to="/filters"> Filters </router-link>
        
        <br>

        <router-link to="/matches"> Matches </router-link>

    </div>

</template>