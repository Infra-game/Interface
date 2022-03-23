export const tokenHeaders = {headers : {
    authorization : localStorage.getItem("token")
}}

export const formatDate = (date,formatType) => {
    const months = ["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"]
    const dayNumber = date.getDay() < 10 ? "0"+date.getDay() : date.getDay();
    const monthNumber = date.getMonth()+1 < 10 ? "0"+parseInt(date.getMonth()+1) : parseInt(date.getMonth()+1);
    const monthName = months[date.getMonth()];
    const hours = date.getHours() < 10 ? "0"+date.getHours() : date.getHours();
    const minutes = date.getMinutes() < 10 ? "0"+date.getMinutes() : date.getMinutes();
    const seconds = date.getSeconds() < 10 ? "0"+date.getSeconds() : date.getSeconds();

    let newDate;
    switch (formatType) {
        case "JJ/MMMM/YYYY HH:mm:ss":
            newDate = `${dayNumber} ${monthName} ${hours}:${minutes}:${seconds}`;
            break;

        default:
            break;
    }
    return newDate;
}