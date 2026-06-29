import { createProfile } from "../models/profileModel"

export const sampleProfiles = [

    createProfile({

        id: 1,

        name: "Truman",

        location: {
            area: "Clementi",
            travelRadius: 5
        },

        personality: {
            introversion: 8,
            conscientiousness: 9,
            openness: 7
        },

        interests: [
            "AI",
            "Gaming",
            "Startups"
        ],

        goals: [
            "academic_success",
            "entrepreneurship"
        ],

        preferences: {
            studyStyle: "practice"
        }

    }),

    createProfile({

        id: 2,

        name: "Sarah",

        location: {
            area: "Clementi",
            travelRadius: 3
        },

        personality: {
            introversion: 7,
            conscientiousness: 8,
            openness: 8
        },

        interests: [
            "AI",
            "Reading",
            "Startups"
        ],

        goals: [
            "academic_success"
        ],

        preferences: {
            studyStyle: "practice"
        }

    }),

    createProfile({

        id: 3,

        name: "John",

        location: {
            area: "Jurong",
            travelRadius: 10
        },

        personality: {
            introversion: 3,
            conscientiousness: 6,
            openness: 9
        },

        interests: [
            "Gaming",
            "Sports"
        ],

        goals: [
            "fitness"
        ],

        preferences: {
            studyStyle: "discussion"
        }

    })

]