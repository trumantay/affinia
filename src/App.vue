<script setup>

import { reactive, computed } from "vue"

/* CONFIGURATION */
import { MATCHING_PROFILES } from "./applications/matchingProfiles"

import { ACTIVE_FILTERS } from "./config/filters"

/* DATA */
import { sampleProfiles } from "./data/sampleProfiles"

/* ENGINES */
import { generateWeights } from "./engine/weightEngine"

import { findMatches } from "./engine/matchingEngine"


const me = sampleProfiles[0]

const currentPurpose = "study"

const userWeights = reactive({

    location: 1,

    interests: 1,

    personality: 1,

    goals: 1
})

const finalWeights = computed(() =>

    generateWeights(
        MATCHING_PROFILES[currentPurpose],
        userWeights
    )

)

const matches = computed(() =>

    findMatches(
        me,
        sampleProfiles,
        finalWeights.value,
        ACTIVE_FILTERS
    )

)

console.log(matches)

</script>

<template>

    <div>

        <h1>Affinia</h1>
          <p> Purpose: {{ currentPurpose }} </p>

          <h3> Your Priorities </h3>

          <p> Location: {{ userWeights.location }} </p>
          <input type="range" min="0" max="5" v-model="userWeights.location"/>

          <p> Interests: {{ userWeights.interests }} </p>
          <input type="range" min="0" max="5" v-model="userWeights.interests"/>

          <p> Personality: {{ userWeights.personality }} </p>
          <input type="range" min="0" max="5" v-model="userWeights.personality"/>

          <p> Goals: {{ userWeights.goals }} </p>
          <input type="range" min="0" max="5" v-model="userWeights.goals"/>
          
          <pre>
            {{ userWeights }}
          </pre>
          <pre>
            {{ finalWeights }}
          </pre>

        <h2>
            Matches for {{ me.name }}
        </h2>

        <div
            v-for="match in matches"
            :key="match.profile.id"
        >

            <h3>
                {{ match.profile.name }}
            </h3>

            <p>
              Compatibility:
              {{ match.compatibility }}%
            </p>
            <h4>
              Why?
            </h4>
            
            <ul>
                <li
                    v-for="reason in match.explanation"
                    :key="reason"
                >
                    {{ reason }}
                </li>
            </ul>

            <pre>
              {{ match.breakdown }}
            </pre>

        </div>

    </div>

</template>