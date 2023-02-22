// Initial variables, pick two current dates. 
// One will be changed during script loading, other will remain the same

var initialDate = new Date();
var currentDate = new Date();
var currentYear = currentDate.getFullYear();
var currentMonth = currentDate.getMonth();

//Formatting current currentMonth variable to Internationalized naming

var currentMonthInt = new Intl.DateTimeFormat('en-US', { month: 'long'}).format(currentDate);

//Declare variables with DOM elements that will be altered by the script 

var calendarYearMonth = document.body.querySelector(".calendar-month-year");
var calendarDays = document.body.querySelector(".calendar-days");

//Place current Year and Internationalized Month name in the title of the calendar 

calendarYearMonth.innerHTML = `<strong>${currentMonthInt}</strong> ${currentYear}`

//Start function that will fill calendar with dates according to given month 
//when document loaded. Function arguments are same Year and Month that 
//pass into calendar title

document.body.onload = fillCalendarCurrentMonth(currentYear, currentMonth);
 
function fillCalendarCurrentMonth (year, month) {
    let firstDayOfMonth = new Date(year, month, 1);
    let firstDayOfMonthWeekday = firstDayOfMonth.getDay(); //define the week day of the first day given month (0-6)
    let lastDayOfMonth = new Date(year, month + 1, 0); //define last day of given month (this will be a day number 0 of next month)

// For each day of given month create <p> DOM element and fill it with text (number of a day) 

for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
        var dateElement = document.createElement("p");
        var dateContent = document.createTextNode(i);
        dateElement.appendChild(dateContent);
        calendarDays.appendChild(dateElement);
};

//Shift first <p> with the first day of the given month in our Grid layout. Date method getDay() return number from 0(Sunday) to 6(Saturday),
// but according to our grid layout first column of our grid is number 1 and it represents Monday, so I implemented little hack for Sundays(0)
 
let calendarFirstDay = document.body.querySelector(".calendar-days p:first-child")
        if (firstDayOfMonthWeekday == 0) {
            calendarFirstDay.style.gridColumn = "7";
        } 
        else {
            calendarFirstDay.style.gridColumn = firstDayOfMonthWeekday;
                    
        };
}

//Initialize two buttons for next and prev month

const nextMonthButton = document.getElementById('calendar-next-month');
const previousMonthButton = document.getElementById("calendar-previous-month");

//Next month click event listener
nextMonthButton.addEventListener('click', function (event) {

    //Activate previous month button   
    previousMonthButton.removeAttribute("disabled"); 

    //When currentMonth equals 11 (December) reset currentMonth to 0 (January) and Add Year 
    if (currentMonth === 11) {
        currentMonth = 0;
        currentYear++;
    } else {
        currentMonth++
    };

    
    let alteredMonth = currentDate.setMonth(currentMonth);
    //Remove all child Nodes from calendarDays and fill with new dates for next month  
    calendarDays.innerHTML = "";
    fillCalendarCurrentMonth(currentYear, currentMonth);
    
    //Set new Year/Month in title of calendar
    var currentMonthInt = new Intl.DateTimeFormat('en-US', { month: 'long'}).format(alteredMonth);
    calendarYearMonth.innerHTML = `<strong>${currentMonthInt}</strong> ${currentYear}`
});

previousMonthButton.addEventListener('click', function (event) {
    if (currentMonth === 0) {
        currentMonth = 11;
        currentYear--;
    } else {
        currentMonth--
    };

    let alteredMonth = currentDate.setMonth(currentMonth);
    calendarDays.innerHTML = "";
    fillCalendarCurrentMonth(currentYear, currentMonth);
    var currentMonthInt = new Intl.DateTimeFormat('en-US', { month: 'long'}).format(alteredMonth);
    calendarYearMonth.innerHTML = `<strong>${currentMonthInt}</strong> ${currentYear}`
    
    //When we back to the month and year of initial Date - disable previous month button
    if (initialDate.getMonth() == currentMonth && initialDate.getFullYear() == currentYear) {
    previousMonthButton.setAttribute("disabled", ""); 
    };
 })
 




