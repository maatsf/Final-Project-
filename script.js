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



  var indeksSynligSitat = 0;
  var indeksNesteSitat;
  var sitatTid = 4500;

  var sitatBildefiler = ["sitat1.jpg","sitat2.jpg","sitat3.jpg","sitat4.jpg","sitat5.jpg"];
  var sitater = document.querySelectorAll(".sitatBilde");
  var sitatBildefilerEng = ["quote1.jpg","quote2.jpg","quote3.jpg","quote4.jpg","quote5.jpg"];
  var sitaterEng = document.querySelectorAll(".sitatBildeEng");

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


    // knapp

  var buttonEl = document.querySelector(".dropbtn");

 var dropdownContent = document.querySelector(".dropdown-content");


    buttonEl.addEventListener("click", minFunksjon);

    function minFunksjon(){
          if  (dropdownContent.style.right === "-240%") {

            dropdownContent.style.right = "0%";

          }

          else {
            dropdownContent.style.right = "-240%";
          }
        }
