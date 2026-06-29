// combines everything together

import { filterProfiles } from "./filterEngine"

import { rankProfiles } from "./rankingEngine"

export function findMatches(
    targetProfile,
    profiles,
    weights,
    filters
) {

    const filteredProfiles =
        filterProfiles(
            targetProfile,
            profiles,
            filters
        )

    return rankProfiles(
        targetProfile,
        filteredProfiles,
        weights
    )
}