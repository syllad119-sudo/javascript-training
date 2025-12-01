const inventaire = ["manettes","consoles", "accessoires", "casques"," chargeurs"]



inventaire.push( "cartes memoires")
 console.log (inventaire)
 inventaire.push("jeux")
 console.log (inventaire)
 inventaire.shift()
    console.log (inventaire);

    for (let i = 0; i < inventaire.length; i++) {
        console.log("articles :" + inventaire[i]);
    }


  

