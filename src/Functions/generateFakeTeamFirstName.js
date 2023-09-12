export function getFakeTeamFirstName() {
    const names = [
        "Galaxy",
        "Stars",
        "Egy",
        "Code",
        "Skill",
        "Star",
        "IEEE",
        "State",
        "Home",
        "Lazy",
        "Universe",
        "Tech",
        "Swift",
        "Bright",
        "Fusion"
    ];

    if (names.length === 0) {
        throw new Error("The input array is empty.");
    }

    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
}