function decToBin() {
  var num = document.getElementById('userInput').value;
  var result = [];

if (num == 0) {
  result = [0];
}
else if (num > 0){
 while (num >= 1) {
   result.unshift(num % 2);
   num = Math.floor(num / 2);
 }
}
else {
  result = ['Please input positive number only']
}

 document.getElementById('conversion').innerHTML = result.join('');
}
