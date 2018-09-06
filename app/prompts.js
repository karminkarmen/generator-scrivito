"use strict";

module.exports = [
  {
    type: "list",
    name: "type",
    message: "Choose which one template you want to create: ",
    choices: ["Generate a new Obj", "Generate a new Widget"]
  }
];

function createObj(answers) {
  return {
    type: "input",
    name: "nameObj",
    message: "Enter a name of the Obj: "
  };
}
