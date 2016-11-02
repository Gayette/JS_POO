https://openclassrooms.com/courses/apprenez-a-coder-avec-javascript/creez-vos-premiers-objets
// Cours JS POO  openclassroom chapter 7

var stylo = {

    type: "bille",

    couleur: "bleu",

    marque: "Bic"

};

console.log(stylo.type);
console.log(stylo.couleur);
console.log(stylo.marque);

console.log("Mon stylo à " + stylo.type + " " + stylo.marque + " écrit en " + stylo.couleur);

// Modification d'un objet;

stylo.couleur = "noir";

console.log("Mon stylo à " + stylo.type + " " + stylo.marque + " écrit en " + stylo.couleur);

// Ajouter dynamiquement de nouvelles propriétés à un objet déjà créé:

stylo.prix = 2.22;

console.log("il coute " + stylo.prix + " " + "euros."); 
///////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
    chapter 8
*/

// Objets et prototypes en JavaScript_________________________

var unObjet = {
	a: 2,
};
// Crée unAutreObjet avec unObjet comme prototype:
var unAutreObjet = Object.create(unObjet);

console.log(unAutreObjet.a); // Affiche 2

// Crée encoreUnObjet avec unAutreObjet comme prototype:
var encoreUnObjet = Object.create(unAutreObjet);

console.log(encoreUnObjet.a); // Affiche 2
console.log(encoreUnObjet.b); // Affiche undefined