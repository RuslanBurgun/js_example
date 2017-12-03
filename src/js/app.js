import '../css/main.scss';

document.addEventListener("DOMContentLoaded", function() {
  console.log('start');

function readyScript() {
      var button1 = document.querySelector(".first-button"); // Получение кнопки из документа
      var button2 = document.querySelector(".second-button"); 
      var container1 = document.querySelector(".container1");
      
      button1.addEventListener("click", function(event) {
        event.preventDefault();
         
          console.log('start');
          var min = 29;
          var max = 1000;
          var rand = min - 0.5 + Math.random() * (max - min + 1);
          rand = Math.round(rand);
          container1.innerHTML = rand;
          console.log('end');
      }); 

      button2.addEventListener("click", function(event) {
        event.preventDefault();
        container1.innerHTML = "";
    });
  }
    readyScript();
  
  });
