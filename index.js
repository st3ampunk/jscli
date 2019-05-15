#!/usr/bin/env node
const aboutme = require("./commands/Aboutme");
const contactme = require("./commands/Contactme");
const portfolio = require("./commands/portfolio");
const inquirer = require("inquirer");
const chalk = require('chalk');
const CFonts = require('cfonts');
// cFonts hello -f simple -c "#23ffed";
CFonts.say('Hey there|Abishek!!', {
    font: 'block',              // define the font face
    align: 'left',              // define text alignment
    colors: ['#23ffed'],         // define all colors
    background: 'transparent',  // define the background color, you can also use `backgroundColor` here as key
    letterSpacing: 1,           // define letter spacing
    lineHeight: 1,              // define the line height
    space: true,                // define if the output text should have empty lines on top and on the bottom
    maxLength: '0',             // define how many character can be on one line
});



const Index = () => {
    console.log(chalk.blue("Welcome to my profile"));
    // chalk.red(aboutme());
    // contactme();
    // console.log(chalk.blue('Hello world!'));



    inquirer.prompt([{ 
        type : "list",
        choices : ['aboutme','contactme',"portfolio","dontclickhere"],
        name : "value",
        message : "choose your option"
    }
    ])
    .then((answer) => {
        if (answer.value == "aboutme"){
            aboutme();
        } elif(answer.value == "contactme") 
            contactme();    
         elif(answer.value == "portfolio") 
            portfolio();    
         
    })
};


Index();
module.exports = Index;