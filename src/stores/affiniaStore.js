import { defineStore } from "pinia"

import { computed } from "vue"

import { sampleProfiles } from "../data/sampleProfiles"

import { generateWeights } from "../engine/weightEngine"

import { findMatches } from "../engine/matchingEngine"

import { MATCHING_PROFILES } from "../applications/matchingProfiles"

import { loadProfiles as fetchProfiles } from "../firebase/matchingService"

export const useAffiniaStore =

    defineStore("affinia", {

            state: () => ({

                firebaseUser: null,

                allProfiles: [],

                currentUser: structuredClone(sampleProfiles[0]),

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
                }
            }
        }
    )