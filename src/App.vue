<script setup>

import { sampleProfiles }
from "./data/sampleProfiles"

import { studyWeights }
from "./applications/studyMatch"

import { findMatches }
from "./engine/matchingEngine"

const me = sampleProfiles[0]

const matches =
    findMatches(
        me,
        sampleProfiles,
        studyWeights
    )

console.log(matches)

</script>

<template>

    <div>

        <h1>Affinia</h1>

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