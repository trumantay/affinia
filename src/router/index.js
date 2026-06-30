import { createRouter, createWebHistory } from "vue-router"

import Landing from "../pages/Landing.vue"

import Login from "../pages/Login.vue"

import Profile from "../pages/Profile.vue"

import Purpose from "../pages/Purpose.vue"

import Preferences from "../pages/Preferences.vue"

import Filters from "../pages/Filters.vue"

import Matches from "../pages/Matches.vue"

const routes = [

    {
        path: "/",
        component: Landing
    },

    {
        path: "/login",
        component: Login
    },

    {
        path: "/profile",
        component: Profile
    },

    {
        path: "/purpose",
        component: Purpose
    },

    {
        path: "/preferences",
        component: Preferences
    },

    {
        path: "/filters",
        component: Filters
    },

    {
        path: "/matches",
        component: Matches
    }
]

const router =
    createRouter({

        history:
            createWebHistory(),

        routes
    })

export default router