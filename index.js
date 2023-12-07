
$("#btn").click(() => {      
    var d = new Date();
    var months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];         
    var aid;
    var aim;
    var aiy;

    const inputDate = $('#date').val();
    const inputMonth = $('#month').val();
    const inputYear = $('#year').val();
    age(inputDate, inputMonth, inputYear);
    $(".monthsOld").text(aim);
    $(".daysOld").text(aid);
    $(".yearsOld").text(aiy);

function age(id, im, iy){    
    let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const cd = d.getDate(); const cm = d.getMonth() + 1; const cy = d.getFullYear(); 
    if (cm == im) {0
        if (months[im -1] == 28) {
            aiy = (cy - iy); aim = (cm - im); aid = (31 - id + cd);  
        }
        else if (cd >= id ) { 
            aiy = (cy - iy); aim = (cm - im); aid = (cd - id);  
        }
        else if (cd < id ) { 
            aiy = (cy - iy -1); aim = (cm -1); aid = (months[im - 1] - id + cd -1);  
        }
    }
    else if (cm > im) {    
        if (cd >= id ) { 
            aiy = (cy - iy); aim = (cm - im); aid = (cd - id);
        }
        else if (cd < id ) { 
            aiy = (cy - iy); aim = (cm - im -1); 
            if (months[cm -1] && months[im -1] == 31) {
                aid = (months[im - 1] - id + cd -1);  
            }
            else if (months[im -1] == 28) {
                aid = (months[im - 1] - id + cd + 1);  
            }
            else {
                aid = (months[im - 1] - id + cd);  
            }
        }
    }
    else if (cm < im) {
        if (cd >= id ) { 
            aiy = (cy - iy -1); aim = (12 + cm - im); aid = (cd - id);
        }
        else if (cd < id ) { 
            aiy = (cy - iy -1); aim = (12 + cm - im -1); 
            if (months[cm -1] && months[im -1] == 31) {
                aid = (months[im - 1] - id + cd -1);  
            }
            else {
                aid = (months[im - 1] - id + cd);  
            }
        }
    }
}
        
});
