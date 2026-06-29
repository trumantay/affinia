<script setup>

/* CONFIGURATION */
import { MATCHING_PROFILES } from "./applications/matchingProfiles"

import { USER_WEIGHTS } from "./config/userWeights"

import { ACTIVE_FILTERS } from "./config/filters"

/* DATA */
import { sampleProfiles } from "./data/sampleProfiles"

/* ENGINES */
import { generateWeights } from "./engine/weightEngine"

import { findMatches } from "./engine/matchingEngine"


const me = sampleProfiles[0]

const currentPurpose = "study"

const finalWeights =
    generateWeights(
        MATCHING_PROFILES[currentPurpose],
        USER_WEIGHTS
    )

const matches =
    findMatches(
        me,
        sampleProfiles,
        finalWeights,
        ACTIVE_FILTERS
    )

console.log(matches)

</script>

<template>

    <div>

        <h1>Affinia</h1>
          <p>
            Purpose:
            {{ currentPurpose }}
          </p>
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

            <pre>
{{ match.breakdown }}
            </pre>

        </div>

    </div>

</template>