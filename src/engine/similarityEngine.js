// How similar are two humans?

export function locationSimilarity(personA, personB) {

    if (personA.location.area === personB.location.area) {
        return 100
    }

    return 50
}

export function interestSimilarity(personA, personB) {

    const shared = personA.interests.filter(
        interest => personB.interests.includes(interest)
    )

    const total = new Set([
        ...personA.interests,
        ...personB.interests
    ])

    return Math.round(
        (shared.length / total.size) * 100
    )
}

export function goalSimilarity(personA, personB) {

    const shared = personA.goals.filter(
        goal => personB.goals.includes(goal)
    )

    const total = new Set([
        ...personA.goals,
        ...personB.goals
    ])

    return Math.round(
        (shared.length / total.size) * 100
    )
}

export function personalitySimilarity(personA, personB) {

    const traits = [
        "introversion",
        "conscientiousness",
        "openness"
    ]

    let totalSimilarity = 0

    traits.forEach(trait => {

        const difference =
            Math.abs(
                personA.personality[trait]
                -
                personB.personality[trait]
            )

        const similarity =
            100 - (difference * 10)

        totalSimilarity += similarity
    })

    return Math.round(
        totalSimilarity / traits.length
    )
}