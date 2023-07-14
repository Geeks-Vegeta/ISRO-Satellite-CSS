function autoTyping(text,elements, delay) {
    let inputElement=document.getElementById(elements);
    var index = 0;
  
    // Function to type a single character
    function typeCharacter() {
      if (index < text.length) {
        var char = text.charAt(index);
        inputElement.innerHTML += char;
        index++;
        setTimeout(typeCharacter, delay);
      }
    }
  
    // Clear the input field before typing
    inputElement.innerHTML = '';
  
    // Start typing
    typeCharacter();
  }
  

document.onreadystatechange = function () {
    var state = document.readyState
    if (state == 'interactive') {
         document.getElementById('main-section').style.visibility="hidden";
    } else if (state == 'complete') {
        setTimeout(function(){
           document.getElementById('interactive');
           document.getElementById('load').style.visibility="hidden";
           document.getElementById('main-section').style.visibility="visible";
        },4000);
    }
  }


const LaunchingRocket=()=>{
  var audio = new Audio('../count.mp3');
  audio.play();
  document.getElementById("lauch").disabled=true;
  document.getElementById("lauch").style.display="none";


  launchRocketCountDown();

  setTimeout(() => {
      document.getElementById("writing-board").style.display='block';
      let gslv=document.getElementById("gslv");
      let img = document.createElement("img");
      img.setAttribute("id","rocket");
      img.setAttribute("class", "gslv");
      img.src="./images/gslv.png";
      gslv.appendChild(img)
      autoTyping("gslv satellite has launched from india ..","write", 100);

  }, 11000);

  setTimeout(()=>{
    autoTyping("gslv rocket one ejected ..","write1", 100);

  },20000)
  setTimeout(()=>{
    autoTyping("gslv rocket entered space ..","write2", 100);

  },30000)

  setTimeout(()=>{
    document.getElementById("gslv").style.display="none";
    autoTyping("gslv landed on moon successfully","write4", 100);
    document.getElementById("pyro").style.display="block";
    document.getElementById("indian_flag").style.display="block";

  },40000)
}

window.onload = function() {


    let gslv_button=document.getElementById("rocket");
    gslv_button.addEventListener("click",function(){

        launchRocketCountDown();

        setTimeout(() => {
            document.getElementById("writing-board").style.display='block';
            autoTyping("hello", 100);
        }, 11000);

    })
  };


const launchRocketCountDown=()=>{
        
        let i=10;

        document.getElementById("count").innerHTML="Starting CountDown";


        setInterval(() => {

            document.getElementById("count").innerHTML=i;
            i--;
            if (i==-1){
                clearInterval(i=0);
                document.getElementById("count").innerHTML=null;

            }

        }, 1000);

    }
