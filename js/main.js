  var images = document.getElementsByClassName("Myslider");
  //j'ai declare mon tableu d'images.

  var base = 0;
  //je declare mon images courante "par default"

  var change = setInterval (slider, 2000);
  // mes images defilent toutes les secondes defini

  function slider(){
  // function qui va definir une action

    for(var i = 0; i < images.length ; i++){
  //cela est ma boucle qui va definir mon cycle de passage*

    images[i].style.display = "none";

    }
  //*

  base++;
  //cela ajoute 1 de plus a chaque tours

  if ( base > images.length){
  //condition pour que le slider revienne au depart
    base = 1;
  }

  images[base -1].style.display = "block";
  //afffiche les images au lieu de les cachés
// cacher les images
}

slider();
  //execution de la function en cours.


  var suivant = document.getElementById("suivant");
  suivant.addEventListener("click", function(){slider(1);});


  var precedent = document.getElementById("precedent");
  precedent.addEventListener("click", function(){slider(-1);});
