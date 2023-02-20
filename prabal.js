 
    var fontSize = 72;
    if(window.screen.width < 700) 
      fontSize = 32;
    else if(window.screen.width < 1200)
      fontSize= 56;
    var vara = new Vara(
      "#container",
      "https://rawcdn.githack.com/akzhy/Vara/ed6ab92fdf196596266ae76867c415fa659eb348/fonts/Satisfy/SatisfySL.json",
      [
        {
          text: "Hi Its Me Adil Ahmed",
          y: 150,
          fromCurrentPosition: { y: false },
          duration: 3000
        },
        {
          text: "From online web ustaad channel",
          y: 150,
          fromCurrentPosition: { y: false },
          delay: 3000,
          duration: 4000
        },
        {
          text: "Do you want to be the complete website designer or developer ?",
          y: 150,
          fromCurrentPosition: { y: false },
          delay: 3000,
          duration: 4500
        },
        {
          text: "Do you ?",
          y: 150,
          fromCurrentPosition: { y: false },
          delay: 3000,
          duration: 1000
        },
        {
          text: "Let me know ",
          y: 150,
          fromCurrentPosition: { y: false },
          delay: 3000,
          duration: 4000
        },
        {
          text: "yeah",
          y: 150,
          fromCurrentPosition: { y: false },
          delay: 3000,
          duration: 1000
        },
        {
          text: "if yes then this channel is for you",
          y: 150,
          fromCurrentPosition: { y: false },
          delay: 3000,
          duration: 4000
        },
        {
          text: "Here you will come to know everyting form very scratch in no time.",
          y: 150,
          fromCurrentPosition: { y: false },
          delay: 3000,
          duration: 4000
        },
        {
          text: "So why waiting,",
          y: 150,
          id: "no_erase",
          delay: 2000
        },
        {
          text:
            "without waisting the time anymore",
          y: 50,
          x: 50,
          duration: 4000
        },
        {
          text: "lets get started now",
          color: "#fff",
          id: "right"
        }
      ],
      {
        strokeWidth: 2,
        color: "#fff",
        fontSize: fontSize,
        textAlign: "center" 
                                                                                                                                                               
      }
    );
    vara.ready(function() {
      var erase = true;
      vara.animationEnd(function(i, o) {
        if (i == "no_erase") erase = false;
        if (erase) {
          o.container.style.transition = "opacity 1s 1s";
          o.container.style.opacity = 0;
        }
      });
      vara.get("github").container.style.cursor = "pointer";
      vara.get("github").container.onclick = function() {
        document.querySelector("#link").click();
      };
    });
    
        