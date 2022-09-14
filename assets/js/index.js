var display = true;

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

console.log(date);

var date_of_pass = document.getElementById("2022-3-31").id;

var anotherDay = document.getElementsByTagName("div");
console.log(anotherDay);



    if (date >= anotherDay) {
        display = false;
    }


console.log(date_of_pass);

console.log(display);