/* 
Activité : gestion des contacts
*/

// TODO : complétez le programme

var Contacts = {
	// initialise contacts
	init: function(nom, prenom) {
		this.nom = nom;
		this.prenom = prenom;
	},

	decrire: function() {
		var description = this.nom + " " + this.prenom;

		return description;
	}
};

var contact1 = Object.create(Contacts);
contact1.init("Doe", "John");

var contact2 = Object.create(Contacts);
contact2.init("smithy", "Alan");

// Création du tableau contacts
var contactTab = [];
	contactTab.push(contact1);
	contactTab.push(contact2);

contactTab.forEach(function(Contacts){

	console.log(Contacts.decrire());
});

// Création du tableau options
var option = [
	"1 : Liste des contacts", 
	"2 : Ajouter un contact", 
	"0 : Quitter"];	

console.log("Gestionnaire de contacts");

	while (choixUtilisateur !== 0) {

    	for (var i = 0; i < option.length; i++) {
        console.log(option[i]);
    };

    var choixUtilisateur = Number(prompt("Choisisser une option :"));
    switch (choixUtilisateur) {
 
        case 1:
            for (var i = 0; i < contactTab.length; i++) {
            console.log("Nom : " + contactTab[i].nom + " Prénom : " + contactTab[i].prenom);
            };
            break;

        case 2:
            var nom = prompt("Entrer nom:");
            var prenom = prompt("Entrer prenom:");
            var nomContact = "contact" + contactTab.length;
            nomContact = Object.create(Contacts);
            nomContact.init(nom, prenom);
            contactTab.push(nomContact);
            console.log("Le contact a bien était ajouté");
            break;
        }
};
