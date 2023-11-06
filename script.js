var pbtm = document.querySelector(".pbtm");
var Timer=60;
var randomhits;
var score=0;

function makebubble(){
    var clutter="";
    for(var i=1 ; i<76 ; i++)
    {
        var rn = Math.floor(Math.random()*10);
        clutter+= `<div class="bubble">${rn}</div>`;
    }
    pbtm.innerHTML = clutter;
}
function runTimer(){
     var Timerint = setInterval(function(){
       if(Timer>0)
       {
        Timer--;
        document.querySelector(".Timer").textContent=Timer;
       }
       else{
        pbtm.innerHTML= `<h1> Game Over!! You Scored ${score}</h1>`
        clearInterval(Timerint);
       }
    },1000)
}

function newHits(){
    randomhits = Math.floor(Math.random()*10);
    document.querySelector(".hitval").textContent=randomhits;
}

pbtm.addEventListener("click" , function(dets){
     var hittedval = dets.target.textContent;
     if(hittedval==randomhits)
     {
        score = Number(document.querySelector(".scoreval").textContent);
        score+=10;
        document.querySelector(".scoreval").textContent=score;
        Timer=60;
        newHits();
        makebubble();
     }else{
        pbtm.textContent= `GameOver! You Scored ${score}` ;
     }
});

makebubble();
runTimer();
newHits();




