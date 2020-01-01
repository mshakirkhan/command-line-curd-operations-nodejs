const yargs = require("yargs");
const notes = require("./notes.js");

yargs.command({
    command: "add",
    describe: "Add New Note",
    builder : {
        title: {
            describe: "Notes Title",
            demandOption: true,
            data: "string"
        },
        body: {
            describe: "Notes Body",
            demandOption: true,
            data: "string"
        }
    },
    handler: function(yargs){
        notes.addNote(yargs.title, yargs.body);
    }
});

yargs.parse();