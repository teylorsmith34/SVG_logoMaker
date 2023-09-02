// Import the necessary libraries and modules
const inquirer = require("inquirer");
const { writeFile } = require("fs");
const { svgGen } = require("./lib/svgGen");

// Import the shape classes from separate files
const Circle = require("./lib/circle");
const Square = require("./lib/square");
const Triangle = require("./lib/triangle");

// Use Inquirer to gather user input for creating a logo
inquirer
  .prompt([
    {
      type: "input",
      name: "text",
      message: "Enter up to three characters for the logo:", // Ask for logo text input
      validate: (input) => {
        return input.length <= 3; // Validate that the input is not longer than 3 characters
      },
    },
    {
      type: "input",
      name: "textColor",
      message: "Enter the text color (keyword or hexadecimal):", // Ask for text color input
    },
    {
      type: "list",
      name: "shape",
      message: "Select a shape:", // Ask the user to choose a shape
      choices: ["Circle", "Square", "Triangle"], // Provide shape choices
    },
    {
      type: "input",
      name: "shapeColor",
      message: "Enter the shape color (keyword or hexadecimal):", // Ask for shape color input
    },
  ])

  .then((response) => {
    // Determine which shape the user selected and create an instance of it
    let shapeChoice;
    switch (response.shape) {
      case "Circle":
        shapeChoice = new Circle(response.shapeColor).render();
        break;
      case "Square":
        shapeChoice = new Square(response.shapeColor).render();
        break;
      case "Triangle":
        shapeChoice = new Triangle(response.shapeColor).render();
    }

    // Generate an SVG logo based on user choices and save it to a file
    const newSvg = svgGen(shapeChoice, response.textColor, response.text);
    writeFile("./examples/logo.svg", newSvg, () => {
      console.log("Generated logo.svg"); // Notify the user that the logo was generated
    });
  });
