let prixjeu= 50;

function promoEte(prix){
    return prixjeu - (prixjeu * 0.2);
}
function promoHiver(prix){
    return prixjeu- (prixjeu * 0.3);

}
function promospeciale(prixmpromospeciale) {
    return prixjeu - (prixjeu * 0.15);
    
}


console.log("prix promo d'Ete:", promoEte(prixjeu));
console.log("prix promo d'Hiver:", promoHiver(prixjeu));
console.log("prix avec promospecial ( 15% de reduction):", promospeciale(prixjeu,15));












