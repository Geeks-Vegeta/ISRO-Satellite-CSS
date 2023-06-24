

window.onload = function() {
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
