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