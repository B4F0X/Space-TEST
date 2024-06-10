var cursor = document.getElementById("cursor"); 
var body = document.querySelector("body");
body.setAttribute("onclick", "x()");
document.addEventListener("mousemove", function(e) {
    // podążanie za kursorem
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
    // cursor.style.transition = "ease 0.1s";
});

//zmiana kursora i rózne inne rzeczy
//--------------------------------------------------------------------------------------------------------------------------------
/*cursor.addEventListener("click",*/function x (){  
      body.removeAttribute("onclick")
    cursor.style.animation= "scale ease 2s"
    setTimeout(function(){
        body.style.backgroundColor= /*"yellow"*/ "black"
        body.style.background = "#000000"
        cursor.remove()
        //body.style.cursor= "default"
        document.querySelector("style").innerHTML= `*{ cursor: default;}`
       // body.innerHTML += `
        //<div id="stars" class="stars"></div>
        //<div id="stars2" class="stars"></div>
        //<div id="stars3" class="stars"></div>`
        location.href = "glowna.html"
    },1500)
    setTimeout(function(){ 
    const ufoC = document.createElement("div")
    ufoC.setAttribute("class","ufoC")
    body.appendChild(ufoC)
    ufoC.innerHTML+=`
    <div id="trail"></div>
    <div class="ufo">
    <div id="glass"></div>
    </div>
    `
    ufo.style.animation ="opacityStar 3s ease-in 2s forwards "
    document.querySelector(".container").style.visibility = "visible"

    },1500)

}
//-------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------
// ruszanie ufo + trail
document.addEventListener("mousemove",function(e){
    // podążanie za kursorem UFO
   let ufo1= document.querySelector(".ufo")
   let trail= document.querySelector("#trail")
   let glass= document.querySelector("#glass")
   var x = e.pageX
   var y = e.pageY 
   ufo1.style.top= y-30+"px"
   ufo1.style.left= x+20+"px"
   ufo1.style.transition = "ease-out 0.15s"
   
   trail.style.top=y-25+"px"
   trail.style.left=x+20+"px"
   trail.style.transition = "ease-out 0.18s"
})