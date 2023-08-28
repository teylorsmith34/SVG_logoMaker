const Shape = require("./shape");

class Triangle extends Shape {
  constructor(color) {
    super(color);
  }
  render() {
    return `<polygon points="0,0 100,0 50,100" fill="${this.color}" />`;
  }
}

module.exports = Triangle;
