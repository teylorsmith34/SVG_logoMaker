const Circle = require("./circle");

describe("Circle", () => {
  describe("render", () => {
    it("should render a circle", () => {
      const shape = new Circle();
      shape.setColor("green");
      expect(shape.render()).toBe(
        '<circle cx="50" cy="50" r="40" fill="green" />'
      );
    });
  });
});
