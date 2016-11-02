// https://openclassrooms.com/courses/apprenez-a-coder-avec-javascript/creez-vos-premiers-objets
// openclassroom chapter 7 & 8

                                         ////////////\\\\\\\\\\\                   
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\  EXERCICES  ////////////////////////////////////////////////////

// 1) Ajouter de l'expérience au personnage:___________________________________________________

// TODO : ajoutez ici la définition de l'objet perso

    //console.log(perso.decrire());

// Case est blessé:

    //perso.sante = perso.sante - 20;

//Case trouve un bracelet de force:

    //perso.force = perso.force + 10;

//Case apprend une nouvelle compétence:

    //perso.xp = perso.xp + 15;

//console.log(perso.decrire());
                                    /*
var perso = {}; 

perso.nom = "Case";

perso.hp = 110;

perso.fo = 80;

perso.xp = 0;

perso.decrire = function() {

    var description = this.nom + " a " + this.hp + " points de vie, " +

        this.fo + " en force " + this.xp + " point d'expérience.";

    return description;

};

console.log(perso.decrire());

// Case est blessé:
perso.hp = perso.hp - 20;

//Case trouve un bracelet de force:
perso.fo = perso.fo + 10;

//Case apprend une nouvelle compétence:
perso.xp = perso.xp + 15;

console.log(perso.decrire());

// 2) Modélisation d'un chien: ___________________________________________________

//Complétez le programme chien.js
//ci-dessous pour ajouter la définition de l'objet chien:

// TODO : ajoutez ici la définition de l'objet chien

//console.log(chien.nom + " est un " + chien.race + " mesurant " + chien.taille + " cm");

//console.log("Tiens, un chat ! " + chien.nom + " aboie : " + chien.aboyer());

var chien = {
    nom: "Matenza",
    race: "malinois",
    taille: 75,

    // Renvoie l'aboiement du chien
    aboyer: function () {
        return "Grrr ! Grrrouf !";
    }
};

console.log(chien.nom + " est une " + chien.race + " mesurant " + chien.taille + " cm");
console.log("Tiens, un chat ! " + chien.nom + " aboie : " + chien.aboyer());

// 3) Modélisation d'un cercle: ___________________________________________________

//Complétez le programme cercle.js ci-dessous pour
//ajouter la définition de l'objet cercle. La valeur
//de son rayon est saisie par l'utilisateur.

//var r = Number(prompt("Entrez le rayon d'un cercle :"));

// TODO : ajoutez ici la définition de l'objet cercle

//console.log("Son périmètre vaut " + cercle.perimetre());

//console.log("Son aire vaut " + cercle.aire());

var r = Number(prompt("Entrez le rayon d'un cercle :"));

var cercle = {
    rayon: r,

    // Renvoie le périmètre du cercle
    perimetre: function () {
        return 2 * this.rayon * Math.PI;
    },
    // Renvoie l'aire du cercle
    aire: function () {
        return this.rayon * this.rayon * Math.PI;
        // Autre possibilité
        //return Math.pow(this.rayon, 2) * Math.PI;
    }
};

console.log("Son périmètre vaut " + cercle.perimetre());
console.log("Son aire vaut " + cercle.aire());

// 4) Modélisation d'un compte bancaire:_____________________________________________

//Ecrivez un programme compte.js qui crée un objet compte ayant 
//les propriétés suivantes :

    //Une propriété titulaire valant "Alex".

    //Une propriété solde valant initialement 0.

    //Une méthode crediter() ajoutant le montant passé en paramètre au solde du compte.

    //Une méthode debiter() retirant le montant passé en paramètre du solde du compte.

    //Une méthode decrire() renvoyant la description du compte.

//Utilisez cet objet pour afficher sa description,
//le créditer puis le débiter de montants saisis
//successivement par l'utilisateur, puis afficher de nouveau sa description.

var compte = {
    titulaire: "Alex",
    solde: 0,

    crediter: function(montant) {
        this.solde = this.solde + montant;
    },

    debiter: function(montant) {
        this.solde = this.solde - montant;
    },

    decrire: function() {

    var description = this.titulaire + " a " + this.solde + " euros";

        return description;
    }
};

console.log(compte.decrire());
var credit = Number(prompt("Entrez le montant à créditer :"));
compte.crediter(credit);
var debit = Number(prompt("Entrez le montant à débiter :"));
compte.debiter(debit);
console.log(compte.decrire());
                                                    */


// TODO : ajoutez ici la définition de l'objet Chien
var Chien = {

    init: function(nom, race, taille) {
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

console.log(crokdur.nom + " est un " + crokdur.race + " mesurant " + crokdur.taille + " cm");
console.log("Tiens, un chat ! " + crokdur.nom + " aboie : " + crokdur.aboyer());


var pupuce = Object.create(Chien);
pupuce.init("Pupuce", "bichon", 22);

console.log(pupuce.nom + " est un " + pupuce.race + " mesurant " + pupuce.taille + " cm");
console.log("Tiens, un chat ! " + pupuce.nom + " aboie : " + pupuce.aboyer());
