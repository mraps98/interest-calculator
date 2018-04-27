var principal, rate, compounded, duration, years, interest, amount, change;

principal = document.getElementById('principal');
rate = document.getElementById('rate');
compounded = document.getElementById('compounded');
duration = document.getElementById('duration');
years = document.getElementById('years');
interest = document.getElementById('interest');
amount = document.getElementById('amount');
change = document.getElementById('change')

function setChange(){
  switch(years.value){
    case "1":
    change.innerHTML = "Years";
    break;
    case "365":
    change.innerHTML = "Days";
    break;
    case "12":
    change.innerHTML = "Months";
    break;
  }
}

function calculate(){
  var n = duration.value / years.value;

  var camount = principal.value * Math.pow ( (1 + (rate.value/100) / compounded.value ) , (n * compounded.value));
  //principal.value * (1 + rate.value / compounded.value ) ^ (duration.value * years.value);
  var cinterest = +camount - +principal.value;

  interest.innerHTML = parseFloat(cinterest).toFixed(4);
  amount.innerHTML = parseFloat(camount).toFixed(4);
}
