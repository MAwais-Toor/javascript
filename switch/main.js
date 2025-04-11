let day = Number(prompt("Enter any number to find a day"));

switch (day) {
    case 1:
        document.write("Monday")
        break;
    case 2:
        document.write("Tuesday")
        break;
    case 3:
        document.write("Wednesday")
        break;
    case 4:
        document.write("thursday")
        break;
    case 5:
        document.write("Friday")
        break;
    case 6:
        document.write("Saturday")
        break;
    case 7:
        document.write("Sunday")
        break;

    default:
        document.write("Its not a weekday")
        break;
}