const getRandomGirlName=()=>{
    const names = ["Jessica", "Marry", "Olivia", "Layla", "Ella", "Emily", "Amelia"];

    if (names.length === 0) {
        throw new Error("The input array is empty.");
    }

    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
}

