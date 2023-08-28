const inquirer = require("inquirer");
const fs = require("fs");
// const { Circle, Square, Triangle } = require("./lib/shape.js");
const Circle = require("./lib/circle");
const Square = require("./lib/square");
const Triangle = require("./lib/triangle");

async function getUserInput() {
  try {
    const userInput = await inquirer.prompt([
      {
        type: "input",
        name: "text",
        message: "Enter up to three characters for the logo:",
        validate: (input) => {
          return input.length <= 3;
        },
      },
      {
        type: "input",
        name: "textColor",
        message: "Enter the text color (keyword or hexadecimal):",
      },
      {
        type: "list",
        name: "shape",
        message: "Select a shape:",
        choices: ["Circle", "Square", "Triangle"],
      },
      {
        type: "input",
        name: "shapeColor",
        message: "Enter the shape color (keyword or hexadecimal):",
      },
    ]);

    return userInput;
  } catch (error) {
    console.error("Error getting user input:", error);
  }
}

function generateSVG(userInput) {
  try {
    let shape;

    switch (userInput.shape) {
      case "Circle":
        shape = new Circle(userInput.shapeColor);
        break;
      case "Square":
        shape = new Square(userInput.shapeColor);
        break;
      case "Triangle":
        shape = new Triangle(userInput.shapeColor);
        break;
      default:
        console.error("Invalid shape selection.");
        process.exit(1);
    }

    shape.setText(userInput.text);
    const svg = shape.render();

    fs.writeFileSync("logo.svg", svg);

    console.log("Generated logo.svg");
  } catch (error) {
    console.error("Error generating SVG:", error);
  }
}

async function main() {
  const userInput = await getUserInput();
  generateSVG(userInput);
}

main();
