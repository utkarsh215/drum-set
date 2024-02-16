
var audio;
for(var i=0;i<7;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function ()  
    {
        playAudio(this.innerHTML);
        buttonAnimation(this.innerHTML);
        
    });

}
document.addEventListener("keydown" , function (event){
     playAudio(event.key);
     buttonAnimation(event.key);
});



function playAudio(key)
{
     switch(key)
     {
          case 'w':
                 audio=new Audio("sounds/tom-1.mp3");
            break;
            case 'a':
                 audio=new Audio("sounds/tom-2.mp3");
            break;
            case 's':
                 audio=new Audio("sounds/tom-3.mp3");
            break;
            case 'd':
                 audio=new Audio("sounds/tom-4.mp3");
            break;
            case 'j':
                 audio=new Audio("sounds/snare.mp3");
            break;
            case 'k':
                 audio=new Audio("sounds/kick-bass.mp3");
            break;
            case 'l':
                 audio=new Audio("sounds/crash.mp3");
            break;
     }
     audio.play();
}


function buttonAnimation(currentButton){

     document.querySelector("."+currentButton).classList.add("pressed");
     
     setTimeout(function (){
          document.querySelector("."+currentButton).classList.remove("pressed");
     } , 100);
}
