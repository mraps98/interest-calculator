var principal, years, rate, interest, amount, type, change;

principal = document.getElementById('principal');
years = document.getElementById('years');
rate = document.getElementById('rate');
interest = document.getElementById('interest');
amount = document.getElementById('amount');
type = document.getElementById('type');
change = document.getElementById('change');

function setChange(){
  switch(type.value){
    case "1":
    change.innerHTML = "Years";
    break;
    case "2":
    change.innerHTML = "Days";
    break;
    case "3":
    change.innerHTML = "Days";
    break;
  }
}


function calculate(){

  switch (type.value){
    case "1":
    var sinterest = (principal.value * years.value * rate.value)/100;
    break;
    case "2":
    var sinterest = (principal.value * years.value/365 * rate.value)/100;
    break;
    case "3":
    var sinterest = (principal.value * years.value/360 * rate.value)/100;
    break;
  }

  var samount = +sinterest + +principal.value;
  interest.innerHTML = parseFloat(sinterest).toFixed(4);
  amount.innerHTML = parseFloat(samount).toFixed(4);
}
