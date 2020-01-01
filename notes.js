const fs = require("fs");
const chalk = require("chalk");

const addNote = (title, body) => {
    const notes = viewNotes();
    notes.push({
        title: title,
        body:body
    });

    saveNote(notes);

}

const saveNote = (notes) => {
    const datajson = JSON.stringify(notes);
    fs.writeFileSync("notes.json", datajson);
    console.log(chalk.bgGreen("Note Save"));
}

const viewNotes = () => {
    try{
        const bufferData = fs.readFileSync("notes.json");
        const dataJson = bufferData.toString();
        const dataObj = JSON.parse(dataJson);
        return dataObj;
    } catch(e){
        return []
    }
}

module.exports = {
    addNote : addNote
}