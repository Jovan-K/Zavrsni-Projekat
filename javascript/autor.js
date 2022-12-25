const track = document.getElementById("image-track");

const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

const handleOnUp = () => {
  track.dataset.mouseDownAt = "0";  
  track.dataset.prevPercentage = track.dataset.percentage;
}

const handleOnMove = e => {
  if(track.dataset.mouseDownAt === "0") return;
  
  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;
  
  const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
  
  track.dataset.percentage = nextPercentage;
  
  track.animate({
    transform: `translate(${nextPercentage}%, -50%)`
  }, { duration: 1200, fill: "forwards" });
  
  for(const image of track.getElementsByClassName("image")) {
    image.animate({
      objectPosition: `${100 + nextPercentage}% center`
    }, { duration: 1200, fill: "forwards" });
  }
}


let projekti = document.getElementById("projekti")
/* -- Had to add extra lines for touch events -- */

projekti.onmousedown = e => handleOnDown(e);

projekti.ontouchstart = e => handleOnDown(e.touches[0]);

projekti.onmouseup = e => handleOnUp(e);

projekti.ontouchend = e => handleOnUp(e.touches[0]);

projekti.onmousemove = e => handleOnMove(e);

projekti.ontouchmove = e => handleOnMove(e.touches[0]);

projekti.addEventListener("mousedown", ()=>{
  projekti.classList.add("skriveni")
})


window.onload = ()=>{
    let danas = new Date();
    if (danas.getMonth() == 11 || danas.getMonth() == 0){
      document.getElementById("praznici").innerHTML = "Срећни празници! ❄";
    }
  
    kreni();
    evListeneriZaSlike();
}

let linkovi = [
    "https://github.com/Jovan-K/Zavrsni-Projekat",
    "https://github.com/Jovan-K/Maturski-Rad-Web-2",
    "https://github.com/Jovan-K/Sociologija-KVIZ",
    "https://github.com/Jovan-K/Digitron",
    "https://github.com/Jovan-K/Memorije",
    "https://github.com/Jovan-K/ColorGuessr",
    "https://github.com/Jovan-K/Kursna-Lista",
    "https://github.com/Jovan-K/Maturski-rad-web-1"
]
    
let projektiSlike = document.getElementsByClassName("image");

function evListeneriZaSlike(){
    for(let i = 0; i < projektiSlike.length; i++){
        projektiSlike[i].addEventListener("click", ()=>{
            window.open(linkovi[i], "_blank");
        })
    }
}