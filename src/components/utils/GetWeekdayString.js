const GetWeekdayString = (day) => {
        var dayEnglish = ""
        switch(day) {
            case 1:
                dayEnglish = "Monday"
                break;
            case 2:
                dayEnglish = "Tuesday"
                break;
            case 3:
                dayEnglish = "Wednesday"
                break;
            case 4:
                dayEnglish = "Thursday"
                break;
            case 5:
                dayEnglish = "Friday"
                break;
            case 6:
                dayEnglish = "Saturday"
                break;
            default:
                dayEnglish = "Sunday"
            }
        return dayEnglish
    }
    export default GetWeekdayString;