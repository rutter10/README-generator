const inquirer = require('inquirer')
const fs = require("fs")
const licenses = {
  MIT:{
    Info: "This application is covered under an MIT Licesne", 
    Badge:"![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)"
  }, 
  GNU:{
    Info: "This application is covered under a GNU License",
    Badge:"![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)"
  }, 
  IBM:{
    Info: "This application is covered under an IBM License",
    Badge: "![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)"
  } 
}


inquirer
  .prompt([{
    type: "input",
    message: "Enter Project Title",
    name: "title"
  },
  {
    type: "input",
    message: "Describe your project",
    name: "description"
  },

  {
    type: "input",
    message: "Explain installation instructions",
    name: "installation"
  },
  {
    type: "input",
    message: "Describe the projects use",
    name: "usage"
  },
  {
    type: "list",
    message: "Choose Required licensing",
    name: "license",
    choices: ["MIT", "GNU", "IBM"]
  }, 
  {
    type: "input",
    message: "Contributions guidelines",
    name: "contribution"
  },
  {
    type: "input",
    message: "Test",
    name: "test"
  },
  {
    type: "input",
    message: "Input github user name so users will know where to submit questions",
    name: "questions"
  },

  {
    type: "input",
    message: "Input Email for additional questions",
    name: "email"
  },

  ])
  .then((data) => {
   const inputs = `<header>
   <title>${data.title}</title>
   <h1>Project Title: ${data.title}</h1>
   </header>
   <div>
   <img>${licenses[data.license].Badge}</img>
   <h2> Table of Contents: </h2>
   <ol>
    <li><a href = #description>Description</a></li>
    <li><a href = #installation>Installation</a></li>
    <li><a href = #usage>Usage</a></li>
    <li><a href = #contributing>Contributing</a></li>
    <li><a href = #test>Tests</a></li>
    <li><a href = #license>License</a></li>
    <li><a href = #questions>Questions</a></li>
   <h2 id = "description">Description: </h2>
   <p>${data.description}</p>
   <h2 id = "installation">Installation: </h2>
   <p>${data.installation}</p>
   <h2 id = "usage">Usage: </h2>
   <p>${data.usage}</p>
   <h2 id = "contributing">Contributing: </h2>
   <p>${data.contribution}</p>
   <h2 id = "test">Tests: </h2>
   <p>${data.test}</p>
   <h2 id = "license">License: </h2>
   <p>${licenses[data.license].Info}</p>
   <h2 id = "questions">Questions: </h2>
   <h4>Feel free to send questions to my email, or contact me on GitHub.</h4>
   <a href = "https://github.com/${data.questions}">Github</a>
   <p>You can also reach me at ${data.email}</p>
   `

   fs.writeFile("README.md",inputs, (err) => console.log(err))
  })


// IBM Badge
  // "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"]

// GNU Badge
  //  "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"

// MIT Badge
  // "[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)"
