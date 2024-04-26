$("#btn").click(() => {
  let ageInYears; let ageInMonths; let ageInDays; 
  
  const d = new Date();
  const currentYear = d.getFullYear();
  const currentMonth = d.getMonth() + 1;
  const currentDate = d.getDate();
  
  const inputYear = parseInt($("#year").val());
  const inputMonth = parseInt($("#month").val());
  const inputDate = parseInt($("#date").val());
  
  let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];  
  
  if (leapYearOrNot(inputYear) || leapYearOrNot(currentYear) ) {
    months = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];    
  } else {
    months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];  
  }

  const totalDays = months[inputMonth - 1] - inputDate + currentDate;
  /*
  console.log( months[inputMonth -1], inputDate, currentDate);
  console.log('Total Days: ', totalDays); calculateYears(); calculateMonthsDays();
  console.log(inputYear, inputMonth, inputDate);
  console.log(currentYear, currentMonth, currentDate);
  console.log(ageInYears, ageInMonths, ageInDays);
*/ 

  calculateYears(); 
  calculateMonthsDays();
  if (inputDate >= 0 && inputYear >= 0 && inputMonth >= 0) {
    $('.yearsOld').text(ageInYears);
    $(".monthsOld").text(ageInMonths);
    $(".daysOld").text(ageInDays);  
  } else { alert("Fill the Required Fields"); }
  
  function calculateMonthsDays () {
    if (currentMonth == inputMonth && currentDate >= inputDate) {
      ageInMonths =  currentMonth - inputMonth ; ageInDays = currentDate - inputDate;       
    }
    else if (currentMonth == inputMonth && currentDate < inputDate) {
      ageInMonths =  12 - 1 ; ageInDays = totalDays + 1;       
    }
    else if (currentMonth < inputMonth && currentDate >= inputDate) {
      ageInMonths = 12 - inputMonth + currentMonth ; ageInDays = currentDate - inputDate;       
    }
    else if (currentMonth < inputMonth && currentDate < inputDate) {
      ageInMonths =  12 - inputMonth + currentMonth - 1 ; ageInDays = totalDays + 1;       
    }
    else if (currentMonth > inputMonth && currentDate >= inputDate) {
      ageInMonths =  currentMonth - inputMonth; ageInDays = currentDate - inputDate;       
    }
    else if (currentMonth > inputMonth && currentDate < inputDate) {
      ageInMonths =  currentMonth - inputMonth - 1; ageInDays = totalDays;       
    }
  }  
  function calculateYears() {
    if (currentMonth >= inputMonth && currentDate >= inputDate) { ageInYears = currentYear - inputYear; } 
    else { ageInYears = currentYear - inputYear - 1; } 
  }  
  function leapYearOrNot(year) { 
    if (year % 4 == 0) { return true; }   
    else { return false; }
  }
});
