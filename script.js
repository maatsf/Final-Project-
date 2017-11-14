var indeksSynligBilde = 0;
var indeksNesteBilde;
var tid = 5000;
// En array med alle bildefilene
var bildefiler = ["bilde5.jpg", "bilde2.jpg", "bilde3.jpg", "bilde4.jpg"];

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
bilder[indeksNesteBilde].style.animation = "innFraHoyre 1s forwards";
// Eksisterende bilde animeres ut til venstre
bilder[indeksSynligBilde].style.animation = "utTilVenstre 1s forwards";
indeksSynligBilde = indeksNesteBilde;
setTimeout(flytt, tid); }
