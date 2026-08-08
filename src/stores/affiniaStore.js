import { defineStore } from "pinia"

import { computed } from "vue"

import { generateWeights } from "../engine/weightEngine"

import { findMatches } from "../engine/matchingEngine"

import { MATCHING_PROFILES } from "../applications/matchingProfiles"

import { loadProfiles as fetchProfiles } from "../firebase/matchingService"

import { loadProfile } from "../firebase/profileService"

export const useAffiniaStore =

    defineStore("affinia", {

            state: () => ({

                firebaseUser: null,

                allProfiles: [],

                currentUser: {
                    name: "",
                    location: {
                        area: "",
                        travelRadius: 5
                    },
                    personality: {
                        introversion: 5,
                        conscientiousness: 5,
                        openness: 5
                    },
                    interests: [],
                    goals: [],
                    telegram: "",
                    linkedin: "",
                    preferences: {
                        studyStyle: ""
                    }
                },

                currentPurpose: "study",

                userWeights: {

                    location: 1,

                    interests: 1,

                    personality: 1,

                    goals: 1
                },

                filters: {

                    sameLocation: true,

                    sharedInterests: true,

                    sharedGoals: true,

                    minimumCompatibility: 0
                }
            }),
            getters: {
                matches(state) {
                    const weights = generateWeights(MATCHING_PROFILES[state.currentPurpose], state.userWeights)

                    console.log("CURRENT USER:", state.currentUser)
                    console.log("ALL PROFILES:", state.allProfiles)
                    console.log("FILTERS:", state.filters)

                    return findMatches(

                        state.currentUser,

                        state.allProfiles,

                        weights,

                        state.filters
                    )
                }
            },

            actions: {

                async loadProfiles() {

                    this.allProfiles = await fetchProfiles()
                },

                async loadCurrentUser() {
                    console.log("loadCurrentUser called")

                    if (!this.firebaseUser) {
                        console.log("No firebase user")
                        return
                    }

                    const profile = await loadProfile(this.firebaseUser.uid)

                    console.log("Loaded profile:", profile)

                    if (profile) {

                        this.currentUser = profile
                    }
                }
            }
        }
    )