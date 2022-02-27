window.onload = function() {
  clock();  
  
  function clock() {
    var event = new Date();
    document.getElementById('clock').innerHTML = event.toTimeString().slice(0, 8);
    setTimeout(clock, 1000);
  }
}