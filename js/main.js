

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

window.onload = function() {

    setTimeout(()=>{
        console.log("don")

    },3000)

    let gslv_button=document.getElementById("rocket");
    gslv_button.addEventListener("click",function(){
        launchRocketCountDown()

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
