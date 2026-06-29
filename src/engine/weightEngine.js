// How do user preferences modify matching priorities?

export function generateWeights(
    baseWeights,
    userWeights
) {

    const adjusted = {}

    let total = 0

    for (const key in baseWeights) {

        adjusted[key] =
            baseWeights[key]
            *
            userWeights[key]

        total += adjusted[key]
    }

    const normalized = {}

    for (const key in adjusted) {

        normalized[key] =
            adjusted[key]
            /
            total
    }

    return normalized
}