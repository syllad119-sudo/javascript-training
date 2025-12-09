import readlineSync from 'readline-sync';

function isBixetile (annee) {
    
    if ((annee % 4 === 0 && annee % 100 !== 0) || (annee % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

const anneeUtilisateur = readlineSync.question('Entrez une annee : ');
// Affichez si l'année est bissextile
let estBisextile = isBixetile(Number(anneeUtilisateur));

if(estBisextile) {
    console.log(anneeUtilisateur + " est une année bisextile.");
} else {
    console.log(anneeUtilisateur + " n'est pas une année bisextile.");
}