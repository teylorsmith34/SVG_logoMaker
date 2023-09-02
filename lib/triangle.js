const Shape = require("./shape");

class Triangle extends Shape {
  constructor(color) {
    super(color);
  }
  render() {
    return `<polygon points="150, 18 275, 182 25,182" fill="${this.color}" />`;
  }
}

module.exports = Triangle;
