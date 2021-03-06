const yargs = require('yargs');

yargs.command({
    command: 'list',
    describe: 'Liste toutes mes notes',
    handler: () => {
        console.log("Voici la liste des notes");
    }
}).command({
    command: 'add',
    describe: "Ajoute une note",
    handler: () => {
        console.log("Chaud pour ajouter une note");
    }
}).command({
    command: 'remove',
    describe: "Supprime une note",
    handler: () => {
        console.log("Chaud pour supprimer une note");
    }
}).command({
    command: 'read',
    describe: "Affiche le détail d'une note",
    handler: () => {
        console.log("Voici le détail d'une note");
    }
}).argv;