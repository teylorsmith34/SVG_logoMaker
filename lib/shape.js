class Shape {
  constructor(color) {
    this.color = color;
    this.text = "";
  }
  render() {}
  setColor(color) {
    this.color = color;
  }
  setText(text) {
    this.text = text;
  }
}

module.exports = Shape;
