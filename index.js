$("#btn").click(() => {
  let inputDay = $("#date").val();
  let inputMonth = $("#month").val();
  let inputYear = $("#year").val();
  let y;
  let m;
  let d;
  const day = new Date();
  let currentDay = day.getDate();
  let currentMonth = day.getMonth() + 1;
  let currentYear = day.getFullYear();
  
  if (inputDay != '' && inputMonth != '' && inputYear != '') {
    if (inputYear <= currentYear) {
      age(inputYear, inputMonth, inputDay);
    }
    else {
      alert("Year Must be Smaller than Current Year")
    }
  } else {
    alert("Please fill the required fields")
  }

  $(".yearsOld").text(y);
  $(".monthsOld").text(m);
  $(".daysOld").text(d);

  function age(year, month, day) {
    console.log(inputDay, inputMonth, inputYear);
    console.log(currentDay, currentMonth, currentYear);
    if (currentMonth == inputMonth) {
      if (currentDay == inputDay) {
        console.log("cm=im: Year => ", y = currentYear - inputYear);
        console.log("cd=id: Month => ", m = currentMonth - inputMonth);
        console.log("cd=id: Day => ", d = currentDay - inputDay);
      } else if (currentDay > inputDay) {
        console.log("cm=im: Year => ", y = currentYear - inputYear);
        console.log("cd > id: Month => ", m = currentMonth - inputMonth);
        console.log("cd > id: Day => ", d =currentDay - inputDay);
      } else {
        console.log("cm=im: Year => ", y =  currentYear - inputYear - 1);
        console.log("cd<id: Month => ",  m = 12 - 1);
        console.log("cd<id: Day => ", d = 31 - inputDay + currentDay);
      }
    } else if (currentMonth > inputMonth) {
      if (currentDay == inputDay) {
        console.log("cm>im: Year => ", y = currentYear - inputYear);
        console.log("cd=id: Month => ", m = currentMonth - inputMonth);
        console.log("cd=id: Day => ", d = currentDay - inputDay);
      } else if (currentDay > inputDay) {
        console.log("cm>im: Year => ", y = currentYear - inputYear);
        console.log("cd > id: Month => ", m = currentMonth - inputMonth);
        console.log("cd > id: Day => ", d = currentDay - inputDay);
      } else {
        console.log("cm>im: Year => ", y = currentYear - inputYear);
        console.log("cd<id: Month => ", m = currentMonth - inputMonth - 1);
        console.log("cd<id: Day => ", d = 31 - inputDay + currentDay);
      }
    }else {
      if (currentDay == inputDay) {
        console.log("cm<im: Year => ", y =currentYear - inputYear - 1);
        console.log("cd=id: Month => ", m = inputMonth - currentMonth);
        console.log("cd=id: Day => ", d = currentDay - inputDay);
      } else if (currentDay > inputDay) {
        console.log("cm<im: Year => ", y = currentYear - inputYear - 1);
        console.log("cd > id: Month => ",m = 12 -  inputMonth + currentMonth);
        console.log("cd > id: Day => ", d = currentDay - inputDay);
      } else {
        console.log("cm<im: Year => ", y = currentYear - inputYear - 1);
        console.log("cd<id: Month => ", m = 12 + currentMonth - inputMonth - 1);
        console.log("cd<id: Day => ", d = 31 - inputDay + currentDay);
      }
    } 
  }
  
});
