"use strict";

module.exports = [
  {
    type: "input",
    name: "name",
    message: "Enter a name of the Obj/Widget: "
  },
  {
    type: "list",
    name: "type",
    message: "Choose which one template you want to create: ",
    choices: [
      "An obj with a React Component",
      "An obj without a React Component",
      "A widget with a React Component"
    ]
  }
];
