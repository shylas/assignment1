var allNumbers = [];

function numberCounter(){
  var number = document.numberForm.numberinput.value;
  allNumbers.push(number);
  console.log(allNumbers);
  document.getElementById("count").innerHTML = allNumbers.length;
  event.preventDefault();
}
  
function getSum() {
    var count = 0;
    for(var i=0; i < allNumbers.length; i++) 
    { 
      
      var intValue = parseInt(allNumbers[i]);
      count += intValue; 
    }
  var total = count.toString();
    document.getElementById("sum").innerHTML = total;
    console.log(total);
  
}
  
function getAverage(){
  var count = 0;
    for(var i=0; i < allNumbers.length; i++) 
    { 
      
      var intValue = parseInt(allNumbers[i]);
      count += intValue; 
    }
  count = count/allNumbers.length;
  var total = count.toString();
  document.getElementById("average").innerHTML = total;
  console.log(total);
}  



function arrayReset(){
  allNumbers = [];
  document.getElementById("count").innerHTML = 0;
  document.getElementById("sum").innerHTML = 0;
  document.getElementById("average").innerHTML = 0;
  
}