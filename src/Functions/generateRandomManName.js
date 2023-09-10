export const getRandomManName=()=> {
    const names = [
        "Mohamed",
        "David",
        "Samuel",
        "Ahmed",
        "Michael",
        "Robert",
        "Richard",
        "Tomas",
        "John",
        "Harry",
        "George"
    ];

    if (names.length === 0) {
        throw new Error("The input array is empty.");
    }

    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
}