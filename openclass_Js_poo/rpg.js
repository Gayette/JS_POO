// https://openclassrooms.com/courses/apprenez-a-coder-avec-javascript/creez-vos-premiers-objets
// //////////////////////////////// RPG /////// openclassroom chapter 7 & 8 ////////////
/*
var perso = {

	nom: "Case",
	hp: 110,
	fo: 80,
	end: 50,
	perc: 70,
	intel: 70,
	hackSkill: "good"

};

//console.log(perso.nom + " a " + perso.hp + " points de vie et " + perso.fo + " en force.");

// Case est blessé par agent corpo
//perso.hp = perso.hp - 20;

// Case trouve worm prog
//perso.hackSkill =  "very good";

//console.log(perso.nom + " a " + perso.hp + " points de vie et " + perso.hackSkill + " en piratage");

//Dans notre programme, on remarque que l'instruction console.log(...)
//qui affiche les caractéristiques du personnage est dupliquée, ce qui
//est une mauvaise chose. Une première solution, étudiée dans un précédent
//chapitre, consisterait à créer une fonction pour décrire un personnage.

var perso = {

    nom: "Case",
    hp: 110,
    fo: 80,

decrire: function() {

        var description = this.nom + " a " + this.hp + " points de vie et " +

            this.fo + " en force";

        return description;

    }

};


console.log(perso.decrire());


// Case est blessée 

perso.hp = perso.hp - 20;


// CAse trouve un bracelet de force

perso.fo = perso.fo + 10;


console.log(perso.decrire());

//Nous avons vu plus haut que JavaScript permet d'ajouter
//des propriétés à un objet après sa création. Cela fonctionne
//aussi avec les méthodes. Voici une autre syntaxe possible
//pour créer le personnage Aurora, qui aboutit exactement au même résultat:

var perso = {}; // Création d'un objet sans aucune propriété

perso.nom = "Case";

perso.hp = 110;

perso.fo = 80;

// Renvoie la description du personnage

perso.decrire = function() {

    var description = this.nom + " a " + this.hp + " points de vie et " +

        this.fo + " en force";

    return description;

};                                */

// Observons cette ligne: __________________________________________________________________________________________________

/*    console.log(perso.decrire());

Pour obtenir la description d'un personnage, on utilise maintenant l'expression perso.decrire() plutôt que decrire(perso). Cette différence est essentielle :

decrire(perso) appelle la fonction decrire() en lui passant l'objet perso en paramètre. Dans ce cas, la fonction est externe à l'objet.

perso.decrire() appelle la fonction decrire() sur l'objet perso. Dans ce cas, la fonction fait partie de la définition de l'objet : il s'agit d'une méthode.

Pour appeler une méthode nomMethode sur un objet nomObjet, on utilise la syntaxe nomObjet.nomMethode().*/

//Le mot-clé this __________________________________________________________________________________________________________

/*Observez maintenant le corps de la méthode decrire() de notre objet perso.
Un nouveau mot-clé y apparaît : this. Il est défini automatiquement par JavaScript
à l'intérieur d'une méthode et représente l'objet sur lequel la méthode a été appelée.

La méthode decrire() ne prend plus de personnage en paramètre : elle utilise this pour
accéder aux propriétés de l'objet sur lequel elle a été appelée.*/
// =================================================================

/*
    chapter 8
*/
                /*
var perso = {

    nom: "Case",
    sante: 150,
    force: 25,
    xp: 0,


    // Renvoie la description du personnage

    decrire: function() {

        var description = this.nom + " a " + this.sante + " points de vie, " +
            this.force + " en force et " + this.xp + " points d'expérience";

        return description;

    }
};


console.log(perso.decrire());

// Case est blessé

perso.sante = perso.sante - 20;

// Case trouve un bracelet de force

perso.force = perso.force + 10;

// Case apprend une nouvelle compétence

perso.xp = perso.xp + 15;

console.log(perso.decrire());


var perso2 = {

    nom: "Molly",
    sante: 180,
    force: 35,
    xp: 0,

// Renvoie la description du personnage
    decrire: function() {

        var description = this.nom + " a " + this.sante + " points de vie, " +
            this.force + " en force et " + this.xp + " points d'expérience.";

        return description;    
    }
};
                                
var Personnage = {

    nom: "",
    sante: 0,
    force: 0,
    xp: 0,


    decrire: function() {

        var description = this.nom + " a " + this.sante + " points de vie, " +
            this.force + " en force et " + this.xp + " points d'expérience.";

        return description;    
    }
};

var perso1 = Object.create(Personnage);
    perso1.nom = "Case";
    perso1.sante = 150;
    perso1.force = 25;
    perso1.xp = 0;

var perso2 = Object.create(Personnage);
    perso2.nom = "Molly";
    perso2.sante = 180;
    perso2.force = 35;
    perso2.xp = 0;

console.log(perso1.decrire());
console.log(perso2.decrire());  

/* Dans cet exemple, nous avons créé un objet nommé Personnage,
qui rassemble les propriétés communes à tous les personnages.
Les objets perso1 et perso2 sont créés avec l'objet Personnage
comme prototype, et lui délèguent les fonctionnalités communes.
Par convention, le nom d'un objet jouant le rôle de modèle
(ici l'objetPersonnage) commence souvent par une majuscule,
mais ce n'est pas une obligation.     */


// Initialisation des personnages:__________________________________

/* On peut noter que le processus de création d'un personnage
est un peu répétitif : pour chaque personnage, il faut successivement 
donner une valeur à chacune de ses propriétés. On peut faire mieux en 
créant une fonction d'initialisation dans l'objetPersonnage: */
                                    
                                        /*

var Personnage = {
    // Initialise le personnage
    init: function (nom, sante, force) {

        this.nom = nom;
        this.sante = sante;
        this.force = force;
        this.xp = 0;

    },

    // Renvoie la description du personnage
    decrire: function () {

        var description = this.nom + " a " + this.sante + " points de vie, " +
            this.force + " en force et " + this.xp + " points d'expérience";

        return description;
    }
};


var perso1 = Object.create(Personnage);
perso1.init("Case", 150, 25);


var perso2 = Object.create(Personnage);
perso2.init("Molly", 180, 35);


console.log(perso1.decrire());
console.log(perso2.decrire());                      
                                        */

/*La méthode init() prend en paramètres les valeurs initiales des propriétés 
d'un personnage, et définit les propriétés associées. A l'intérieur de cette 
méthode, il faut bien distinguer les propriétés (préfixées par le mot-cléthis) 
des paramètres (non préfixés). Par exemple,this.nom représente la propriéténom 
de l'objet etnom correspond à l'un des paramètres de la méthode.
Le code de création d'un personnage ne comporte plus que deux étapes :
    -La création proprement dite, avec l'objetPersonnage comme prototype.
    -L'initialisation des propriétés, à l'aide de la fonctioninit() de l'objetPersonnage. */


// Des adversaires pour nos héros:__________________________________

/*Nous créons d'abord un objetPersonnage qui est le modèle commun 
à tous les personnages. Il possède les propriétés communes à tous 
les personnages (nom, santé, force) ainsi qu'une méthode pour les initialiser.*/

var Personnage = {
    // Initialise le personnage
    initPerso: function(nom, sante, force) {
        this.nom = nom;
        this.sante = sante;
        this.force = force;
    
    this.inventaire = {

        credits: 10,
        pass: 1
    };
  },

/* L'objetPersonnage possède une nouvelle méthode attaquer() 
qui gère l'attaque d'une cible ainsi que les cas particuliers 
associés (mort de la cible ou attaquant déjà mort). L'objet Player 
gagne une méthodecombattre() qui fait appel par délégation à la méthode 
attaquer() de Personnage et gère le gain d'expérience si l'adversaire 
meurt durant l'attaque. L'objet Adversaire n'est pas modifié, mais peut 
malgré tout attaquer un joueur grâce à la méthode attaquer() de Personnage, 
dont il bénéficie par délégation. */
    // Attaque un personnage cible
    attaquer: function (cible) {

        if (this.sante > 0) {

            var degats = this.force;

            console.log(this.nom + " attaque " + cible.nom + " et lui fait " + degats + " points de dégâts");
            cible.sante = cible.sante - degats;

            if (cible.sante > 0) {

                console.log(cible.nom + " a encore " + cible.sante + " points de vie");

            } else {

                cible.sante = 0;

                console.log(cible.nom + " est mort !");

            }

        } else {

            console.log(this.nom + " ne peut pas attaquer : il est mort...");

        }
    }
};

/*Les objetsJoueur etAdversaire sont tous deux créés avecPersonnage 
comme prototype. Ils disposent chacun d'une fonction d'initialisation 
particulière, qui fait appel par délégation à la méthode initPerso()  
de l'objetPersonnage. Enfin, l'objetJoueur possède une fonction de description.*/

var Player = Object.create(Personnage);

// Initialise le joueur
    Player.initPlayer = function (nom, sante, force) {

    this.initPerso(nom, sante, force);
    this.xp = 0; // L'expérience du joueur est toujours initialisée à 0
    this.credits = 10;
    this.pass = 1;
};

// Renvoie la description du joueur
    Player.decrire = function () {

        var description = this.nom + " a " + this.sante + " points de vie, " +
            this.force + " en force et " + this.xp + " points d'expérience " + this.inventaire.credits 
            + " crédits" + " et " + this.inventaire.pass + " pass.";

        return description;
};

// Combat un adversaire
Player.combattre = function (adv) {

    this.attaquer(adv);

    if (adv.sante === 0) {

        console.log(this.nom + " a tué " + adv.nom + " et gagne " +
            adv.valeur + " points d'expérience, ainsi que " +
            adv.inventaire.credits + " crédits et " +
            adv.inventaire.pass + " pass");
        this.xp += adv.valeur;
        // L'inventaire de la victime est transféré à son vainqueur
        this.inventaire.credits += adv.inventaire.credits;
        this.inventaire.pass += adv.inventaire.pass;
    }
};

// Adversaire
var Adversaire = Object.create(Personnage);
    // Initialise l'adversaire
    Adversaire.initAdversaire = function(nom, sante, force, race, valeur) {

        this.initPerso(nom, sante, force);
        this.race = race;
        this.valeur = valeur; 

};

// Une fois ces objets modèles définis, 
//nous pouvons les utiliser pour créer nos personnages
// (avec Player comme prototype).
var player1 = Object.create(Player);
player1.initPlayer("Case", 150, 25);

var player2 = Object.create(Player);
player2.initPlayer("Molly", 180, 35);

console.log("Bienvenue dans Neuromancien _ Players:");
console.log(player1.decrire());
console.log(player2.decrire());

// Creation de l'adversaire ( avec Adversaire comme prototype).
var adv = Object.create(Adversaire);
adv.initAdversaire("agent corporatiste", 50, 20, "humain", "10");

console.log("Un opposant arrive : c'est un " + adv.nom );

adv.attaquer(player1);
adv.attaquer(player2);


player1.combattre(adv);
player2.combattre(adv);


console.log(player1.decrire());
console.log(player2.decrire());




