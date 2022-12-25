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

  kreni();
}


function kreni(){
  let vreme = getCookie("vreme");
  let sekunde = vreme % 60;
  let sati = Math.floor(vreme / 3600);
  let minuti = Math.floor(vreme / 60) - sati*60
  
  let stringSekunde = 00;
  let stringMinuti = 00;
  let stringSati = 00;

  if(sekunde < 10){
    stringSekunde = "0" + sekunde
  }
  else{
    stringSekunde = sekunde + ""
  }

  if(minuti < 10){
    stringMinuti = "0" + minuti
  }
  else{
    stringMinuti = minuti + ""
  }

  if(sati < 10){
    stringSati = "0" + sati
  }
  else{
    stringSati = sati + ""
  }

  document.getElementById("vreme").innerHTML = stringSati + ":" + stringMinuti + ":" + stringSekunde;

  tajmer = setInterval(()=>{
    vreme++;

    setCookie("vreme", vreme, 7)

    sekunde = vreme % 60;
    sati = Math.floor(vreme / 3600)
    minuti = Math.floor(vreme / 60) - sati*60

    if(sekunde < 10){
      stringSekunde = "0" + sekunde
    }
    else{
      stringSekunde = sekunde + ""
    }

    if(minuti < 10){
      stringMinuti = "0" + minuti
    }
    else{
      stringMinuti = minuti + ""
    }

    if(sati < 10){
      stringSati = "0" + sati
    }
    else{
      stringSati = sati + ""
    }

    document.getElementById("vreme").innerHTML = stringSati + ":" + stringMinuti + ":" + stringSekunde;
  }, 1000)
}


function setCookie(kukiIme, kukiVrednost, rokTrajanja){
  let d = new Date();
  d.setTime(d.getTime() + (rokTrajanja * 24 * 60 * 60 * 1000));
  let expires = d.toUTCString();
  return document.cookie = `${kukiIme}=${kukiVrednost};expires=${expires};path=/;SameSite=Strict;`;
}

function getCookie(kukiIme){
  let ime = `${kukiIme}=`;
  let cookieArray = document.cookie.split(';');
  for(let i = 0; i < cookieArray.length; i++){
      let cookie = cookieArray[i];
      while(cookie.charAt(0) == ' '){
          cookie = cookie.substring(1);
      }
      if(cookie.indexOf(ime) == 0){
          return cookie.substring(ime.length, cookie.length);
      }
  }
  return "";
}



