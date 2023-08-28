const Shape = require("./shape");

class Square extends Shape {
  constructor(color) {
    super(color);
  }
  render() {
    return `<rect x="0" y="0" width="100" height="100" fill="${this.color}" />`;
  }
}

module.exports = Square;
