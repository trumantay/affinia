// Who are the best matches?

import { calculateCompatibility } from "./scoringEngine"

import { explainMatch } from "./explainabilityEngine"

export function rankProfiles(
    targetProfile,
    profiles,
    weights
) {

    const rankings = profiles

        .filter(
            profile =>
                profile.id !== targetProfile.id
        )

        .map(profile => {

            const result =
                calculateCompatibility(
                    targetProfile,
                    profile,
                    weights
                )

            return {

                profile,

                compatibility:
                    result.compatibility,

                breakdown:
                    result.breakdown,

                explanation:
                    explainMatch(
                        targetProfile,
                        profile,
                        result.breakdown
                    )
            }
        })

        .sort(
            (a, b) =>
                b.compatibility
                -
                a.compatibility
        )

    return rankings
}