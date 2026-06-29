// How far apart are two humans?

export function calculateDistance(
    personA,
    personB
) {

    const R = 6371

    const lat1 =
        personA.location.latitude
        *
        Math.PI
        / 180

    const lat2 =
        personB.location.latitude
        *
        Math.PI
        / 180

    const dLat =
        (
            personB.location.latitude
            -
            personA.location.latitude
        )
        *
        Math.PI
        / 180

    const dLon =
        (
            personB.location.longitude
            -
            personA.location.longitude
        )
        *
        Math.PI
        / 180

    const a =

        Math.sin(dLat/2)
        *
        Math.sin(dLat/2)

        +

        Math.cos(lat1)
        *
        Math.cos(lat2)
        *
        Math.sin(dLon/2)
        *
        Math.sin(dLon/2)

    const c =
        2 *
        Math.atan2(
            Math.sqrt(a),
            Math.sqrt(1-a)
        )

    return Math.round(
        R * c
    )
}