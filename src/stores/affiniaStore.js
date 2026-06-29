import { defineStore } from "pinia"

import { sampleProfiles } from "../data/sampleProfiles"

export const useAffiniaStore =

    defineStore(
        "affinia",

        {

            state: () => ({

                currentUser:

                    structuredClone(
                        sampleProfiles[0]
                    ),

                currentPurpose:
                    "study",

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
                },

                matches: []
            })
        }
    )