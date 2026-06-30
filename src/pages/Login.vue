<script setup>

import { ref } from "vue"

import { login, register } from "../firebase/authService"

const email = ref("")

const password = ref("")

async function doRegister() {

    try {

        const result = await register(email.value, password.value)

        console.log(result.user)

        alert("Registered!")

    }

    catch(error) {

        alert(error.message)
    }
}

async function doLogin() {

    try {

        const result = await login(email.value, password.value)

        console.log(result.user)

        alert("Logged in!")

    }

    catch(error) {

        alert(error.message)
    }
}

</script>

<template>

    <div>

        <h1> Login </h1>

        <p> Email </p>

        <input v-model="email" />

        <p> Password </p>

        <input type="password" v-model="password" />

        <br><br>

        <button @click="doRegister"> Register </button>

        <button @click="doLogin"> Login </button>

    </div>

</template>