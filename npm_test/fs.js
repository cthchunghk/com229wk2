/*
Task: 
1) Read Content
2) Delete file
3) Rename file
4) Update file
*/

// Create file and write content
// Change to fs"."promises; It had fs/promises; Fuck, it explosed after 14
// npm install fs.promises
const fsP = require("fs.promises");
const createFile = async (filename, data) => {
    try{
        await fsP.writeFile(filename, data);
        console.log("File is created successfully with name: " + filename);
    }catch(error){
        console.error(error);
    }
}

// Jacky provided code. Import fs, call fs.promises.writeFile
const fs = require("fs");
const createFile2 = async (filename, data) => {
    try{
        await fs.promises.writeFile(filename, data);
        console.log("File is created successfully with name: " + filename);
    }catch(error){
        console.error(error);
    }
}

createFile("f1.txt", "Welcome to my first node js code in crash course");
createFile("f2.txt", "Welcome to my first node js code in crashed course");

//Read file
const readfile = async (fileToRead) => {
    try{
        const data = await fs.readFile(fileToRead);
        console.log("Your file content: " + data.toString());
    } catch (error){
        console.error(error);
    }
}

readfile('f1.txt');