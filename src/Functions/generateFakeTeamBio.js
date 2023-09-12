function getFakeTeamBio() {
    const names = [
        "Our team pioneers creative solutions through code.",
        "Crafting clean, efficient code with meticulous care.",
        "A team that excels through teamwork.",
        "Masters of agile methodologies for efficient development.",
        "Turning ideas into digital magic.",
        "Building the digital future, one line at a time.",
        "Charting new territories in software innovation.",
        "Turning vision into tangible results swiftly.",
        "Shaping code for real-world impact.",
        "Weaving data into actionable insights.",
        "Turning complex challenges into elegant solutions.",
        "Engineering the future through code and creativity."
    ];

    if (names.length === 0) {
        throw new Error("The input array is empty.");
    }

    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
}
export default getFakeTeamBio