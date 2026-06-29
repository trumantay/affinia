// Who are the best matches?

import { calculateCompatibility }
from "./scoringEngine"

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
                    result.overall,

                breakdown:
                    result.breakdown
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