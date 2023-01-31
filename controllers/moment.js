const moment = require('moment');

const momentFo = async (req,res)=>{
console.log("Current Date:", moment().toString())
console.log("Current day is:", moment().day())

// Next week is 7 (full week) + 3 (for Wednesday) = 10
let nextWeekWednesday = moment().add(10, 'day');
console.log(
	"Next week's Wednesday is:",
	nextWeekWednesday.toString()
)

// Previous week is 3 (for Wednesday) - 7 (full week) = -4
let prevWeekWednesday = moment().day(-4);
console.log(
	"Previous week's Wednesday is:",
	prevWeekWednesday.toString()
)

// Next week is 7 (full week) + 7 (for sunday) = 14
let nextWeekSunday = moment().day(14);
console.log(
	"Next week's Sunday is:",
	nextWeekSunday.toString()
)}

module.exports = {
    momentFo
}