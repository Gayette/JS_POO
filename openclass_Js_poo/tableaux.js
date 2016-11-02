// https://openclassrooms.com/courses/apprenez-a-coder-avec-javascript/stockez-vos-donnees-dans-des-tableaux
// /////////////////////// CHAPTER 9 /////////////////////////////////////////////////
								/*
var filmTab = [
		"Blade Runner",
		"Alien",
		"Taxi driver"];

console.log(filmTab.length);		
console.log(filmTab[1]);

// Parcourir le tableau:
	// avec boucle for:
for (var i = 0; i < filmTab.length; i++) {

    console.log(filmTab[i]);

}
	// avec boucle foreach:
filmTab.forEach(function (film) {

    console.log(film);

});

// Ajouter un element:
filmTab.push("A scanner darkly");

console.log(filmTab[3]);
			
								*/
								/*

var Films = {

	init: function(titre, annee) {
		this.titre = titre;
		this.annee = annee;
	},

	decrire: function() {
		var description = this.titre + " (" + this.annee + ")";

        return description;

    }

};

var film1 = Object.create(Films);
film1.init("Blade runner", 1982);

var film2 = Object.create(Films);
film2.init("Alien", 1979);

var film3 = Object.create(Films);
film3.init("Taxi driver", 1976);

var filmTab = [];
	filmTab.push(film1);
	filmTab.push(film2);
	filmTab.push(film3);

filmTab.forEach(function(Films) {

	console.log(Films.decrire());

});	

									*/

// Exos Les mousquetaires ///////////

var mousquetaires = ["Athos", "Porthos", "Aramis"];

console.log("Voici les trois mousquetaires :");

for (var i = 0; i < mousquetaires.length; i++) {

    console.log(mousquetaires[i]);

}


mousquetaires.push("D'Artagnan");

console.log("A présent, ils sont quatre !");


mousquetaires.forEach(function(mousquetaire) {

    console.log(mousquetaire);

});


// Exercice : somme des valeurs d'un tableau //////////////////////
var valeurs = [11, 3, 7, 2, 9, 10];

var somme = 0;

for (var i = 0; i < valeurs.length; i++) {

    somme += valeurs[i];

}

console.log("La somme des éléments vaut " + somme);


//Exercice : maximum d'un tableau ////////////////////////////////////
var valeurs = [11, 3, 7, 2, 9, 10];

var max = valeurs[0];
// L'indice commence à 1 puisque le maximum est initialisé avec la 1ère valeur du tableau
for (var i = 1; i < valeurs.length; i++) {

    if (valeurs[i] > max) {
        max = valeurs[i];

    }
}

console.log("Le maximum des éléments vaut " + max);


// Exercice : saisie d'une liste de mots ///////////////////////////////////////
var mots = [];

var mot = "";

while (mot !== "stop") {

    mot = prompt("Entrez un mot ou tapez stop pour arrêter :");
    if (mot !== "stop") {
        mots.push(mot);

    }
}

mots.forEach(function (mot) {
    console.log(mot);
});


// Exercice : liste de films /////////////////////////////////////////////////////////
var Film = {
    // Initialise le film
    init: function (titre, annee, realisateur) {
        this.titre = titre;
        this.annee = annee;
        this.realisateur = realisateur;
    },

    // Renvoie la description du film
    decrire: function () {
        var description = this.titre + " (" + this.annee + ", " + 
        	this.realisateur + ")";

        return description;
    }
};

var film1 = Object.create(Film);
film1.init("Le loup de Wall Street", 2013, "Martin Scorsese");

var film2 = Object.create(Film);
film2.init("Vice-Versa", 2015, "Pete Docter");

var film3 = Object.create(Film);
film3.init("Babysitting", 2013, "Philippe Lacheau et Nicolas Benamou");

var films = [film1, film2, film3];

films.forEach(function (film) {
    console.log(film.decrire());
});


// Exercice : gestion d'un chenil /////////////////////////////////////////////////////////
var Chien = {
    // initialise le chien
    init: function (nom, race, taille) {
        this.nom = nom;
        this.race = race;
        this.taille = taille;
    },
    // Renvoie l'aboiement du chien
    aboyer: function () {

        var aboiement = "Whoua ! Whoua !";
        if (this.taille < 25) {

            aboiement = "Kaii ! Kaii !";

        } else if (this.taille > 60) {

            aboiement = "Grrr ! Grrr !";
        }
        return aboiement;
    }
};

var crokdur = Object.create(Chien);
crokdur.init("Crokdur", "mâtin de Naples", 75);

var pupuce = Object.create(Chien);
pupuce.init("Pupuce", "bichon", 22);

var medor = Object.create(Chien);
medor.init("Médor", "labrador", 58);

var chenil = [];
chenil.push(crokdur);
chenil.push(pupuce);
chenil.push(medor);

console.log("Le chenil héberge " + chenil.length + " chien(s) :");

chenil.forEach(function (chien) {
    console.log(chien.nom + " est un " + chien.race + " mesurant " 
    	+ chien.taille + " cm. " +
        "Il aboie : " + chien.aboyer());
});