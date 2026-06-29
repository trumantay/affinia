// How important is each dimension?

import {
    geographicSimilarity,
    interestSimilarity,
    goalSimilarity,
    personalitySimilarity
}
from "./similarityEngine"

export function calculateCompatibility(
    personA,
    personB,
    weights
) {

    const scores = {

        location:
            geographicSimilarity(personA, personB),

        interests:
            interestSimilarity(personA, personB),

        goals:
            goalSimilarity(personA, personB),

        personality:
            personalitySimilarity(personA, personB)
    }

    const overallScore =

        scores.location
        * weights.location

        +

        scores.interests
        * weights.interests

        +

        scores.goals
        * weights.goals

        +

        scores.personality
        * weights.personality

    return {

    compatibility:
        Math.round(overallScore),

    breakdown: scores
    }
}