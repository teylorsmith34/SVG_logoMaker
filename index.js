const inquirer = require("inquirer");
const { writeFile } = require("fs");
const Circle = require("./lib/circle");
const Triangle = require("./lib/triangle");
const Square = require("./lib/square");

async function getUserInput() {
  try {
    const userInput = await inquirer
      .prompt([
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
      ])

      .then((response) => {
        // check options > choose shape > accept options for colors and letters > pass to html > write to file
        switch (response.shape) {
          case "Circle":
            var shapeChoice = new Circle(response.color).render();
            break;
          case "Triangle":
            var shapeChoice = new Triangle(response.color).render();
            break;
          case "Square":
            var shapeChoice = new Square(response.color).render();
        }

        const newSvg = svgGen(
          shapeChoice,
          response.fontcolor,
          response.letters
        );

        writeFile("./examples/logo.svg", newSvg, () => {
          console.log("Generated logo.svg");
        });
      });
  } catch (error) {
    console.log(error);
  }
}
