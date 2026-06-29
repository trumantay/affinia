// combines everything together

import { rankProfiles }
from "./rankingEngine"

export function findMatches(
    targetProfile,
    profiles,
    weights
) {

    return rankProfiles(
        targetProfile,
        profiles,
        weights
    )

}