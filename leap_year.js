// Design and implement an application that reads an integer value from the user representing a year. 
// The purpose of the program is to determine if the year is a leap year 
// (and therefore has 29 days in February) in the Gregorian calendar. 
// A year is a leap year if
// it is divisible by 4, unless it is also divisible by 100 but not 400. 
// For example, the year 2003 is not a leap year, but 2004 is. 
// The year 1900 is not a leap year because it is divisible by 100, 
// but the year 2000 is a leap year because even though it is divisible by 100, 
// it is also divisible by 400. Produce an error message for any input value less than 1582 
// (the year the Gregorian calendar was adopted).


//for example if the value is diivisible by 4, it's a leap year, 
//but if it's also divisble by 100 its not a leap year
//and then if its divisible by 400, then it goes back to being a leap year.



function checkIfLeapYear(year) {
    if  (year % 4 == 0) {
        return true;
    }  
    if ((year % 4 == 0) & (year % 100 == 0)) {
        return false;
    }
    if((year % 4 == 0) & (year % 100 == 0) & (year % 400 == 0)) {
        return true;
    }

    else {
        return false;
    }   
}

console.log(checkIfLeapYear(2021))
console.log(checkIfLeapYear(2020))
