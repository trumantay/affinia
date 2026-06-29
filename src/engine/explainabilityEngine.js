// Why did these two people match?

export function explainMatch(
    profileA,
    profileB,
    breakdown
) {

    const explanations = []

    // Location
    if (
        profileA.location.area ===
        profileB.location.area
    ) {
        explanations.push(
            "Same geographical area"
        )
    }

    // Interests
    const sharedInterests =
        profileA.interests.filter(
            interest =>
                profileB.interests.includes(
                    interest
                )
        )

    if (sharedInterests.length > 0) {
        explanations.push(
            `Shared interests: ${sharedInterests.join(", ")}`
        )
    }

    // Goals
    const sharedGoals =
        profileA.goals.filter(
            goal =>
                profileB.goals.includes(goal)
        )

    if (sharedGoals.length > 0) {
        explanations.push(
            `Shared goals: ${sharedGoals.join(", ")}`
        )
    }

    // Personality
    if (
        breakdown.personality >= 75
    ) {
        explanations.push(
            "Highly compatible personalities"
        )
    }

    return explanations
}