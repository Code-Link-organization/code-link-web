export function getFakeTeamLastName() {
    const names = [
        "Coders",
        "Breakers",
        "Attackers",
        "Titans",
        "Heroes",
        "Stars",
        "Leaders",
        "Founders",
        "Owners",
        "Creators",
        "Champions",
        "Engineers"
    ];

    if (names.length === 0) {
        throw new Error("The input array is empty.");
    }

    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
}
