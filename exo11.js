let jeu1 = {
  Titre: "call of duty",
  AnneedeSortie: 2003,
  Genre: "Tir a la première personne",
  Score: 100,
  affichage() {
    console.log("Titre: " + this.Titre);
    console.log("Année de Sortie: " + this.AnneedeSortie);
    console.log("Genre: " + this.Genre);
    console.log("Score: " + this.Score);
  },
  getpopularite() {
    return((this.Score * this.AnneedeSortie) / 100);
  },
};


// //getpopularite(jeu1)= (Score * AnnéedeSortie)/100;

let jeu2 = {
  Titre: "Fifa 23",
  AnneedeSortie: 2022,
  Genre: "Sport",
  Score: 85,
  affichage() {
    console.log("Titre: " + this.Titre);
    console.log("Année de Sortie: " + this.AnneedeSortie);
    console.log("Genre: " + this.Genre);
    console.log("Score: " + this.Score);
  },
  getpopularite() {
    return((this.Score * this.AnneedeSortie) / 100);
  },
}

jeu1.affichage();
console.log(jeu1.getpopularite());

jeu2.affichage();
console.log(jeu2.getpopularite());

if (jeu1.getpopularite > jeu2.getpopularite) {
  console.log("le jeu le plus populaire est:" + jeu1.Titre + "popularite"+ jeu1.getpopularite);
} 
else 
   (jeu1.getpopularite () <  jeu2.getpopularite ()); {
  console.log("le jeu le plus populaire que :" + jeu2.Titre + "popularite:" + jeu2.getpopularite);}