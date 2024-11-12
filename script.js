$(document).ready(() => {
  $("#btn").click(() => {

    let ageInYears, ageInMonths, ageInDays;
    const d = new Date();
    let currentYear = d.getFullYear();
    let currentMonth = d.getMonth() + 1;
    let currentDate = d.getDate();
    let inputYear = parseInt($("#year").val());
    let inputMonth = parseInt($("#month").val());
    let inputDate = parseInt($("#date").val());
    
    let months;
    if (isLeapYear(currentYear) || isLeapYear(inputYear)) {
      months = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    } else {
      months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    }
    // const sum = months.reduce((partialSum, a) => partialSum + a, 0); console.log(sum);
    
      if ( inputDate >= 1 && inputDate <= 31 
        && inputYear >= 1000 && inputYear <= 9999 
        && inputMonth >= 1 && inputMonth <= 12
      ) {
        console.log("Working")
        calculateYears(); 
        calculateMonthsDays();
        $('.yearsOld').text(ageInYears);
        $(".monthsOld").text(ageInMonths);
        $(".daysOld").text(ageInDays);
      } else { 
        console.log("Else   Working")
        $("#year").val("");
        $("#month").val("");
        $("#date").val("");
        alert("Fill the Required Fields"); 
      };

  function calculateMonthsDays() {
      if (currentMonth == inputMonth) {
        if (currentDate >= inputDate) {
          ageInMonths = currentMonth - inputMonth;
          ageInDays = currentDate - inputDate;
        }
          else {
            ageInMonths = 11;
            if (months[currentMonth - 1] == 31 || months[inputMonth - 1] == 31) {
              ageInDays = inputDate - currentDate + (months[inputMonth - 1] - inputDate) + 1;
            } else {
              ageInDays = 31 - inputDate + currentDate;
            }
          }
        } else if (currentMonth < inputMonth) {
          if (currentDate >= inputDate) {
            ageInMonths = 12 - inputMonth + currentMonth;
            ageInDays = currentDate - inputDate;
          } else if (currentDate < inputDate) {
            ageInMonths = 12 - inputMonth + currentMonth - 1;

            if (months[inputMonth - 1] == 31) {
              if (inputDate == months[inputMonth - 1]) { ageInDays = currentDate; } 
              else if (months[currentMonth - 1] == 31) { ageInDays = 31 - inputDate + currentDate - 1; } 
              else { ageInDays = 31 - inputDate + currentDate; }
            } 
            else { ageInDays = months[inputMonth - 1] - inputDate + currentDate + 1; }
          }
        } else if (currentMonth > inputMonth) {
      if (currentDate >= inputDate) {
        ageInMonths = currentMonth - inputMonth;
        ageInDays = currentDate - inputDate;
      } else if (currentDate < inputDate) {        
        ageInMonths = currentMonth - inputMonth - 1;
        if (months[currentMonth -2]) {
          ageInDays = months[currentMonth-2] - inputDate + currentDate;
        } 
        else {
          ageInDays = 30 - inputDate + currentDate;
        }
      }
    }
    return [ageInMonths, ageInDays];
  };
  
  function calculateYears() {
    if (currentMonth > inputMonth) {
      ageInYears = currentYear - inputYear;
    } else if (currentMonth == inputMonth) {
      if (currentDate >= inputDate) {
        ageInYears = currentYear - inputYear;
      } else {
        ageInYears = currentYear - inputYear - 1;
      }
    } else {
      ageInYears = currentYear - inputYear - 1;
    }
    return ageInYears;
  };
  function isLeapYear(year) { return year % 4 == 0 && (year % 100 != 0 || year % 400 == 0); };   
  });
});
