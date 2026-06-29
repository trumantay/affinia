// What is a human?

export function createProfile({
    id,
    name,

    location = {},

    personality = {},

    interests = [],

    goals = [],

    preferences = {}
}) {
    return {
        id,
        name,

        location: {
            area: location.area || "",
            travelRadius: location.travelRadius || 5
        },

        personality: {
            introversion: personality.introversion || 5,
            conscientiousness: personality.conscientiousness || 5,
            openness: personality.openness || 5
        },

        interests,

        goals,

        preferences
    }
}