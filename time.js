let weekday = new Array(7);

weekday[0] = "Monday"
weekday[1] = "Tuesday";
weekday[2] = "Wednesday";
weekday[3] = "Thursday";
weekday[4] = "Friday";
weekday[5] = "Saturday";
weekday[6] = "Sunday";



function myFunction() {
  let days = [];
  let startDate = new Date();

  let myDate = document.getElementById("dateInput").value;
  let endDate = new Date(myDate);

  while (startDate <= endDate) {
    let weekdayName = weekday[startDate.getDay()];
    startDate.setDate(startDate.getDate() + 1);
    days.push(startDate);
    console.log(weekdayName);

  }
  console.log(days.length);

};
