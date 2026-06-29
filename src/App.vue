<script setup>

import { reactive, computed, ref } from "vue"

/* CONFIGURATION */
import { MATCHING_PROFILES } from "./applications/matchingProfiles"

import { ACTIVE_FILTERS } from "./config/filters"

/* DATA */
import { sampleProfiles } from "./data/sampleProfiles"

/* ENGINES */
import { generateWeights } from "./engine/weightEngine"

import { findMatches } from "./engine/matchingEngine"


const me = ref({

    ...sampleProfiles[0]
})

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
        me.value,
        sampleProfiles,
        finalWeights.value,
        ACTIVE_FILTERS
    )

)

console.log(matches.value)

</script>

<template>

    <div>

        <h1>Affinia</h1>

        <h2> Your Profile </h2>

        <p> Name </p>
        <input v-model="me.name"/>

        <p> Location </p>
        <input v-model="me.location.area"/>

        <p> Introversion: {{ me.personality.introversion }} </p>
        <input type="range" min="0" max="10" v-model.number="me.personality.introversion"/>

        <p> Conscientiousness: {{ me.personality.conscientiousness }} </p>
        <input type="range" min="0" max="10" v-model.number="me.personality.conscientiousness"/>

        <p> Openness: {{ me.personality.openness }} </p>
        <input type="range" min="0" max="10" v-model.number="me.personality.openness"/>

        <p> Purpose: {{ currentPurpose }} </p>

        <h3> Your Priorities </h3>

        <p> Location: {{ userWeights.location }} </p>
        <input type="range" min="0" max="5" v-model.number="userWeights.location"/>

        <p> Interests: {{ userWeights.interests }} </p>
        <input type="range" min="0" max="5" v-model.number="userWeights.interests"/>

        <p> Personality: {{ userWeights.personality }} </p>
        <input type="range" min="0" max="5" v-model.number="userWeights.personality"/>

        <p> Goals: {{ userWeights.goals }} </p>
        <input type="range" min="0" max="5" v-model.number="userWeights.goals"/>
        
        <pre> {{ userWeights }} </pre>
        <pre> {{ finalWeights }} </pre>

        <h2> Matches for {{ me.name }} </h2>

        <div v-for="match in matches" :key="match.profile.id">

          <h3> {{ match.profile.name }} </h3>

          <p> Compatibility: {{ match.compatibility }}% </p>
          
          <h4> Why? </h4>
          
          <ul>
              <li v-for="reason in match.explanation" :key="reason">
                {{ reason }}
              </li>
          </ul>

          <pre> {{ match.breakdown }} </pre>

        </div>

    </div>

</template>