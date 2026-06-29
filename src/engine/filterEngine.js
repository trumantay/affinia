// Who should be considered?

export function filterProfiles(
    targetProfile,
    profiles,
    filters
) {

    return profiles.filter(profile => {

        if (profile.id === targetProfile.id) {
            return false
        }

        if (
            filters.location &&
            profile.location.area !==
                targetProfile.location.area
        ) {
            return false
        }

        if (filters.interests) {

            const shared =
                profile.interests.filter(
                    interest =>
                        targetProfile
                            .interests
                            .includes(interest)
                )

            if (shared.length === 0) {
                return false
            }
        }

        if (filters.goals) {

            const shared =
                profile.goals.filter(
                    goal =>
                        targetProfile
                            .goals
                            .includes(goal)
                )

            if (shared.length === 0) {
                return false
            }
        }

        return true
    })
}