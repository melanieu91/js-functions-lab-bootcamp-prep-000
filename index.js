// write your code below!
function happyHolidays (){
  return "Happy holidays!"
}
function happyHolidaysTo(name){
  console.log("Happy holidays,${name}")
  return `Happy holidays, ${name}!`
}
function happyHolidayTo (holiday, name){
  console.log("${holiday}")
  console.log("${name}")
  return `Happy ${holiday}, ${name}!`
}
function holidayCountdown (days, holiday){
  console.log ("${days}")
  console.log ("${holiday}")
  return `It's ${days} days until ${holiday}!`
}