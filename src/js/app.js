import '../css/main.scss';

// function readyScript() {
      var button1 = document.querySelector(".first-button");
      var button2 = document.querySelector(".second-button");
      
      button1.addEventListener("click", function(event) {
        event.preventDefault();
        button2.classList.add("second-button");
          console.log('start');
          var min = 29;
          var max = 1000;
          var rand = min - 0.5 + Math.random() * (max - min + 1);
          rand = Math.round(rand);
          button2.innerHTML = rand;
          console.log('end');
      }); 
    
    // }