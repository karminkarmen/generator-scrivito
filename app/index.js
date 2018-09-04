"use strict";

const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.log("Hello in scrivito Obj/Widgets generator!");
  }
  start() {
    this.prompt([
      {
        type: "input",
        name: "name",
        message: "Enter a name of the Obj/Widget: "
      },
      {
        type: "list",
        name: "type",
        message: "Choice which one you want to create: ",
        choices: [
          "An obj with a React Component",
          "An obj without a React Component",
          "A widget with a React Component"
        ]
      }
    ]).then(answers => {
      const defaultName = answers.name;
      const defNameUpper =
        defaultName.charAt(0).toUpperCase() + defaultName.slice(1);
      const defNameUpperWidget = defNameUpper + "Widget";

      this.destinationRoot(defNameUpper);

      switch (answers.type) {
        case "An obj with a React Component":
          this._writeObjComponent(defaultName, defNameUpper);
          this._writeObjConfig(defaultName, defNameUpper);
          this._writeObjClass(defaultName, defNameUpper);

        case "An obj without a React Component":
          this._writeObjConfig(defaultName, defNameUpper);
          this._writeObjClass(defaultName, defNameUpper);

        case "A widget with a React Component":
          this._writeWidgetComponent(
            defaultName,
            defNameUpper,
            defNameUpperWidget
          );
          this._writeWidgetConfig(
            defaultName,
            defNameUpper,
            defNameUpperWidget
          );
          this._writeWidgetClass(defaultName, defNameUpper, defNameUpperWidget);
      }

      this.log("You've created");
    });
  }

  // objects

  _writeObjComponent(defaultName, defNameUpper) {
    this.fs.copyTpl(
      this.templatePath("component.js"),
      this.destinationPath(defNameUpper + "Component" + ".js"),
      { name: defaultName, nameUpper: defNameUpper }
    );
  }

  _writeObjConfig(defaultName, defNameUpper) {
    this.fs.copyTpl(
      this.templatePath("editingConfig.js"),
      this.destinationPath(defNameUpper + "EditingConfig" + ".js"),
      { name: defaultName, nameUpper: defNameUpper }
    );
  }

  _writeObjClass(defaultName, defNameUpper) {
    this.fs.copyTpl(
      this.templatePath("objClass.js"),
      this.destinationPath(defNameUpper + "ObjClass" + ".js"),
      { name: defaultName, nameUpper: defNameUpper }
    );
  }

  // widgets

  _writeWidgetComponent(defaultName, defNameUpper, defNameUpperWidget) {
    this.fs.copyTpl(
      this.templatePath("widgetComponent.js"),
      this.destinationPath(defNameUpper + "WidgetComponent" + ".js"),
      {
        name: defaultName,
        nameUpper: defNameUpper,
        nameUpperWidget: defNameUpperWidget
      }
    );
  }

  _writeWidgetConfig(defaultName, defNameUpper, defNameUpperWidget) {
    this.fs.copyTpl(
      this.templatePath("widgetEditingConfig.js"),
      this.destinationPath(defNameUpper + "WidgetEditingConfig" + ".js"),
      {
        name: defaultName,
        nameUpper: defNameUpper,
        nameUpperWidget: defNameUpperWidget
      }
    );
  }

  _writeWidgetClass(defaultName, defNameUpper, defNameUpperWidget) {
    this.fs.copyTpl(
      this.templatePath("widgetClass.js"),
      this.destinationPath(defNameUpper + "WidgetClass" + ".js"),
      {
        name: defaultName,
        nameUpper: defNameUpper,
        nameUpperWidget: defNameUpperWidget
      }
    );
  }
};
