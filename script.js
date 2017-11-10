var indeksSynligBilde = 0; var indeksNesteBilde;
var tid = 3000;
// En array med alle bildefilene
var bildefiler = ["bilde1.png", "bilde2.png", "bilde3.png", "bilde4.png"];

// Henter alle elementer med klassen .bilde
var bilder = document.querySelectorAll(".bilde");
// Legger til bakgrunnsbildene,
// og setter display: none på alle bortsett fra første bilde for (var i = 0; i < bilder.length; i++) {
// Legger til bildefilene som bakgrunnsbilder
bilder[i].style.backgroundImage = "url(bilder/" + bildefiler[i] + ")";
// Hvis bildet ikke er det første bildet (med indeks 0)
if (i != 0) {
// Setter display til none (usynlig) bilder[i].style.display = "none";
}
setTimeout(flytt, tid);
