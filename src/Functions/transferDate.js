export function transferDate(dateStr) {
    const inputDate = new Date(dateStr);
    const currentDate = new Date();

    const timeDifferenceMillis = currentDate - inputDate;
    const minutesDifference = Math.floor(timeDifferenceMillis / (1000 * 60));
    const hoursDifference = Math.floor(timeDifferenceMillis / (1000 * 60 * 60));
    const daysDifference = Math.floor(timeDifferenceMillis / (1000 * 60 * 60 * 24));

    if (daysDifference === 0) {
        if (hoursDifference === 0) {
            if (minutesDifference === 0) {
                return "now";
            } else {
                return minutesDifference + " m";
            }
        } else {
            return hoursDifference + " h";
        }
    } else if (daysDifference < 7) {
        return daysDifference + " d";
    } else if (daysDifference < 30) {
        return Math.floor(daysDifference / 7) + " w";
    } else if (daysDifference < 365) {
        return Math.floor(daysDifference / 30) + " months";
    } else {
        return Math.floor(daysDifference / 365) + " y";
    }
}