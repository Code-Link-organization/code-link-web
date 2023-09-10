export const getRandomTrack=()=> {
    const names = [
        "Android Developer",
        "IOS Developer",
        "UI/UX designer",
        "BackEnd Developer",
        "Engineer",
        "Frontend Developer"
    ];

 

    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
}