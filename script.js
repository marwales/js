function decToBin() {
  var num = document.getElementById('userInput').value;
  var result = [];
 while (num >= 1) {
   result.unshift(num % 2);
   num = Math.floor(num / 2);


 }

 document.getElementById('conversion').innerHTML = result.join('');
}
