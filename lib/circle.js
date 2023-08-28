const Shape = require("./shape");

class Circle extends Shape {
  constructor(color) {
    super(color);
  }
  render() {
    return `<circle cx="50" cy="50" r="40" fill="${this.color}" />`;
  }
}

module.exports = Circle;
