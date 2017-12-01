var indeksSynligBilde = 0;
var indeksNesteBilde;
var tid = 5000;
// En array med alle bildefilene
var bildefiler = ["flasker_1.jpg", "flasker_2.jpg", "flasker_3.jpg", "flasker_4.jpg"];

// Henter alle elementer med klassen .bilde
var bilder = document.querySelectorAll(".bilde");

// Legger til bakgrunnsbildene,
// og setter display: none på alle bortsett fra første bilde
for (var i = 0; i < bilder.length; i++) {
  // Legger til bildefilene som bakgrunnsbilder
  bilder[i].style.backgroundImage = "url(media/" + bildefiler[i] + ")";

  // Hvis bildet ikke er det første bildet (med indeks 0)
  if (i != 0) {
    // Setter display til none (usynlig)
    bilder[i].style.display = "none";
  }
}

setTimeout(flytt, tid);

function flytt() {
  if (indeksSynligBilde === bilder.length - 1) {
    indeksNesteBilde = 0;
  }
  else {
    indeksNesteBilde = indeksSynligBilde + 1;
  }
  // Bildet settes inn til høyre for nåværende bilde,
  // og animeres inn
  bilder[indeksNesteBilde].style.left = "800px";
  bilder[indeksNesteBilde].style.display = "initial";
  bilder[indeksNesteBilde].style.animation = "sitatInnFraHoyre 1s forwards";
  // Eksisterende bilde animeres ut til venstre
  bilder[indeksSynligBilde].style.animation = "sitatUtTilVenstre 1s forwards";
  indeksSynligBilde = indeksNesteBilde;
  setTimeout(flytt, tid); }



 //Norsk-versjon
if (screen.width > 700) {

  var indeksSynligSitat = 0;
  var indeksNesteSitat;
  var sitatTid = 4500;

  var sitatBildefiler = ["sitat1.jpg","sitat2.jpg","sitat3.jpg","sitat4.jpg","sitat5.jpg"];
  var sitater = document.querySelectorAll(".sitatBilde");


  // Legger til bakgrunnsbildene,
  // og setter display: none på alle bortsett fra første bilde
  for (var j = 0; j < sitater.length; j++) {
    // Legger til bildefilene som bakgrunnsbilder
    sitater[j].style.backgroundImage = "url(media/sitater/" + sitatBildefiler[j] + ")";

    // Hvis bildet ikke er det første bildet (med indeks 0)
    if (j != 0) {
      // Setter display til none (usynlig)
      sitater[j].style.display = "none";
    }
  }

  setTimeout(flyttSitat, sitatTid);

  function flyttSitat() {
    if (indeksSynligSitat === sitater.length - 1) {
      indeksNesteSitat = 0;
    }
    else {
      indeksNesteSitat = indeksSynligSitat + 1;
    }
    // Bildet settes inn til høyre for nåværende bilde,
    // og animeres inn
    sitater[indeksNesteSitat].style.left = "800px";
    sitater[indeksNesteSitat].style.display = "initial";
    sitater[indeksNesteSitat].style.animation = "innFraHoyre 1s forwards";
    // Eksisterende bilde animeres ut til venstre
    sitater[indeksSynligSitat].style.animation = "utTilVenstre 1s forwards";
    indeksSynligSitat = indeksNesteSitat;
    setTimeout(flyttSitat, sitatTid); }
}

else {
var indeksSynligSitatMob = 0;
  var indeksNesteSitatMob;
  var sitatTidMob = 4500;

  var sitatBildefilerMob = ["sitatm1.png","sitatm2.png","sitatm3.png","sitatm4.png","sitatm5.png"];
  var sitaterMob = document.querySelectorAll(".sitatBilde");

  // Legger til bakgrunnsbildene,
  // og setter display: none på alle bortsett fra første bilde
  for (var a = 0; a < sitaterMob.length; a++) {
    // Legger til bildefilene som bakgrunnsbilder
    sitaterMob[a].style.backgroundImage = "url(media/sitatMob/" + sitatBildefilerMob[a] + ")";

    // Hvis bildet ikke er det første bildet (med indeks 0)
    if (a != 0) {
      // Setter display til none (usynlig)
      sitaterMob[a].style.display = "none";
    }
  }

  setTimeout(flyttSitatMob, sitatTidMob);

  function flyttSitatMob() {
    if (indeksSynligSitatMob === sitaterMob.length - 1) {
      indeksNesteSitatMob = 0;
    }
    else {
      indeksNesteSitatMob = indeksSynligSitatMob + 1;
    }
    // Bildet settes inn til høyre for nåværende bilde,
    // og animeres inn
    sitaterMob[indeksNesteSitatMob].style.left = "800px";
    sitaterMob[indeksNesteSitatMob].style.display = "initial";
    sitaterMob[indeksNesteSitatMob].style.animation = "innFraHoyre 1s forwards";
    // Eksisterende bilde animeres ut til venstre
    sitaterMob[indeksSynligSitatMob].style.animation = "utTilVenstre 1s forwards";
    indeksSynligSitatMob = indeksNesteSitatMob;
    setTimeout(flyttSitatMob, sitatTidMob); }

}



//engelsk-versjon
if (screen.width > 700) {

  var indeksSynligSitatEng = 0;
  var indeksNesteSitatEng;
  var sitatTidEng = 4500;


  var sitatBildefilerEng = ["quote1.jpg","quote2.jpg","quote3.jpg","quote4.jpg","quote5.jpg"];
  var sitaterEng = document.querySelectorAll(".sitatBildeEng");

  // Legger til bakgrunnsbildene,
  // og setter display: none på alle bortsett fra første bilde
  for (var z = 0; z < sitaterEng.length; z++) {
    // Legger til bildefilene som bakgrunnsbilder
    sitaterEng[z].style.backgroundImage = "url(media/sitater/" + sitatBildefilerEng[z] + ")";

    // Hvis bildet ikke er det første bildet (med indeks 0)
    if (z != 0) {
      // Setter display til none (usynlig)
      sitaterEng[z].style.display = "none";
    }
  }

  setTimeout(flyttSitatEng, sitatTidEng);

  function flyttSitatEng() {
    if (indeksSynligSitatEng === sitaterEng.length - 1) {
      indeksNesteSitatEng = 0;
    }
    else {
      indeksNesteSitatEng = indeksSynligSitatEng + 1;
    }
    // Bildet settes inn til høyre for nåværende bilde,
    // og animeres inn
    sitaterEng[indeksNesteSitatEng].style.left = "800px";
    sitaterEng[indeksNesteSitatEng].style.display = "initial";
    sitaterEng[indeksNesteSitatEng].style.animation = "innFraHoyre 1s forwards";
    // Eksisterende bilde animeres ut til venstre
    sitaterEng[indeksSynligSitatEng].style.animation = "utTilVenstre 1s forwards";
    indeksSynligSitatEng = indeksNesteSitatEng;
    setTimeout(flyttSitatEng, sitatTidEng); }
}

else {
var indeksSynligSitatMobEng = 0;
  var indeksNesteSitatMobEng;
  var sitatTidMobEng = 4500;

  var sitatBildefilerMobEng = ["quoteM1.png","quoteM2.png","quoteM3.png","quoteM4.png","quoteM5.png"];
  var sitaterMobEng = document.querySelectorAll(".sitatBildeEng");

  // Legger til bakgrunnsbildene,
  // og setter display: none på alle bortsett fra første bilde
  for (var x = 0; x < sitaterMobEng.length; x++) {
    // Legger til bildefilene som bakgrunnsbilder
    sitaterMobEng[x].style.backgroundImage = "url(media/sitatMob/" + sitatBildefilerMobEng[x] + ")";

    // Hvis bildet ikke er det første bildet (med indeks 0)
    if (x != 0) {
      // Setter display til none (usynlig)
      sitaterMobEng[x].style.display = "none";
    }
  }

  setTimeout(flyttSitatMobEng, sitatTidMobEng);

  function flyttSitatMobEng() {
    if (indeksSynligSitatMobEng === sitaterMobEng.length - 1) {
      indeksNesteSitatMobEng = 0;
    }
    else {
      indeksNesteSitatMobEng = indeksSynligSitatMobEng + 1;
    }
    // Bildet settes inn til høyre for nåværende bilde,
    // og animeres inn
    sitaterMobEng[indeksNesteSitatMobEng].style.left = "800px";
    sitaterMobEng[indeksNesteSitatMobEng].style.display = "initial";
    sitaterMobEng[indeksNesteSitatMobEng].style.animation = "innFraHoyre 1s forwards";
    // Eksisterende bilde animeres ut til venstre
    sitaterMobEng[indeksSynligSitatMobEng].style.animation = "utTilVenstre 1s forwards";
    indeksSynligSitatMobEng = indeksNesteSitatMobEng;
    setTimeout(flyttSitatMobEng, sitatTidMobEng); }

}



    // knapp

  var buttonEl = document.querySelector(".dropbtn");
  var dropdownContent = document.querySelector(".dropdown-content");
  var strek1 = document.querySelector("#strek1");
  var strek2 = document.querySelector("#strek2");
  var strek3 = document.querySelector("#strek3");
  var streker = document.querySelector(".dropbtn");


    buttonEl.addEventListener("click", minFunksjon);

    dropdownContent.style.right = "-300%";

    function minFunksjon(){
          if  (dropdownContent.style.right === "-300%") {

            dropdownContent.style.right = "0%";
            strek1.style.transform = "rotate(45deg)";
            strek1.style.top = "15px";
            strek3.style.transform = "rotate(-45deg)";
            strek3.style.top = "15px";
            strek2.style.transform = "scale(0)";
            strek2.style.backgroundColor = "black";
            streker.style.transform = "rotate(90deg)";

          }

          else {
            dropdownContent.style.right = "-300%";
            strek1.style.transform = "rotate(0deg)";
            strek1.style.top = "0px";
            strek3.style.transform = "rotate(0deg)";
            strek3.style.top = "20px";
            strek2.style.transform = "scale(1)";
            strek2.style.backgroundColor = "white";
            streker.style.transform = "rotate(0deg)";
          }
        }
