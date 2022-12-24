function skrolNaUvod(){
    window.scrollTo({
        top: 560,
        left: 0,
        behavior: 'smooth'
      });
}

function skrolPreskociUvod(){
    window.scrollTo({
        top: 1260,
        left: 0,
        behavior: 'smooth'
      });
}

function jsProba(){
  if(document.getElementById("proba").innerHTML != "Наслов промењен!"){
    document.getElementById("proba").innerHTML = "Наслов промењен!";
  }
  else{
    document.getElementById("proba").innerHTML = "Објашњење примера:";
  }
}


function predjiNaHTML(){
  window.location.href = "../stranice/html.html";
}

function predjiNaCSS(){
  window.location.href = "../stranice/css.html";
}

function predjiNaJS(){
  window.location.href = "../stranice/javascript.html";
}


window.onload = ()=>{
  let danas = new Date();
  if (danas.getMonth() == 11 || danas.getMonth() == 0){
    document.getElementById("praznici").innerHTML = "Срећни празници! ❄";
  }
}
  