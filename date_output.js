/**
 * Created by illiach on 11.04.2017.
 */
var currentDate = new Date();
var name = 'Illia';
console.log("Current month is:" + currentDate.getMonth() + "\nCurrent day of week is:" + currentDate.getDay());

function getNameofDay(date) {
    var dayNames = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ];
    var currentDayofWeek = date.getDay();
    return dayNames[currentDayofWeek];
}

function getNameofMonth(date){
    var monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];
    var currentMonth = date.getMonth();
    return monthNames[currentMonth];
}

console.log("Today is: "+getNameofDay(currentDate)+"\nCurrent month is: "+getNameofMonth(currentDate)+"\nMy name is "+name);
//somecomment