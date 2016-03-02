function addzero(time){
  return (time<10 ? time="0"+time: time=""+time)
}
function timer(){
sec.innerHTML = addzero(++sec.innerHTML);
      if(sec.innerHTML==='60'){
        sec.innerHTML='00';
        min.innerHTML = addzero(++min.innerHTML);
        if(min.innerHTML==='60'){
          min.innerHTML='00';
          hour.innerHTML=addzero(++hour.innerHTML);
        }
      }
}
var tic;
var turnon = false
document.addEventListener('DOMContentLoaded', function(){
  var startButton = document.getElementById('start');
  var stopButton = document.getElementById('stop');
  var resetButton = document.getElementById('reset');
  var hour = document.getElementById('hour');
  var min = document.getElementById('min');
  var sec = document.getElementById('sec');
  hour.innerHTML = '00';
  min.innerHTML = '00';
  sec.innerHTML = '00';


  startButton.addEventListener('click', function(){
    if(turnon){return;}
    else{
      turnon = true;
      tic = setInterval(function(){ timer() }, 1000);
    }
  })

  resetButton.addEventListener('click', function(){
    turnon = false;
    hour.innerHTML = '00';
    min.innerHTML = '00';
    sec.innerHTML = '00';
    clearInterval(tic);
  })

  stopButton.addEventListener('click', function(){
    turnon = false;
    clearInterval(tic);
  })
})
